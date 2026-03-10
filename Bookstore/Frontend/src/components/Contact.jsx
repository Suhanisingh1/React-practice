import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!message) {
      setError("Message is required");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setError("");

    // fields empty
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 rounded-lg w-96 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

        {error && (
          <p className="text-red-500 text-center text-sm mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border p-2 mb-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Enter Your Message"
            className="w-full border p-2 mb-3 rounded"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;