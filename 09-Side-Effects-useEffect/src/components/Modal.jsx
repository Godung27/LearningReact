import { useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ open, children }) {
  const dialog = useRef();

  dialog.current.showModal()

  return createPortal(
    <dialog className="modal">
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
