import { useEffect, useState } from "react";
import { getUserData } from "../../store/user-actions";
import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import Reservations from "./Reservations/Reservations";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [selectedTab, setSelectedTab] = useState("profile");

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

  function handleSelect(currentTab) {
    setSelectedTab((prev) => (prev = currentTab));
  }

  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Profile</h1>

      <div className={styles.profileContainer}>
        <div>
          <ul className={styles.optionsMenu}>
            <li onClick={() => handleSelect("profile")}>My Porfile</li>
            <li onClick={() => handleSelect("reservations")}>
              My Reservations
            </li>
          </ul>
        </div>
        {selectedTab === "profile" && userData && (
          <ProfileInfo userData={userData} />
        )}
        {selectedTab === "reservations" && userData && (
          <Reservations
            reservations={userData.reservations}
            setReservations={setUserData}
          />
        )}
      </div>
    </PageTransitionAnimation>
  );
}
