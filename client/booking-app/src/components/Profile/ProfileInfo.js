import styles from "./Profile.module.css";
import { motion } from "framer-motion";
export default function ProfileInfo({ userData }) {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
      className={styles.pageContent}
    >
      <div>
        <img
          src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
          alt="Profile"
        />
      </div>
      <div className={styles.userInfo}>
        <div>
          <span>
            Your Name:{" "}
            {userData && `${userData.firstName} ${userData.lastName}`}
          </span>
        </div>
        <div>
          <span>Your Email:</span> {userData && userData.email}
        </div>
      </div>
    </motion.div>
  );
}
