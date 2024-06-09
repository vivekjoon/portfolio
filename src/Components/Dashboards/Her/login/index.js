import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPassword } from "../../../../redux/reducers/loginReducer";
import { useNavigate } from "react-router";
import { ReactComponent as Arrow } from "../../../../Assets/right_arrow.svg";

const HerLogin = () => {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.id);
  const password = useSelector((state) => state.auth.password);

  useEffect(() => {
    if (id && password) {
      navigate("/her/home");
    }
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      e.target.password.value === "vivekIsLove" &&
      e.target.email.value === "khyatinayal@hotbabes.com"
    ) {
      dispatch(setId(e.target.email.value));
      dispatch(setPassword(e.target.password.value));
      navigate("/her/home");
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {showError && (
        <div className="error">Please Enter Correct Combination</div>
      )}
      <form action="" className="her_login form" onSubmit={SubmitHandler}>
        <p className="header">
          Welcome,<span className="header_span">sign in to continue</span>
        </p>

        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button className="oauthButton">
          Continue
          <Arrow />
        </button>
        <button className="oauthButton" onClick={() => navigate("/")}>
          Simon Go Back
          <Arrow />
        </button>
      </form>
    </>
  );
};

export default HerLogin;
