import { LandingPage } from "./style";
import img from "../../Images/emoji.png";
import full from "../../Images/full.png";
import { motion } from "framer-motion";

const Landing = () => {


  
  return (
    <LandingPage id="home">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <div>
          <img className="emoji" src={img} alt="emoji with cap" />
          <img className="full" src={full} alt="" />
        </div>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
        >
      <div className="div_text">
        <h2>Desenvolvedor Front-End</h2>
        <p>Atualmente estudante na Kenzie Academy Brasil.</p>
        <p className="weight">
          Meu contato com tecnologia começou desde cedo, sempre tive um
          relacionamento bem próximo, mais precisamente na parte de games,
          entretanto, meu interesse com o passar do tempo foi voltado para
          software e esse interesse se mantém até hoje.
        </p>
      </div>
      </motion.div>
    </LandingPage>
  );
};

export default Landing;
