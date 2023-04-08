import styled from "styled-components";

export const ContactArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  padding-top: 2vh;
  padding-bottom: 50px;

  h5 {
    font-size: 1.5rem;
    color: white;
    font-family: "Poppins", sans-serif;
  }

  .divTalk{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97vw;
    margin-top: 20px;
  }

  h6{
    font-size: 1.5rem;
    color: white;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 30px;
  }

  input {
    width: 90vw;
    height: 30px;
    border-radius: 20px;
    border: none;
    padding-left: 5px;
    font-family: "Poppins", sans-serif;

  }

  textarea {
    width: 90vw;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    padding-left: 5px;
  }

  button{
    width: 230px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .divLinks{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97vw;
    margin-top: 50px;
    gap: 20px;
  }

  .square{
    width: 30px;
    height: 30px;
    & :hover{
      color: #800cc4;
      transition: 1s;
    }
  }

  .heart{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97vw;
    margin-top: 50px;
  }

  span{
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    padding-top: 4vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    form {
      width: 97vw;
    }

    input {
      width: 600px;
    }

    textarea {
      width: 600px;
    }
  }
`;
