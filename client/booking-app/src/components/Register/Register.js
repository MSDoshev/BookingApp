import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/register-actions";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.repeatPassword) {
      throw new Error("Passwords must match!");
    }
    dispatch(registerUser(userData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <PageTransitionAnimation>
      <h1 className={styles.title}>Register</h1>
      <div className={styles.registerFormContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="Your first name..."
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Your last name..."
            name="lastName"
            id="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="example@mail.com"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            placeholder="***********"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          ></input>
          <label>Repeat Password:</label>
          <input
            type="password"
            placeholder="***********"
            name="repeatPassword"
            id="repeatPassword"
            value={userData.repeatPassword}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
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
