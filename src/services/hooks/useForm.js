import React from "react";

const useForm = (inputValues = {}, setDisabler) => {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setDisabler("enabled");
  };

  return { values, setValues, handleChange };
};

export default useForm;
