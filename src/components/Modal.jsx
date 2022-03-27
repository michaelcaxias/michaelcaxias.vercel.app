import React, { useContext, useEffect, useState } from 'react';
import disableScroll from 'disable-scroll';
import ModalStyle from '../styles/modal';
import { MyContext } from '../context/MyProvider';

export default function Modal() {
  const { handleClose } = useContext(MyContext);
  const [isMaximized, maximize] = useState(false);

  const closeModal = ({ target }) => {
    if (target.className.includes('modal-background')) {
      handleClose();
    }
  };

  useEffect(() => {
    disableScroll.on();
    document.body.style = 'overflow: hidden';
    return () => {
      document.body.style = 'overflow: auto';
      disableScroll.off();
    };
  }, []);

  return (
    <ModalStyle
      className="modal-background"
      onClick={ (event) => closeModal(event) }
    >
      <section
        className={
          isMaximized ? 'modal maximized-modal' : 'modal normalized-modal'
        }
      >
        <section className="superior-bar">
          <section className="window-title">
            <h3>Nome do Projeto</h3>
          </section>
          <section className="navigation-group">
            <button
              type="button"
              className="navigation-button minimize"
              onClick={ handleClose }
            >
              .
            </button>
            <button
              type="button"
              className="navigation-button maximize"
              onClick={ () => maximize((prevState) => !prevState) }
            >
              .

            </button>
            <button
              type="button"
              className="navigation-button close"
              onClick={ handleClose }
            >
              .
            </button>
          </section>
        </section>
        <h1>Modal</h1>
        <p>modal modal modal</p>
      </section>
    </ModalStyle>
  );
}
