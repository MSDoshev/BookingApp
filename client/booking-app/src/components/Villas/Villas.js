import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./Villas.module.css";

import Villa from "./Villa/Villa";

import { fetchVillasData } from "../../store/villa-actions";

export const Villas = () => {
  const dispatch = useDispatch();
  const villasData = useSelector((state) => state.ui.villasData);
  const clipPathTop = `${getRandomValue()}%`;
  const clipPathBottom = `${getRandomValue()}%`;

  useEffect(() => {
    dispatch(fetchVillasData());
  }, [dispatch]);

  function getRandomValue() {
    return Math.floor(Math.random() * 11) * 10;
  }

  return (
    <>
      <div className={styles.title}>
        <motion.h1
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Villas
        </motion.h1>
      </div>
      <div
        className={styles.villas}
        style={{
          "--clip-path-top": clipPathTop,
          "--clip-path-bottom": clipPathBottom,
        }}
      >
        {villasData.map((villa) => (
          <Villa key={villa.id} villaData={villa} />
        ))}
      </div>
    </>
  );
};
