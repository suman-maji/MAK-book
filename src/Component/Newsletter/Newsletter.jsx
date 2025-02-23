import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter a valid email address");
      return;
    }
    if (!isChecked) {
      setError("Please tick the checkbox to subscribe");
      return;
    }

    console.log("Newsletter email => ", email);
    setEmail("");
    setIsChecked(false);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg p-5 w-full max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          📩 Subscribe to our Newsletter
        </h1>
        <p className="text-gray-400 text-center text-sm mt-1">
          Stay updated with our latest news!
        </p>

        <form onSubmit={submitHandler} className="mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="bg-gray-700 text-white px-3 py-2 rounded-lg outline-none border border-gray-600 focus:border-blue-500 transition-all duration-300 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              id="subscribe"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <label htmlFor="subscribe" className="text-gray-300 text-sm cursor-pointer">
              Yes, subscribe me
            </label>
          </div>

          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-medium w-full py-2 rounded-lg mt-4 shadow-md hover:shadow-blue-500/50 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

