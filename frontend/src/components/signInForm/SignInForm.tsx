import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignInForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-center text-2xl font-semibold text-gray-800">
        Sign in Form
      </h2>
      <form
        // onSubmit={handleSubmit}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md m-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-semibold text-gray-800">
              Sign In
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              //   value={formData.email}
              //   onChange={handleChange}
              required
              className="h-10 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <div className="relative flex items-center">
              <input
                // type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
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
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-black hover:underline"
                onClick={() => alert("Redirect to forgot password page")}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 py-2 rounded transition"
            >
              Sign In
            </button>

            <div className="flex justify-center">
              <button
                type="button"
                className="text-sm text-black hover:underline"
                onClick={() => alert("Redirect to forgot password page")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
