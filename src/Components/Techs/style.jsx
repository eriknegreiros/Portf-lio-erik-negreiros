import styled from "styled-components";

export const TechsHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  margin-left: 1vw;

  .gradient {
    display: none;
  }

  h2 {
    font-size: 1.5rem;
    color: white;
    font-family: "Poppins", sans-serif;
  }

  .allCardsTechs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
  }

  @media (min-width: 768px) {
    padding-top: 27vh;
    align-items: flex-start;
    justify-content: flex-start;

    .gradient {
      z-index: -9999;
      width: 100vw;
      height: 80vh;
      position: absolute;
      display: inline;
    }

    .allCardsTechs {
      width: 91vw;
      flex-wrap: wrap;
      margin-top: 30px;
      flex-direction: row;
      justify-content: center;

      .uniqueCardstechs {
        width: 180px;
      }
    }
  }
`;

export const UniqueCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2a104e;
  width: 200px;
  height: 200px;
  border-radius: 20px 0 20px 0;
  border-bottom: inset 10px #7127ba;
  margin: 20px;

  :hover {
    transition: 1s;
    border-bottom: inset 10px #ffffff;
  }

  p {
    font-size: 1.1rem;
    color: white;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
  }

  img {
    height: 70px;
  }

  @media (min-width: 768px) {
    width: 180px;
  }
`;
