import React, { useContext, useEffect, useState } from 'react';
import disableScroll from 'disable-scroll';
import ModalStyle from '../styles/modal';
import { MyContext } from '../context/MyProvider';

export default function Modal() {
  const { handleClose, modalData } = useContext(MyContext);
  const { title, image, stacks, deepDescription } = modalData;
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
            <h3>{ title }</h3>
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
        <section className="modal-content">
          <section className="left-content">
            <img className="preview-app" src={ image } alt={ title } />
          </section>
          <aside className="aside-menu">
            <p>{ deepDescription }</p>
            <br />
            <h3>Tecnologias Utilizadas:</h3>
            <section className="stacks-group">
              { stacks && stacks.map((stack) => (
                <img key={ stack } src={ stack } alt={ title } />
              ))}
            </section>
          </aside>
        </section>
      </section>
    </ModalStyle>
  );
}
