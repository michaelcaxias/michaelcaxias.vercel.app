import styled from 'styled-components';

const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondaryAlternative};
`;

export default ProjectsStyle;
