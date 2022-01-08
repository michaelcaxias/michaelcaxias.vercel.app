import styled from 'styled-components';

const FooterStyle = styled.footer`
  .contact-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4.5rem 1rem;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    color: ${(props) => props.theme.color.text};
    h1 {
      font-size: 2.5rem;
      align-self: center;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .contact-info {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      svg {
        color: ${(props) => props.theme.color.primary};
        font-size: 1.5rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-size: 1.5em;
      }
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
      }
      .send-email-section {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        width: 30%;
      }
      .send-email {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        label {
          color: ${(props) => props.theme.color.primary};
          font-weight: bold;
        }
        .MuiFormControl-root {
          background-color: ${(props) => props.theme.color.background};
        }
        .MuiFilledInput-root {
          color: ${(props) => props.theme.color.text};
          &:after {
            border-bottom-color: ${(props) => props.theme.color.primary};
          }
        }
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: bold;
    align-items: center;
    padding: 4rem 1rem;
    background-color: ${(props) => props.theme.color.primary};
    color: #21243D;
    nav {
      display: flex;
      gap: 1.5rem;
      a {
        font-size: 2.75em;
        color: #21243D;
        transition: 0.5s;
        &:hover {
          color: #EAFAFF;
        }
      }
    }
  }
  @media (max-width: 990px) {
    .contact-info {
      flex-direction: column;
      gap: 3rem;
      .send-email-section {
        width: 40vh !important;
      }
    }
  }
`;

export default FooterStyle;
