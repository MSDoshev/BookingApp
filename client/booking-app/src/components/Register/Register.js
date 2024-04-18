import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Register</h1>
      <div className={styles.registerFormContainer}>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="Your first name..."
            name="firstName"
            id="firstName"
          ></input>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Your last name..."
            name="lastName"
            id="lastName"
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="example@mail.com"
            name="email"
            id="email"
          ></input>
          <label>Password:</label>
          <input type="password" placeholder="***********"></input>
          <label>Repeat Password:</label>
          <input type="repeaPpassword" placeholder="***********"></input>
        </form>
        <div>
          <p>
            Have a profile? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </PageTransitionAnimation>
  );
}
