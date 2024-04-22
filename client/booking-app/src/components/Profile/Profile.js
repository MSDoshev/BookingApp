import { useEffect, useState } from "react";
import { getUserData } from "../../store/user-actions";
import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Profile.module.css";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, []);

  console.log(userData);
  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Profile</h1>

      <div className={styles.profileContainer}>
        <div>
          <ul className={styles.optionsMenu}>
            <li>My Porfile</li>
            <li>My Reservations</li>
          </ul>
        </div>
        <div className={styles.pageContent}>
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
        </div>
      </div>
    </PageTransitionAnimation>
  );
}
