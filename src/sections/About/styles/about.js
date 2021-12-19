import styled from 'styled-components';

const AboutStyle = styled.section`
  display: flex;
  flex-direction: column;
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
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
  .hero-section {
    height: calc(95vh - 76px);
    background-color: #ffff;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons-group {
    display: flex;
    gap: 0.8rem;
  }
  .about {
    display: flex;
    gap: 6rem;
  }
  .about-section {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  .circle-picture {
    background-color: #FF8DA4;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    box-shadow: 20px -30px 0 #EAFAFF;
  }
`;

export default AboutStyle;
