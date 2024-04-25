import styles from "./Button.module.css";
import { motion } from "framer-motion";

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      className={styles[className]}
      {...props}
    >
      {children}
    </motion.button>
  );
}
