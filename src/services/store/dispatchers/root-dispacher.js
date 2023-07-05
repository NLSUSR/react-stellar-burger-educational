import API from "../../api/api";
import rootActions from "../actions/root-action";
import cookie from "../../cookie/cookie";

const rootDispatcher = {
  getData: () => {
    return (dispatch) => {
      API.getData()
        .then((r) => {
          dispatch(rootActions.data.response(r));
        })
        .catch((e) => {
          dispatch(rootActions.data.error(e));
        });
    };
  },

  createOrder: (ids, setButton) => {
    return (dispatch) => {
      API.createOrder(ids)
        .then((r) => {
          dispatch(rootActions.order.response(r));
          setButton({ text: "Готов!" });
        })
        .catch((e) => {
          dispatch(rootActions.order.error(e));
          dispatch(rootActions.order.default());
          setButton({ text: "Повар зафейлил🤦‍♂️" });
        });
    };
  },

  login: (value) => {
    return (dispatch) => {
      API.login({
        email: value?.email,
        password: value?.password,
      })
        .then((r) => {
          dispatch(rootActions.user.check(true));
          cookie.set("token", r.accessToken);
          cookie.set("refresh", r.refreshToken);
          dispatch(rootActions.user.response(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  register: (value, navigate) => {
    return (dispatch) => {
      API.register({
        email: value.email,
        password: value.password,
        name: value.username,
      })
        .then((r) => {
          navigate("/login", { replace: true });
          cookie.set("token", r.accessToken);
          cookie.set("refresh", r.refreshToken);
          dispatch(rootActions.user.response(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  forgotPassword: (value, navigate) => {
    return (dispatch) => {
      API.forgotPassword({ email: value.email })
        .then((r) => {
          navigate("/reset-password", { replace: true });
          dispatch(rootActions.user.message(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  resetPassword: (value, navigate) => {
    return (dispatch) => {
      API.resetPassword({ password: value.password, token: value.code })
        .then((r) => {
          navigate("/login", { replace: true });
          dispatch(rootActions.user.message(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  logout: (navigate) => {
    return (dispatch) => {
      API.logout({ token: cookie.get("refresh") })
        .then((r) => {
          cookie.remove("token");
          cookie.remove("refresh");
          navigate("/login", { replace: true });
          dispatch(rootActions.user.default());
          dispatch(rootActions.user.check(true));
          dispatch(rootActions.user.message(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  profile: (value) => {
    return (dispatch) => {
      API.update({
        email: value.email,
        password: value.password,
        name: value.username,
      })
        .then((r) => {
          dispatch(rootActions.user.response(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  getUser: () => {
    return (dispatch) => {
      API.getUser()
        .then((r) => {
          dispatch(rootActions.user.response(r));
        })
        .catch((e) => {
          dispatch(rootActions.user.error(e));
        });
    };
  },

  checkAuthorization: () => {
    return (dispatch) => {
      !cookie.get("token")
        ? dispatch(rootActions.user.default()) &&
          dispatch(rootActions.user.check(true))
        : API.getUser()
            .then((r) => {
              dispatch(rootActions.user.response(r));
            })
            .catch((e) => {
              cookie.remove("token");
              cookie.remove("refresh");
              dispatch(rootActions.user.default());
              dispatch(rootActions.user.error(e));
            })
            .finally(() => {
              dispatch(rootActions.user.check(true));
            });
    };
  },
};

export default rootDispatcher;
