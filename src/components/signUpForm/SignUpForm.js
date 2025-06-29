import React, { useState } from "react";
import "./SignUpForm.css";
import { Eye, EyeOff } from "lucide-react";

const SignUpForm = () => {
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("Error:", err);
      alert("Sign up failed!");
    }
  };

  return (
    <div className="warp-signUpForm">
      <h2 className="title-signUpForm">Sign Up Form</h2>
      <form onSubmit={handleSubmit} className="container-signUpForm">
        <div className="section-signUpForm">
          <div className="form-column">
            <input
              type="text"
              name="name"
              className="input-name"
              placeholder="  Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="input-email"
              placeholder="  Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="input-password-wrapper">
              <input
                type={visible ? "text" : "password"}
                name="password"
                className="input-password"
                placeholder="  Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="eye-icon" onClick={() => setVisible(!visible)}>
                {visible ? <EyeOff size={15} /> : <Eye size={15} />}
              </span>
            </div>
            <button type="submit" className="submit-signUp-button">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
