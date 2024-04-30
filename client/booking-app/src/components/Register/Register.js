import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/register-actions";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [didEdit, setDidEdit] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    repeatPassword: false,
  });

  const validationRules = {
    firstName: (value) => value.trim() !== "",
    lastName: (value) => value.trim() !== "",
    email: (value) => /^[\w\-.]+@[\w-]+\.+[\w-]{2,4}$/.test(value),
    password: (value) => value.length >= 6,
    repeatPassword: (value) => value === userData.password,
  };

  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.repeatPassword) {
      throw new Error("Passwords must match!");
    }
    dispatch(registerUser(userData));
  };

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

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
          <div className={styles.inputContainer}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              placeholder="Your first name..."
              name="firstName"
              id="firstName"
              onBlur={() => handleInputBlur("firstName")}
              value={userData.firstName}
              onChange={handleInputChange}
              required
            />
            <div className={styles.validationError}>
              {didEdit.firstName &&
                !validationRules.firstName(userData.firstName) && (
                  <p>First name cannot be empty.</p>
                )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              placeholder="Your last name..."
              name="lastName"
              id="lastName"
              onBlur={() => handleInputBlur("lastName")}
              value={userData.lastName}
              onChange={handleInputChange}
              required
            />
            <div className={styles.validationError}>
              {didEdit.lastName &&
                !validationRules.lastName(userData.lastName) && (
                  <p>Last name cannot be empty.</p>
                )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              id="email"
              onBlur={() => handleInputBlur("email")}
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            <div className={styles.validationError}>
              {didEdit.email && !validationRules.email(userData.email) && (
                <p>Please enter a valid email address.</p>
              )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Password:</label>
            <input
              type="password"
              placeholder="***********"
              name="password"
              id="password"
              onBlur={() => handleInputBlur("password")}
              value={userData.password}
              onChange={handleInputChange}
              required
            />
            <div className={styles.validationError}>
              {didEdit.password &&
                !validationRules.password(userData.password) && (
                  <p>Password should be at least 6 characters.</p>
                )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Repeat Password:</label>
            <input
              type="password"
              placeholder="***********"
              name="repeatPassword"
              id="repeatPassword"
              onBlur={() => handleInputBlur("repeatPassword")}
              value={userData.repeatPassword}
              onChange={handleInputChange}
              required
            />
            <div className={styles.validationError}>
              {didEdit.repeatPassword &&
                !validationRules.repeatPassword(userData.repeatPassword) && (
                  <p>Passwords should match.</p>
                )}
            </div>
          </div>
          <Button type="submit" className="btnSubmit">
            Submit
          </Button>
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
