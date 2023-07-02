import React from "react";

const useModal = () => {
  const [state, setState] = React.useState(false);

  const open = () => {
    setState(true);
  };

  const close = () => {
    setState(false);
  };

  const modalState = state;

  return { modalState, open, close };
};

export default useModal;
