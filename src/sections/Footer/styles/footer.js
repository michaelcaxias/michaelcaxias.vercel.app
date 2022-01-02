import styled from 'styled-components';

const FooterStyle = styled.footer`
  .contact-section {
    padding: 4.5rem 4.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    color: ${(props) => props.theme.color.text};
    h1 {
      font-size: 3rem;
    }
    svg {
      color: ${(props) => props.theme.color.primary};
      font-size: 1.5rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: 1.2rem;
    }
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: bold;
    }
    .send-email {
      display: flex;
      flex-direction: column;
      label {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default FooterStyle;
