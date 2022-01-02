/* eslint-disable max-len */
import styled from 'styled-components';

const FooterStyle = styled.footer`
  .contact-section {
    padding: 4.5rem 4.5rem;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    color: ${(props) => props.theme.color.text};
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
  }
`;

export default FooterStyle;
