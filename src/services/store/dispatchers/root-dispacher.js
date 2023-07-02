import API from "../../api/api";
import rootActions from "../actions/root-action";
import cookie from "../../cookie/cookie";

const rootDispatcher = {
  getData: () => {
    return async (dispatch) => {
      try {
        const response = await API.getData();
        if (response?.success) {
          dispatch(rootActions.data.getData({ response: response }));
        }
      } catch (error) {
        dispatch(rootActions.data.getData({ error: error }));
      }
    };
  },

  createOrder: (ids, setButton) => {
    return async (dispatch) => {
      try {
        const response = await API.createOrder(ids);
        if (response?.success) {
          dispatch(rootActions.order.createOrder({ response: response }));
          setButton({ text: "Готов!" });
        }
      } catch (error) {
        dispatch(rootActions.order.createOrder({ error: error }));
        dispatch(rootActions.order.default());
        setButton({ text: "Повар зафейлил🤦‍♂️" });
      }
    };
  },

  login: (value, navigate, location) => {
    return async (dispatch) => {
      try {
        const response = await API.login({
          email: value?.email,
          password: value?.password,
        });
        if (response?.success) {
          dispatch(rootActions.user.login({ response: response }));
          dispatch(rootActions.user.setCheked(true));

          cookie.set("token", response.accessToken);
          cookie.set("refresh", response.refreshToken);

          const back = location.state?.from.pathname;

          navigate(!back ? "/" : back ?? -1);

          document.location.reload();
        }
      } catch (error) {
        dispatch(rootActions.user.login({ error: error }));
      }
    };
  },

  register: (value, navigate) => {
    return async (dispatch) => {
      try {
        const response = await API.register({
          email: value.email,
          password: value.password,
          name: value.username,
        });
        if (response?.success) {
          cookie.set("token", response.accessToken);
          cookie.set("refresh", response.refreshToken);
          dispatch(rootActions.user.register({ response: response }));
          navigate("/login", { replace: true });
        }
      } catch (error) {
        dispatch(rootActions.user.register({ error: error }));
      }
    };
  },

  forgotPassword: (value, navigate) => {
    return async (dispatch) => {
      try {
        const response = await API.forgotPassword({ email: value.email });
        if (response?.success) {
          dispatch(rootActions.user.forgotPassword({ response: response }));
          navigate("/reset-password", { replace: true });
        }
      } catch (error) {
        dispatch(rootActions.user.forgotPassword({ error: error }));
      }
    };
  },

  resetPassword: (value, navigate) => {
    return async (dispatch) => {
      try {
        const response = await API.resetPassword({
          password: value.password,
          token: value.code,
        });
        if (response?.success) {
          dispatch(rootActions.user.resetPassword({ response: response }));
          navigate("/login", { replace: true });
        }
      } catch (error) {
        dispatch(rootActions.user.resetPassword({ error: error }));
      }
    };
  },

  logout: () => {
    return async (dispatch) => {
      try {
        const response = await API.logout({ token: cookie.get("refresh") });
        if (response?.success) {
          dispatch(rootActions.user.logout({ response: response }));
          cookie.remove("token");
          cookie.remove("refresh");
        }
      } catch (error) {
        dispatch(rootActions.user.logout({ error: error }));
      }
    };
  },

  profile: (value) => {
    return async (dispatch) => {
      try {
        const response = await API.update({
          email: value.email,
          password: value.password,
          name: value.username,
        });
        if (response?.success) {
          dispatch(rootActions.user.update({ response: response }));
        }
      } catch (error) {
        dispatch(rootActions.user.update({ error: error }));
      }
    };
  },

  getUser: () => {
    return async (dispatch) => {
      try {
        const response = await API.getUser();
        if (response?.success) {
          dispatch(rootActions.user.getUser({ response: response }));
        }
      } catch (error) {
        dispatch(rootActions.user.getUser({ error: error }));
      }
    };
  },

  checkAuthorization: () => {
    return async (dispatch) => {
      if (cookie.get("token")) {
        try {
          const response = await API.getUser();
          if (response?.success) {
            dispatch(rootActions.user.getUser({ response: response }));
          }
        } catch (error) {
          dispatch(rootActions.user.default());
          dispatch(rootActions.user.getUser({ error: error }));

          cookie.remove("token");
          cookie.remove("refresh");
        } finally {
          dispatch(rootActions.user.setCheked(true));
        }
      } else {
        dispatch(rootActions.user.setCheked(true));
      }
    };
  },
};

export default rootDispatcher;
