/* eslint-disable max-len */
import styled from 'styled-components';

const AboutStyle = styled.section`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: flex-end;
    transition: 0.3s;
    background-color: ${(props) => props.theme.color.background};
    nav {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 1.5rem 4.5rem;
      gap: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      a {
        color: ${(props) => props.theme.color.text};
        transition: all 0.2s ease-in-out;
        position: relative;
        text-decoration: none;
        &:hover {
          color: #FF8DA4;
        }
        &::after {
          content: '';
          position: absolute;
          background-color: #EAFAFF;
          height: 3px;
          width: 0;
          left: 0;
          bottom: -3px;
          transition: all 0.2s ease-in-out;
        }
        &:hover::after {
          width: 100%;
        }
      }
      button {
        background-color: transparent;
        color: ${(props) => props.theme.color.text};
        border: none;
        cursor: pointer;
        display: flex;
        font-size: 1.8rem;
        padding: 0;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #FF8DA4;
        }
      }
    }
  }
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
  .hero-section {
    height: calc(95vh - 79px);
    background-color: ${(props) => props.theme.color.background};
    transition: 0.3s;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons-group {
    display: flex;
    gap: 0.9rem;
  }
  .curriculum-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .about {
    display: flex;
    gap: 9rem;
  }
  .about-section {
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    color: ${(props) => props.theme.color.text};
    gap: 1.8rem;
  }
  .circle-picture {
    background-color: #FF8DA4;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    box-shadow: 20px -30px 0 #EAFAFF;
  }
`;

export default AboutStyle;
