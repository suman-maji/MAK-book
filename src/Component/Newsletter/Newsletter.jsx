import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address");
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
    setError("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="bg-gray-800 text-white rounded-2xl shadow-xl p-6 sm:p-10 w-full max-w-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          📩 Subscribe to our Newsletter
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Get the latest updates and exclusive content straight to your inbox!
        </p>
        
        <form onSubmit={submitHandler} className="mt-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="Enter your email..."
              className="bg-gray-700 text-white px-4 py-3 rounded-xl outline-none border border-gray-600 focus:border-blue-500 transition-all duration-300"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              id="subscribe"
              checked={click}
              onChange={() => setClick(!click)}
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
            <label htmlFor="subscribe" className="text-gray-300 cursor-pointer">
              Yes, subscribe me to the newsletter
            </label>
          </div>
          {showClick && !click && (
            <p className="text-red-400 text-sm mt-1">Please tick the checkbox</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-medium w-full py-3 rounded-full mt-6 shadow-lg hover:shadow-blue-500/50"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
