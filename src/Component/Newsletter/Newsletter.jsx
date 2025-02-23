import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!click) {
      setShowClick(true);
      return;
    }

    console.log("Newsletter email => ", email);
    setEmail("");
    setClick(false);
    setShowClick(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center">
          Subscribe to our Newsletter
        </h1>

        <form onSubmit={submitHandler} className="mt-4 space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="subscribe"
              checked={click}
              onChange={() => setClick(!click)}
              className="w-4 h-4"
            />
            <label htmlFor="subscribe" className="text-sm">Yes, subscribe me</label>
          </div>
          {showClick && !click && <p className="text-red-400 text-xs">Please tick the checkbox.</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

