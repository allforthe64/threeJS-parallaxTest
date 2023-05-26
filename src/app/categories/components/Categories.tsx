'use client'
import { motion, MotionProps } from "framer-motion";


import "../styles.css";

const messageAnimation: MotionProps = {
  initial: { y: -64 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { type: "spring", duration: 0.5, bounce: 0 }
};

const arrowAnimation: MotionProps = {
  style: { originX: "center", originY: 0 },
  whileInView: { y: [0, 24], scale: [1, 1.4] },
  transition: {
    repeat: 5,
    // repeat: Infinity,
    repeatType: "mirror",
    duration: 1.5
  },
  onViewportEnter: () => console.log('arrow has entered')
};

export default function Categories() {
  return (
    <div className="container pb-[400px]">
      <h1>Scroll Triggered animation (whileInView)</h1>
      <div className="scroll-down__wrapper">
        <motion.div {...messageAnimation} className="scroll-down__message">
          <h2 style={{ textTransform: "uppercase" }}>Scroll down</h2>
          <motion.div {...arrowAnimation} className="scroll-down__arrow">
            &#8595;
          </motion.div>
        </motion.div>
      </div>
      <div className="space-y-[100px] flex flex-col items-center">
        <div className="flex justify-start w-full">
            <motion.div className="motion-box my-20" initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 50}} viewport={{amount: 0.4}}></motion.div>
        </div>
        <div className="flex justify-end w-full">
            <motion.div className="motion-box my-20" initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: -50}} viewport={{amount: 0.4}}></motion.div>
        </div>
        <div className="flex justify-start w-full">
            <motion.div className="motion-box my-20" initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 50}} viewport={{amount: 0.4}}></motion.div>
        </div>
      </div>
    </div>
  );
}