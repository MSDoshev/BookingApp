import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/logout-action";

export const Header = () => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleClick = () => setClick((prev) => !prev);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function logOutHandler() {
    dispatch(logoutUser());
  }

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link to="/">Mykonos Villas</Link>
      </div>

      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/villas">Villas</Link>
        </li>
        <li>
          <Link to="/theIsland">The Island</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      {!isAuthenticated ? (
        <div className={styles.actionBtn}>
          <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className={styles.actionBtn}>
          <Link onClick={logOutHandler}>Logout</Link> /{" "}
          <Link to="/profile">Profile</Link>
        </div>
      )}

      <div className={styles.toggleBtn} onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className={`${styles.dropdownMenu} ${click ? styles.open : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/villas">Villas</Link>
        </li>
        <li>
          <Link to="/theIsland">The Island</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          {!isAuthenticated ? (
            <div>
              <Link to="/login">Login</Link> /{" "}
              <Link to="/register">Register</Link>
            </div>
          ) : (
            <div>
              <Link onClick={logOutHandler}>Logout</Link> /{" "}
              <Link to="/profile">Profile</Link>
            </div>
          )}
        </li>
      </div>
    </nav>
  );
};
