/* eslint-disable max-len */
import styled from 'styled-components';

const TechnologiesStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
  }
  .tech-card {
    align-items: center;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    border-radius: 8px;
    color: ${(props) => props.theme.color.text};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 2rem;
    transition: 0.3s;
    width: 15rem;
    .icons-card {
      display: flex;
      gap: 1rem;
      font-size: 5rem;
      color: #FF8DA4;
      transition: 0.3s;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      transition: 0.3s;
      background-color: ${(props) => props.theme.color.primary};
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default TechnologiesStyle;
