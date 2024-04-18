import { motion } from "framer-motion";
import { fadeInAnimation } from "../../util/animation";

export default function PageTransitionAnimation({ children }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={fadeInAnimation.transition}
    >
      {children}
    </motion.div>
  );
}
