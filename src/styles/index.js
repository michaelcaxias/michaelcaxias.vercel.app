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
  background-color: ${(props) => props.theme.color.background};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.text};
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

export const MenuStyle = styled.ul`
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 150px;
  height: auto;
  margin: 0;
  position: absolute;
  list-style: none;
  opacity: 1;
  transition: opacity 0.5s linear;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 100;
  button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem 1rem;
    transition: 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
