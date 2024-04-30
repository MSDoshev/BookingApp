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
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const { isAuthenticated } = useSelector((state) => state.auth); //error

  const emailRegex = /^[\w\-.]+@[\w-]+\.+[\w-]{2,4}$/;
  const emailIsInvalid =
    didEdit.email && (!userData.email || !emailRegex.test(userData.email));

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

    dispatch(loginUser(userData.email, userData.password));
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
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleSubmit}>
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
            />
            <div className={styles.validationError}>
              {emailIsInvalid && <p>Please enter a valid email address.</p>}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="***********"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className='btnSubmit'>Submit</Button>
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
