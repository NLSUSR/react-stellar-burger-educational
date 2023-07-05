const get = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const set = (name, value, props) => {
  props = props || {};

  let exp = props.expires;

  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  props.expires = exp && exp.toUTCString ? exp.toUTCString() : props.expires;

  value = encodeURIComponent(value);

  let updatedCookie = name + "=" + value;

  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    updatedCookie += propValue !== true ? "=" + propValue : "";
  }

  document.cookie = updatedCookie;
};

const remove = (name) => {
  set(name, null, { expires: -1 });
};

const cookie = { get, set, remove };

export default cookie;
