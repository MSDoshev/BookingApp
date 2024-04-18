import { fadeInAnimation } from "../../util/animation";
import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PageTransitionAnimation>
      <div className={styles.title}>
        <motion.h1
          animate={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Contact Us
        </motion.h1>
      </div>
      <div className={styles.contactContentContainer}>
        <div className={styles.contactInfoContainer}>
          <motion.div
            whileInView={fadeInAnimation.text}
            transition={fadeInAnimation.transition}
            className={styles.contactInfo}
          >
            <h2>Mykonos Villas</h2>
            <p>
              <span>Address:</span> Some Address &#35;3, Mykonos, Greece
            </p>
            <p>
              <span>Phone:</span> 00 30 66 5555 8888
            </p>
            <p>
              <span>Email:</span> mykonos@somemail.com
            </p>
          </motion.div>
          <motion.iframe
            animate={{ x: [-50, 0], opacity: [0, 1] }}
            transition={fadeInAnimation.transition}
            title="Map"
            width="450"
            height="250"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3590102847657!2d25.375659!3d37.435527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_PLACE_NAME!2sYOUR_PLACE_NAME!5e0!3m2!1sen!2sus!4v1626752342825!5m2!1sen!2sus"
            allowFullScreen
          ></motion.iframe>
        </div>
        <motion.div
          className={styles.formContainer}
          whileInView={fadeInAnimation.text}
          transition={fadeInAnimation.transition}
        >
          <form>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name..."
              id="name"
              name="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              id="email"
              name="email"
            />
            <label htmlFor="subject">Subject</label>
            <motion.textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              whileFocus={{ height: "100px" }}
            ></motion.textarea>
            <div className={styles.contactFormBtn}>
              <button>Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    </PageTransitionAnimation>
  );
}
