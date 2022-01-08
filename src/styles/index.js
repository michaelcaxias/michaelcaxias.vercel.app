/* eslint-disable max-len */
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background-color: #FF8DA4;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.primary};
  cursor: pointer;
  padding: 8px 24px 8px 24px;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(255,141,164, 0.4) 0px 5px,
    rgba(255,141,164, 0.3) 0px 10px,
    rgba(255,141,164, 0.2) 0px 15px,
    rgba(255,141,164, 0.1) 0px 20px,
    rgba(255,141,164, 0.05) 0px 25px;
  }
`;

export const ButtonSecondary = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 8px;
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.text};
  cursor: pointer;
  display: flex;
  padding: 8px 24px 8px 24px;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  transition: 0.3s;
  text-align: center;
  &:hover {
    box-shadow: rgba(255,141,164, 0.4) 0px 5px,
    rgba(255,141,164, 0.3) 0px 10px,
    rgba(255,141,164, 0.2) 0px 15px,
    rgba(255,141,164, 0.1) 0px 20px,
    rgba(255,141,164, 0.05) 0px 25px;
  }
`;

export const MenuStyle = styled.ul`
  font-size: 14px;
  background-color: ${(props) => props.theme.color.contextMenu};
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 150px;
  height: auto;
  margin: 0;
  position: absolute;
  list-style: none;
  opacity: 1;
  transition: opacity 0.5s linear;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  z-index: 100;
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
