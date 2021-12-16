import styled from 'styled-components';

const AboutStyle = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  header {
    display: flex;
    justify-content: flex-end;    
    nav {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 1.5rem 4rem;
      gap: 1.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #FF8DA4;
        }
      }
    }
  }
`;

export default AboutStyle;
