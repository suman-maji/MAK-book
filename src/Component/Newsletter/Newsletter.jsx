import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) return;
    if (!click) return setShowClick(true);
    console.log("Newsletter email => ", email);
    setEmail("");
    setShowClick(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6 text-white"
      >
        <h1 className="text-3xl font-semibold text-center">Subscribe Now</h1>
        <p className="text-gray-400 text-center mt-2">Stay updated with our latest news</p>

        <div className="mt-5 relative">
          <Mail className="absolute left-3 top-3 text-gray-500" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-700 text-white px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {!email && <p className="text-red-400 text-sm mt-1">Please enter the email</p>}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            onClick={() => setClick((prev) => !prev)}
            type="checkbox"
            className="w-5 h-5 text-blue-500 focus:ring-0"
          />
          <label className="text-gray-300">Yes, Subscribe me to your newsletter</label>
        </div>

        {showClick && <p className="text-red-400 text-sm mt-1">Please tick the checkbox</p>}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={submitHandler}
          className="mt-5 w-full bg-blue-500 hover:bg-blue-600 transition-all py-3 rounded-full flex justify-center items-center gap-2 text-white font-medium"
        >
          <CheckCircle size={20} /> Subscribe
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
