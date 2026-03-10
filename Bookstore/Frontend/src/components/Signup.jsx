import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // form submit reload rokta hai

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    // agar sab filled hai
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setError("");

    // fields empty
    setName("");
    setEmail("");
    setPassword("");
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

        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-black p-2 mb-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-black p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black p-2 mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Signup
          </button>

        </form>

        <p className="text-center mt-4">
          Have account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;