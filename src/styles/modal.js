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
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  .modal {
    background-color: white;
  }
`;

export default ModalStyle;
