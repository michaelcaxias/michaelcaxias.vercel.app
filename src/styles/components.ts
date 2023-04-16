import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.primary};
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  padding: 8px 24px;
  transition: 0.3s;
  width: 100%;
  gap: 1rem;

  &:hover {
    box-shadow: rgba(255, 141, 164, 0.4) 0 5px, rgba(255, 141, 164, 0.3) 0 10px,
      rgba(255, 141, 164, 0.2) 0 15px, rgba(255, 141, 164, 0.1) 0 20px,
      rgba(255, 141, 164, 0.05) 0 25px;
  }
`;

export const ButtonSecondary = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.text};
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  padding: 8px 24px;
  text-align: center;
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: rgba(255, 141, 164, 0.4) 0 5px, rgba(255, 141, 164, 0.3) 0 10px,
      rgba(255, 141, 164, 0.2) 0 15px, rgba(255, 141, 164, 0.1) 0 20px,
      rgba(255, 141, 164, 0.05) 0 25px;
  }
`;

export const MenuStyle = styled.ul`
  backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.color.contextMenu};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  font-size: 14px;
  height: auto;
  list-style: none;
  margin: 0;
  opacity: 1;
  position: absolute;
  transition: opacity 0.5s linear;
  width: 150px;
  z-index: 1400;

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.color.text};
    display: flex;
    text-align: left;
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem 1rem;
    transition: 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      font-weight: 600;
    }
  }
`;
