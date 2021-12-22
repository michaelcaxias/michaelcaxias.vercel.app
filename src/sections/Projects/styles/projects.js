import styled from 'styled-components';

const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  padding: 5rem;
  gap: 4rem;
  background-color: ${(props) => props.theme.color.secondaryAlternative};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
    display: flex;
    align-items: center;
    gap: 2rem;
    &::after {
      content: '';
      display: block;
      width: 50vh;
      height: 3px;
      background-color: ${(props) => props.theme.color.primary};
    }
    &::before {
      content: '';
      display: block;
      width: 50vh;
      height: 3px;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
  .projects-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 80%;
  }
  .card {
    background-color: white;
    border-radius: 8px;
    width: 27rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
    box-shadow: 5px 5px ${(props) => props.theme.color.primary};
    .card-heading {
      border-radius: 8px 8px 0 0;
      height: 150px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      h2 {
        padding: 0.5rem 0.7rem;
        color: black;
        text-shadow: 1px 1px 1px ${(props) => props.theme.color.primary};
      }
    }
    .card-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 10rem;
      gap: 1rem;
      padding: 1.5rem;
      .buttons-group {
        display: flex;
        gap: 0.9rem;
        align-items: center;
        button {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
      }
    }
    &:hover {
      transform: scale(1.005);
    }
  }
`;

export default ProjectsStyle;
