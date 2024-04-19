import { Link } from "react-router-dom";
import { fadeInAnimation } from "../../util/animation";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
export const Home = () => {
  return (
    <PageTransitionAnimation>
      <section className={styles.slogan}>
        <motion.h1
          whileInView={fadeInAnimation.title}
          transition={fadeInAnimation.transition}
        >
          It's your time to relax!
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          className={styles.btnContact}
        >
          <Link to="/villas">Book Now</Link>
        </motion.div>
      </section>

      <motion.section className={styles.about}>
        <motion.h2
          whileInView={fadeInAnimation.text}
          transition={fadeInAnimation.transition}
        >
          About Us
        </motion.h2>
        <motion.p
          whileInView={fadeInAnimation.text}
          transition={fadeInAnimation.transition}
        >
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
        </motion.p>
        <motion.p
          whileInView={fadeInAnimation.text}
          transition={fadeInAnimation.transition}
        >
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
        </motion.p>
        <motion.p
          whileInView={fadeInAnimation.text}
          transition={fadeInAnimation.transition}
        >
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
        </motion.p>
      </motion.section>
    </PageTransitionAnimation>
  );
};
