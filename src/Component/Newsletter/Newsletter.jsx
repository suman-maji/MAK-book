import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter the email");
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
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center">
          Subscribe to our Newsletter
        </h1>

        <form onSubmit={submitHandler} className="mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none border border-gray-600 focus:border-blue-500 transition-all duration-300"
            />
          </div>
          {!email && <p className="text-red-400 text-sm mt-1">Please enter the email</p>}

          <div className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              id="subscribe"
              checked={click}
              onChange={() => setClick(!click)}
              className="w-4 h-4"
            />
            <label htmlFor="subscribe" className="text-sm">Yes, subscribe me</label>
          </div>
          {showClick && !click && <p className="text-red-400 text-sm mt-1">Please tick the checkbox</p>}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium w-full py-2 rounded-md mt-4 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

