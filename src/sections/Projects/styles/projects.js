import styled from 'styled-components';

const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondaryAlternative};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
  }
  .card {
    background-color: white;
    width: 25rem;
    height: 18rem;
    border-radius: 8px;
  }
`;

export default ProjectsStyle;
