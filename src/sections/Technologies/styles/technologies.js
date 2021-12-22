import styled from 'styled-components';

const TechnologiesStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
  }
  .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.color.text};
  }
`;

export default TechnologiesStyle;
