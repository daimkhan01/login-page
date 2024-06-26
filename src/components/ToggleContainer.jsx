import React from "react";

function ToggleContainer({ onRegisterClick, onLoginClick }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button className="hidden" id="login" onClick={onLoginClick}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register your personal details to use all of site features</p>
          <button className="hidden" id="register" onClick={onRegisterClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleContainer;
