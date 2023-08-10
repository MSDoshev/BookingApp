import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
    const [click, setClick] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
  
    const handleClick = () => setClick(!click);
  
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

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link to="/">Mykonos Spa & Resort</Link>
      </div>

      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/">Villas</Link></li>
        <li><Link to="/theIsland">The Island</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
     
      <Link to='/' className={styles.actionBtn}>Book Now</Link>
      
      <div className={styles.toggleBtn} onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
      </div>
      <div className={`${styles.dropdownMenu} ${click ? styles.open : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/">Villas</Link></li>
        <li><Link to="/theIsland">The Island</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to='/' className={styles.actionBtn}>Book Now</Link></li>
      </div>
    </nav>
  );
};
