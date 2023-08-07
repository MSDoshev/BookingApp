import styles from "./Footer.module.css";

export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.left}>
               <h1><a href="/">Mykonos Spa & Resort</a></h1> 
            </div>

            <ul className={styles.right}>
                <li>
                    <h2>Explore</h2>
                    <ul className={styles.box}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Villas</a></li>
                        <li><a href="/">The Island</a></li>
                    </ul>
                </li>
                <li className={styles.features}>
                    <h2>Need Help?</h2>
                    <ul className={styles["box h-box"]}>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </li>
                <li>
                    <h2>Legal</h2>
                    <ul className={styles.box}>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                    </ul>
                </li>
            </ul>

            <div className={styles.rights}>
                <p>All rights reserved &copy; 2023</p>
            </div>
        </div>
    );
}