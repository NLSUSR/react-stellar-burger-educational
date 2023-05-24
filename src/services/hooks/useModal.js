import React from "react";

const useModal = () => {
  const [modal, setModal] = React.useState({ state: false });

  const open = React.useCallback(() => {
    setModal({ state: true });
  }, []);

  const close = React.useCallback(() => {
    setModal({ state: false });
  }, []);

  const modalState = modal.state;

  return { modalState, open, close };
};

export default useModal;
