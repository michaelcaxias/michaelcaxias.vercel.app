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
    border-radius: 12px;
    transition: 0.3s;
    border: 2px solid ${(props) => props.theme.color.secondaryAlternative};
    box-shadow: 0px 15px 25px 0px rgba(50, 50, 50, 0.7);
    .superior-bar {
      width: 100%;
      border-radius: 8px 8px 0 0;
      height: 2.5rem;
      display: flex;
      align-items: center;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.color.shadowLight},
        ${(props) => props.theme.color.secondary}
      );
      border-bottom: 1px solid ${(props) => props.theme.color.primary};
      .navigation-group {
        .navigation-button {
          margin-right: 10px;
          width: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 100%;
          transition: 0.3s;
          user-select: none;
        }
        .close {
          color: #ff5555;
          background-color: #ff5555;
          box-shadow: inset 1px 1px 5px #bd3a3a;
          &:hover {
           box-shadow: inset 1px 1px 10px #bd3a3a;
          }
        }
        .maximize {
          color: #50fa7b;
          background-color: #50fa7b;
          box-shadow: inset 1px 1px 5px #3db35b;
          &:hover {
           box-shadow: inset 1px 1px 10px #3db35b;
          }
        }
        .minimize {
          color: #f1fa8c;
          background-color: #f1fa8c;
          box-shadow: inset 1px 1px 5px #d0d96a;
          &:hover {
           box-shadow: inset 1px 1px 10px #d0d96a;
          }
        }
      }
      .window-title {
        flex-grow: 1;
        display: flex;
        user-select: none;
        justify-content: center;
        margin-right: -78px;
        color: ${(props) => props.theme.color.text};
      }
    }
    .modal-content {
      width: 100%;
      height: calc(100% - 40px);
      max-height: calc(100% - 40px);
      overflow: auto;
      background-color: ${(props) => props.theme.color.background};
      display: flex;
      color: ${(props) => props.theme.color.text};
      position: relative;
      .left-content {
        background-color: ${(props) => props.theme.color.secondaryAlternative};
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        .preview-app {
          max-width: 65%;
          max-height: 75%;
        }
      }
      .aside-menu {
        background-color: ${(props) => props.theme.color.background};
        justify-self: flex-end;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
        width: 35%;
        height: 100%;
        position: absolute;
        right: 0;
        .stacks-group {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.5rem;
          overflow-y: auto;
          max-height: 60px;
        }
        .github-icon {
          font-size: 1.3rem;
        }
      }
    }
  }
  @media (max-width: 990px) {
    .modal {
      .modal-content {
        flex-direction: column;
        .left-content {
          .preview-app {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .aside-menu {
          position: static;
          width: auto;
        }
      }
    }
    }
`;

export default ModalStyle;
