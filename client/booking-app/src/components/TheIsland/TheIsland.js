import styles from "./TheIsland.module.css";
import { motion } from "framer-motion";
const fadeInAnimation = {
  animate: {},
};

export const TheIsland = () => {
  return (
    <>
      <div className={styles.title}>
        <motion.h1
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Mykonos Island
        </motion.h1>
      </div>

      <div className={styles.infoH}>
        <motion.div
          className={styles.subInfo}
          whileInView={{
            opacity: [0, 1],
            // scale: [0.9, 1],
          }}
          transition={{ duration: 2 }}
        >
          <h2>History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam
            bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros
            scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu
            faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula
            sapien. Vivamus porttitor velit eu quam cursus consectetur.
            Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue
            vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit
            dui quis, euismod metus. Quisque gravida fermentum aliquet. Mauris a
            suscipit elit. Integer vehicula nulla eu nibh commodo posuere.
            Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas
            quis felis ex. Sed et lobortis lacus. In gravida tristique tellus,
            suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus
            lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet
            lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin
            gravida ipsum quis risus viverra viverra. In vel justo a libero
            mattis tempus eu ut leo.
          </p>
        </motion.div>
        <motion.img
          whileInView={{
            opacity: [0, 1],
            scale: [0.9, 1],
          }}
          transition={{ duration: 2 }}
          src="https://www.mykonostownhousehotel.com/wp-content/uploads/2017/01/mykonos_towhhouse_hotel_paraportiani2.jpg"
          alt="Island event"
        />
      </div>

      <div className={styles.infoN}>
        <motion.img
          whileInView={{
            opacity: [0, 1],
            scale: [0.9, 1],
          }}
          transition={{ duration: 2 }}
          src="https://www.oluxuryvillas.com/img/article/image/mykonos_nightlife_oluxuryvillas.jpg"
          alt="Island event"
        />
        <motion.div
          className={styles.subInfo}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2 }}
        >
          <h2>Nightlife</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam
            bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros
            scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu
            faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula
            sapien. Vivamus porttitor velit eu quam cursus consectetur.
            Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue
            vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit
            dui quis, euismod metus. Quisque gravida fermentum aliquet. Mauris a
            suscipit elit. Integer vehicula nulla eu nibh commodo posuere.
            Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas
            quis felis ex. Sed et lobortis lacus. In gravida tristique tellus,
            suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus
            lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet
            lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin
            gravida ipsum quis risus viverra viverra. In vel justo a libero
            mattis tempus eu ut leo.
          </p>
        </motion.div>
      </div>

      <div className={styles.infoL}>
        <motion.div
          className={styles.subInfo}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2 }}
        >
          <h2>The Beach</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam
            bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros
            scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu
            faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula
            sapien. Vivamus porttitor velit eu quam cursus consectetur.
            Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue
            vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit
            dui quis, euismod metus. Quisque gravida fermentum aliquet. Mauris a
            suscipit elit. Integer vehicula nulla eu nibh commodo posuere.
            Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas
            quis felis ex. Sed et lobortis lacus. In gravida tristique tellus,
            suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus
            lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet
            lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin
            gravida ipsum quis risus viverra viverra. In vel justo a libero
            mattis tempus eu ut leo.
          </p>
        </motion.div>
        <motion.img
          whileInView={{
            opacity: [0, 1],
            scale: [0.9, 1],
          }}
          transition={{ duration: 2 }}
          src="https://www.costacruises.co.uk/content/dam/costa/costa-magazine/article-images/mykonos-beaches/mykonos-spiagge2.jpg.image.1296.974.high.jpg"
          alt="Island event"
        />
      </div>
    </>
  );
};
