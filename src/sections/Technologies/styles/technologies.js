/* eslint-disable max-len */
import styled from 'styled-components';

const TechnologiesStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  gap: 4rem;
  background-color: ${(props) => props.theme.color.background};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
    display: flex;
    align-items: center;
    gap: 2rem;
    &::after {
      content: '';
      display: block;
      width: 20vh;
      height: 3px;
      background-color: ${(props) => props.theme.color.primary};
    }
    &::before {
      content: '';
      display: block;
      width: 20vh;
      height: 3px;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
  .cards-tech {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }
  .tech-card {
    align-items: center;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    border-radius: 8px;
    color: ${(props) => props.theme.color.text};
    display: flex;
    flex-direction: column;
    text-align: center;
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
