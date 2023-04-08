import { ProjectsSection } from "./style";
import gradient from "../../Images/Gradient.png";
import contatinhos from "../../Images/contatinhos.png";
import piet from "../../Images/piet.PNG";
import amazonia from "../../Images/amazonia.PNG";
import devPath from "../../Images/devPath.png";
import { AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h3>Projetos</h3>
      <img className="gradient2" src={gradient} alt="" />

      <ul>
        <li>
          <h4>Contatinhos - Agenda com contatos</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://contatinhos-eriknegreiros.vercel.app/"
          >
            <div class="image">
              <img
                class="image__img imgProjects"
                src={contatinhos}
                alt="Bricks"
              />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">{<AiOutlineLink />}</div>
                <p class="image__description">
                  Nesse projeto, desenvolvi uma plataforma completa de cadastro
                  de contatos, com foco na segurança e na experiência do
                  usuário.
                </p>
              </div>
            </div>
          </a>
        </li>

        <li>
          <h4>PIET - E-commerce de Moda</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://aoba-eriknegreiros.vercel.app/"
          >
            <div class="image">
              <img class="image__img imgProjects" src={piet} alt="Bricks" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">{<AiOutlineLink />}</div>
                <p class="image__description">
                  Com o objetivo de explorar a tecnologia e o mercado de moda,
                  desenvolvi o PIET, um e-commerce de moda que apresenta uma
                  página inicial atraente e organizada.
                </p>
              </div>
            </div>
          </a>
        </li>

        <li>
          <h4>FAO - Projeto Social</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://eriknegreiros.github.io/teste-tecnico-front-end-okn/"
          >
            <div class="image">
              <img class="image__img imgProjects" src={amazonia} alt="Bricks" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">{<AiOutlineLink />}</div>
                <p class="image__description">
                  O site foi construído utilizando as tecnologias de JavaScript,
                  HTML e CSS (SCSS), e tem como objetivo educar e conscientizar
                  o público sobre a importância da preservação da Amazônia.
                </p>
              </div>
            </div>
          </a>
        </li>

        <li>
          <h4>DevPath - Plataforma de educação</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://devpath-1lcwfy2ij-eriknegreiros.vercel.app/"
          >
            <div class="image">
              <img class="image__img imgProjects" src={devPath} alt="Bricks" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">{<AiOutlineLink />}</div>
                <p class="image__description">
                 O DevPath é uma plataforma que oferece
                  aos estudantes de programação a oportunidade de evoluir suas
                  habilidades e se conectar com outros Devs.{" "}
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </ProjectsSection>
  );
};

export default Projects;
