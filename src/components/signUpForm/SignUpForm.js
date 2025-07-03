import React, { useState } from "react";
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
    <div className="w-full h-full flex flex-col p-4">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
        Sign Up Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-10 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-10 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <div className="relative flex items-center">
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-10 w-full px-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <span
                className="absolute right-2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 py-2 rounded transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
