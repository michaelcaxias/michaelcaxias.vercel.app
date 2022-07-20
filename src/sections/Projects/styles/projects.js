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

    &:after {
      content: '';
      display: block;
      width: 50vh;
      height: 3px;
      background-color: ${(props) => props.theme.color.primary};
    }

    &:before {
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
    width: 100%;
  }

  .project-card {
    flex: none;
    width: 33.333%;
    display: block;
    padding: 0.75rem;

    figure {
      display: block;
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      text-align: center;
      padding-top: 66.666%;

      img {
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: scale(1);
        transition: 0.25s ease-in-out;
        width: 100%;
        max-width: 100%;
      }

      figcaption {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: 0.45s ease-in-out;
        width: 100%;
        z-index: 1;
        color: white;
      }

      .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: 0.45s ease-in-out;
        width: 100%;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        figcaption,
        .overlay {
          opacity: 1;
        }
      }
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

  .see-more-projects {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.text};
    gap: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.color.primary};
      text-shadow: 2px 1px 5px ${(props) => props.theme.color.primary};
    }
  }

  @media (max-width: 990px) {
    h1 {
      &:after {
        width: 0;
      }

      &:before {
        width: 0;
      }
    }
  }
`;

export default ProjectsStyle;
