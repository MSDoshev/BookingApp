import styles from "./Header.module.css"
import { useState } from "react"



export const Header = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);


return(
    <nav>
        <div className={styles.navbar}>
            <div className={styles.logo}><a href="/">Mykonos Spa & Resort</a></div>

            <ul className={styles.links}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Villas</a></li>
                <li><a href="/">The Island</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <a href='/' className={styles.actionBtn}>Book Now</a>
            <div className={styles.toggleBtn} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
        </div>

        <div className={`${styles.dropdownMenu} ${click ? styles.open : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Villas</a></li>
                <li><a href="/">The Island</a></li>
                <li><a href="/">Contact</a></li>
            <li><a href='/' className={styles.actionBtn}>Book Now</a></li>
        </div>
    </nav> 
);

}