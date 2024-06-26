import React, { useState } from "react";
import FormContainer from "./components/FormContainer";
import ToggleContainer from "./components/ToggleContainer";
import "./index.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <FormContainer
        type="sign-up"
        title="Create Account"
        buttonText="Sign Up"
      />
      <FormContainer type="sign-in" title="Sign In" buttonText="Sign In" />
      <ToggleContainer
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
