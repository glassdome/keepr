import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

export type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

// export const Modal = (mprops: ModalProps, children: any) => {
export const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <div className="modal" onClick={(e) => close(e)}>
      <div className="modal__backdrop">
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.querySelector(`#modal`) as HTMLDivElement
  );
};

// // Modal Opener - Takes any child and adds the onClick event
// const ModalOpener = ({ children, handleClick }) =>
//   React.cloneElement(children, { onClick: handleClick });

// export const OpensModal = (props: {
//   children: React.ReactElement<any>;
//   onClick: () => void;
// }) => {
//   if (React.isValidElement(props.children)) {
//     return React.cloneElement(props.children, {
//       onClick: () => props.onClick()
//     });
//   }
// };

export default Modal;
