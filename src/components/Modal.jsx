import React, { useContext, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import ModalStyle from '../styles/modal';
import { MyContext } from '../context/MyProvider';

export default function Modal() {
  const { handleClose } = useContext(MyContext);

  const closeModal = ({ target }) => {
    console.log(target.className);
    if (target.className.includes('modal-background')) {
      handleClose();
    }
  };

  useEffect(() => {
    disableScroll.on();
    return () => {
      disableScroll.off();
    };
  }, []);

  return (
    <ModalStyle className="modal-background" onClick={ (event) => closeModal(event) }>
      <section className="modal">
        <h1>Modal</h1>
        <p>modal modal modal</p>
      </section>
    </ModalStyle>
  );
}
