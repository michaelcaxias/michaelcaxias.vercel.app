import styled from 'styled-components';

const TechnologiesStyle = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
`;

export default TechnologiesStyle;
