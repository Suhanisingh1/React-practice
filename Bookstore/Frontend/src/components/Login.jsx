import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();   // form submit hone se rokta hai


    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("")
    setPassword("")

    // yahan tum API call ya validation kar sakte ho
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 rounded-lg w-80 shadow-md relative">

        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;