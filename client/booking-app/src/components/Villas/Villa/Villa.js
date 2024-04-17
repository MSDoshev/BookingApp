import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Villa.module.css";
import { fadeInAnimation } from "../../../util/animation";

const Villa = ({ villaData }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className={styles.villa}
    >
      <motion.div
        whileInView={fadeInAnimation.text}
        transition={fadeInAnimation.transition}
        className={styles.villaContent}
      >
        <div className={styles.info}>
          <h2>{villaData.title}</h2>
          <p>{villaData.description}</p>
        </div>
        <div className={styles.vInfo}>
          <div>
            <h3>Up to {villaData.capacity} people</h3>
            <h3>Price from &euro;{villaData.price}</h3>
          </div>
          <Link to={`/villa/${villaData.id}`} className={styles.bookBtn}>
            Book Now
          </Link>
        </div>
      </motion.div>
      <motion.img
        whileInView={fadeInAnimation.image}
        transition={fadeInAnimation.transition}
        src={villaData.image.url}
        alt={villaData.image.alt}
      />
    </motion.div>
  );
};

export default Villa;
