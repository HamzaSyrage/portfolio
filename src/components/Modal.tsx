import React, { useEffect, useRef } from "react";
const Modal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (modalRef) {
      modalRef.current?.showModal();
    }
  });
  return (
    <dialog ref={modalRef}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </dialog>
  );
};

export default Modal;
