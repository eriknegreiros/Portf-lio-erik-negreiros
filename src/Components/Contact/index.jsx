import { ContactArea } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";


const Contact = () => {
  return (
    <ContactArea id="talk">
      <h5 >Contato</h5>

      <div  className="divTalk">
        <h6>Vamos conversar!</h6>
      </div>

      <form action="https://api.staticforms.xyz/submit" method="post">
        <input
          type="hidden"
          name="accessKey"
          value="c58a67b5-9600-49eb-80bd-39b01662fbd2"
        />
        <input type="hidden" name="redirectTo" value='https://email-enviado-obrigado.vercel.app/' />
          



        <input type="text" name="name" placeholder="Digite seu Nome" required />

        <input
          type="text"
          name="email"
          placeholder="Digite seu E-mail"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          required
        />

        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div className="divLinks">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/eriknegreiros/"
        >
          {<BsLinkedin className="square" />}
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/eriknegreiros"
        >
          {<FaGithubSquare className="square" />}
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1aPkoGbTG_W6yH-_npBu__trUejPi_VdD/view?usp=sharing"
        >
          {<AiFillFileText className="square" />}
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511985089465&text=Ol%C3%A1,%20Erik!%20Tudo%20bem?%20"
        >
          {<FaWhatsappSquare className="square" />}
        </a>
      </div>
      <div className="heart">
        <span>Feito com 💜</span>
      </div>
    </ContactArea>
  );
};

export default Contact;
