/* eslint-disable max-len */
import styled from 'styled-components';

const AboutStyle = styled.section`
  header {
    display: flex;
    justify-content: flex-end;
    transition: 0.3s;
    background-color: ${(props) => props.theme.color.background};
    .mobile-menu {
      display: none;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }
    .nav-menu {
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
    width: fit-content;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      position: absolute;
      height: 360px;
      filter: saturate(0);
    }
  }
  @media (max-width: 990px) {
    header {
      .nav-menu {
        visibility: hidden;
        overflow: hidden;
        position: absolute;
        flex-direction: column;
        background-color: ${(props) => props.theme.color.background};
        top: 0;
        padding: 0;
        width: 100%;
        height: 0;
        font-size: 2rem;
        transition: all .5s ease-in-out;
      }
      .mobile-menu {
        background: transparent;
        border: none;
        position: relative;
        display: flex;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
      .menu-bar {
        border-radius: 5px;
        transition: all .5s ease-in-out;
        &::before, ::after {
          content: '';
          position: absolute;
          left: 0;
          width: 40px;
          height: 6px;
          background: #FF8DA4;
          border-radius: 5px;
          transition: all .5s ease-in-out;
        }
        &::before {
          transform: translateY(-8px);
        }
        &::after {
          transform: translateY(8px);
        }
      }
      .mobile-menu.open {
        .menu-bar {
          background: transparent;
          box-shadow: none;
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
      }
    }
    .open {
      .nav-menu {
        display: flex;
        visibility: visible;
        height: 100%;
        a {
          width: 100%;
          &:hover {
            background-color: ${(props) => props.theme.color.secondaryAlternative};
          }
        }
        button {
          justify-content: center;
          font-size: 3.5rem;
          width: 100%;
          &:hover {
            background-color: ${(props) => props.theme.color.secondaryAlternative};
          }
        }
      }
    }
    text-align: center;
    .hero-section {
      padding: 5rem;
      height: 100%;
      .about {
        flex-direction: column-reverse;
        align-items: center;
        gap: 2.5rem;
        .about-section {
          h1 {
            font-size: 2rem;
          }
          .buttons-group {
            flex-direction: column;
            width: auto;
          }
        }
      }
    }
    .circle-picture {
      width: 300px;
      height: 300px;
      img {
        height: 300px;
      }
    }
  }
`;

export default AboutStyle;
