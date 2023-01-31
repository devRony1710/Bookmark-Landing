import React, { useRef } from "react";

// components
import InputWithLabel from "../components/InputWithLabel";

// constants
import { LOGIN_HERO_IMG } from "../common/constants";

// styles
import "../styles/LoginPage.scss";

const LoginPage = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      userName: formData.get("user"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  return (
    <div className="login-container">
      <img src={LOGIN_HERO_IMG} alt="login hero" className="hero-login-image" />

      <div className="form-container">
        <h2>Ingresar</h2>

        <form className="login-form" ref={form}>
          <InputWithLabel
            labelTitle="User Name"
            labelFor="user"
            inputName="user"
            inputType="text"
            placeholder="Ej: MyFunUser"
          />
          <InputWithLabel
            labelTitle="Password"
            labelFor="password"
            inputName="password"
            inputType="password"
            placeholder="*********"
          />

          <button className="login-btn" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
