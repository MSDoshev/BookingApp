import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../store/login-actions";
import Button from "../UI/Button";

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated } = useSelector((state) => state.auth); //error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(userData.email, userData.password));
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="example@mail.com"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="***********"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          ></input>
          <Button type="submit">Submit</Button>
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
