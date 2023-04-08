import techsData from "../../Data";
import { TechsHome } from "./style";
import { UniqueCards } from "./style";
import gradient from "../../Images/Gradient.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";

const Techs = () => {
  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <TechsHome id="techs">
   
     <h2 id="techs">Tecnologias</h2>
      <div className="allCardsTechs">
        <img className="gradient" src={gradient} alt="" />
        {techsData.map((element) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <FadeInWhenVisible>
              {" "}
              <UniqueCards>
                <img src={element.img} alt="cards Techs" />
                <p>{element.name}</p>
              </UniqueCards>
            </FadeInWhenVisible>
          </motion.div>
        ))}
      </div>
    </TechsHome>
  );
};

export default Techs;
