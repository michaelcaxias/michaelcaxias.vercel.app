/* eslint-disable max-len */
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background-color: #FF8DA4;
  border-radius: 8px;
  border: none;
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
  background-color: white;
  border-radius: 8px;
  border: 2px solid black;
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
