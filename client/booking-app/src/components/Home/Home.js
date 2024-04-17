import styles from "./Home.module.css";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <>
      <section className={styles.slogan}>
        <motion.h1
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          It's your time to relax!
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          className={styles.btnContact}
        >
          <motion.a href="/">Contact Us</motion.a>
        </motion.div>
      </section>

      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          venenatis quis ex id mollis. Quisque volutpat efficitur sagittis.
          Suspendisse quis scelerisque eros. Nam vel leo magna. Praesent
          hendrerit justo sapien, ac varius felis pharetra ultricies. Morbi
          eleifend eros lacus, sit amet efficitur erat aliquam quis. Donec arcu
          lectus, dapibus sed tortor in, euismod gravida metus. In molestie in
          metus eu cursus. Curabitur at molestie ante, in vulputate lacus.
          Phasellus turpis urna, sollicitudin non eleifend non, sagittis id
          libero. Quisque mollis velit id gravida aliquam. Curabitur imperdiet
          dapibus ex molestie egestas. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis quis fermentum
          nisl. Quisque feugiat nisi at augue vulputate viverra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          venenatis quis ex id mollis. Quisque volutpat efficitur sagittis.
          Suspendisse quis scelerisque eros. Nam vel leo magna. Praesent
          hendrerit justo sapien, ac varius felis pharetra ultricies. Morbi
          eleifend eros lacus, sit amet efficitur erat aliquam quis. Donec arcu
          lectus, dapibus sed tortor in, euismod gravida metus. In molestie in
          metus eu cursus. Curabitur at molestie ante, in vulputate lacus.
          Phasellus turpis urna, sollicitudin non eleifend non, sagittis id
          libero. Quisque mollis velit id gravida aliquam. Curabitur imperdiet
          dapibus ex molestie egestas. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis quis fermentum
          nisl. Quisque feugiat nisi at augue vulputate viverra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          venenatis quis ex id mollis. Quisque volutpat efficitur sagittis.
          Suspendisse quis scelerisque eros. Nam vel leo magna. Praesent
          hendrerit justo sapien, ac varius felis pharetra ultricies. Morbi
          eleifend eros lacus, sit amet efficitur erat aliquam quis. Donec arcu
          lectus, dapibus sed tortor in, euismod gravida metus. In molestie in
          metus eu cursus. Curabitur at molestie ante, in vulputate lacus.
          Phasellus turpis urna, sollicitudin non eleifend non, sagittis id
          libero. Quisque mollis velit id gravida aliquam. Curabitur imperdiet
          dapibus ex molestie egestas. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis quis fermentum
          nisl. Quisque feugiat nisi at augue vulputate viverra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          venenatis quis ex id mollis. Quisque volutpat efficitur sagittis.
          Suspendisse quis scelerisque eros. Nam vel leo magna. Praesent
          hendrerit justo sapien, ac varius felis pharetra ultricies. Morbi
          eleifend eros lacus, sit amet efficitur erat aliquam quis. Donec arcu
          lectus, dapibus sed tortor in, euismod gravida metus. In molestie in
          metus eu cursus. Curabitur at molestie ante, in vulputate lacus.
          Phasellus turpis urna, sollicitudin non eleifend non, sagittis id
          libero. Quisque mollis velit id gravida aliquam. Curabitur imperdiet
          dapibus ex molestie egestas. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis quis fermentum
          nisl. Quisque feugiat nisi at augue vulputate viverra.
        </p>
      </section>
    </>
  );
};
