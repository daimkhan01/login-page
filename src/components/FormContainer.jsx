import React, { useState } from "react";
import SocialIcons from "./SocialIcons";

function FormContainer({ type, title, buttonText }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (type === "sign-up" && !formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Submit the form data
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className={`form-container ${type}`}>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <SocialIcons />
        {type === "sign-up" ? (
          <>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="eg. muhammad daim"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </>
        ) : (
          <span>or use your email for login</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
        {type === "sign-in" && <a href="#">Forgot Your Password?</a>}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default FormContainer;
