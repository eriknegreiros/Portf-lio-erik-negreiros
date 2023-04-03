import styled from "styled-components";

export const LandingPage = styled.main`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div_text {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  .weight {
    font-weight: 300;
    font-size: 15px;
    text-align: left;
  }

  h2,
  p {
    font-family: "Poppins", sans-serif;
    color: white;
    text-align: center;
  }

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 15px;
  }

  .emoji {
    margin-top: 80px;
  }

  .full {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @keyframes typewriter {
      from {
        width: 0%;
      }
      to {
        width: 82%;
      }
    }
    @keyframes blink {
      from {
        border-color: white;
      }
      to {
        border-color: transparent;
      }
    }

    .emoji {
      display: none;
    }

    .full {
      display: inline;
      margin-top: 170px;
      width: 47vw;
      animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    h2,
    p {
      text-align: left;
      margin-left: 7vw;
      animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    h2 {
      margin-top: 170px;
      font-size: 37px;
      white-space: nowrap;
      overflow: hidden;
      animation: typewriter 3s steps(30) infinite alternate,
        blink 800ms steps(30) infinite normal;
      border-right: 5px solid white;
    }

    p {
      font-size: 18px;
      width: 40vw;
    }
  }
`;
