import React, { useContext } from 'react';
import ModalStyle from '../styles/modal';
import { MyContext } from '../context/MyProvider';

export default function Modal() {
  const { handleClose } = useContext(MyContext);

  const closeModal = ({ target }) => {
    if (target.className === 'sc-iCfMLu jWPEfE') {
      handleClose();
    }
  };

  return (
    <ModalStyle onClick={ (event) => closeModal(event) }>
      <section className="modal">
        <h1>Modal</h1>
        <p>modal modal modal</p>
      </section>
    </ModalStyle>
  );
}
