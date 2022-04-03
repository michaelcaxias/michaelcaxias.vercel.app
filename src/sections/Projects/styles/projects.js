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
    font-size: 2rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .card {
    background-color: white;
    border-radius: 8px;
    width: 65vh;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.background};
    box-shadow: #FF8DA4 0px 2px 1px,
    rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: ${(props) => props.theme.color.text};
    .card-heading {
      border-radius: 8px 8px 0 0;
      height: 150px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      h2 {
        padding: 0.5rem 0.7rem;
        color: black;
        text-shadow: 2px 1px 5px ${(props) => props.theme.color.primary};
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
      box-shadow: #FF8DA4 0px 2px 1px,
      rgba(255, 141, 164, 0.08) 0px 4px 2px,
      rgba(255, 141, 164, 0.08) 0px 8px 4px,
      rgba(255, 141, 164, 0.08) 0px 16px 8px,
      rgba(255, 141, 164, 0.08) 0px 32px 16px;
    }
  }
  .invisible-button {
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    .projects-cards {
      grid-template-columns: 1fr;
    }
    .card {
      width: 100%;
    }
    h1 {
      &::after {
        width: 0;
      }
      &::before {
        width: 0;
      }
    }
  }
`;

export default ProjectsStyle;
