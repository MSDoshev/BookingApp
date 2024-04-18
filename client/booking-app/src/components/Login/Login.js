import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginFormContainer}>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="example@mail.com"
            name="email"
            id="email"
          ></input>
          <label>Password:</label>
          <input type="password" placeholder="***********"></input>
        </form>
        <div>
          <p>
            Don't have a profile? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </PageTransitionAnimation>
  );
}
