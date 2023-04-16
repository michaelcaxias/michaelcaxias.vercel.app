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
