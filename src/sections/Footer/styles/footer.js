/* eslint-disable max-len */
import styled from 'styled-components';

const FooterStyle = styled.footer`
  .contact-section {
    padding: 1.5rem 4.5rem;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.color.secondaryAlternative};
    color: ${(props) => props.theme.color.text};
    svg {
      color: ${(props) => props.theme.color.primary};
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    li {
      display: flex;
      gap: 1rem;
      font-weight: bold;
    }
  }
`;

export default FooterStyle;
