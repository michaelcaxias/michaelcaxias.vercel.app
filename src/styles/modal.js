import styled from 'styled-components';

const ModalStyle = styled.section`
  position: fixed;
  z-index: 1300;
  height: 100%;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  .maximized-modal {
    width: 100%;
    height: 100%;
  }
  .normalized-modal {
    width: 80%;
    height: 85%;
  }
  .modal {
    background-color: white;
    border-radius: 8px;
    transition: 0.3s;
    .superior-bar {
      width: 100%;
      border-radius: 8px 8px 0 0;
      height: 2rem;
      display: flex;
      align-items: center;
      background-color: #282a36;
      .navigation-group {
        justify-self: flex-end;
        .navigation-button {
          margin-left: 10px;
          width: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 100%;
        }
        .close {
          color: #ff5555;
          background-color: #ff5555;
        }
        .maximize {
          color: #50fa7b;
          background-color: #50fa7b;
        }
        .minimize {
          color: #f1fa8c;
          background-color: #f1fa8c;
        }
      }
    }
  }
`;

export default ModalStyle;
