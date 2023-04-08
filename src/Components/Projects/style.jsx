import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  padding-top: 2vh;
  padding-bottom: 50px;
  h3 {
    font-size: 1.5rem;
    color: white;
    font-family: "Poppins", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-top: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #1a0b2e;
    border-radius: 10px;
    padding: 10px;
  }

  h4{
    font-size: 1rem;
    color: white;
    font-family: "Poppins", sans-serif;
  }

  .gradient2 {
    display: none;
  }


  .divProjects{
    display: none;
    position: absolute;
    z-index: 9999;
  }

  .image {
	position: relative;
	width: auto;
}

.image__img {
	display: block;
	width: 100%;
}

.imgProjects {
    width: 270px;
    height: 150px;
    border-radius: 20px;
  }

.image__overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	color: #ffffff;
	font-family: 'Quicksand', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.25s;
  border-radius: 20px;
}

.image__overlay--blur {
	backdrop-filter: blur(5px);
}

.image__overlay>* {
	transform: translateY(20px);
	transition: transform 0.25s;
}

.image__overlay:hover {
	opacity: 1;
}

.image__overlay:hover>* {
	transform: translateY(0);
}

.image__title {
	font-size: 2em;
	font-weight: bold;
}

.image__description {
	font-size: 14px;
	margin-top: 0.25em;
  text-align: center;
  font-family: "Poppins", sans-serif;
  line-height: 20px
}

 

  @media (min-width: 768px) {
    padding-top: 5vh;


    align-items: flex-start;
    justify-content: flex-start;

    ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px;
  }

  
    .imgProjects {
    width: 400px;
    height: 200px;
  }

    .gradient2 {
      z-index: -9999;
      width: 97vw;
      position: absolute;
      display: inline;
    }
  }
`;
