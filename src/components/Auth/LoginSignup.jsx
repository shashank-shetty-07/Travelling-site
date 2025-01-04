import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`Sign Up successful! Welcome, ${username}.`);
    } else {
      alert(`Welcome back, ${username}!`);
    }

    login(username); // Set the user in context
    navigate("/"); // Redirect to home
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-[url('/login-bg.jpg')] bg-cover">
      <div className="flex w-[900px] h-[60vh] shadow-lg ">
        {/* Left Side */}
        <div className="w-[500px] bg-black/30 backdrop-blur-md text-white p-10 rounded-l-xl flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Welcome Back!" : "New here?"}
          </h2>
          <p className="text-center mb-6">
            {isSignUp
              ? "Sign in to continue exploring amazing content."
              : "Join us and discover incredible features!"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-500 transition"
          >
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-white/30 backdrop-blur-md p-10 rounded-r-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {!isSignUp && (
  <span className="py-1 mb-2 mt-[-1rem] flex justify-end">
    <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</a>
  </span>
)}
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-[200px] ml-[5rem] py-2 rounded-3xl bg-fuchsia-900 text-white hover:bg-fuchsia-600 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          
          </form>
          {!isSignUp && ( <div className="mt-6 flex flex-col justify-center">
            <span className="flex font-extrabold justify-center mt-2">or</span>
                 <div className=" flex justify-center space-x-6 mt-2"> <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-600 text-2xl"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-red-700 text-2xl"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                  
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-800 hover:text-blue-600 text-2xl"
                  >
                    <i className="fab fa-x-twitter"></i>
                  </a></div>
                </div> 
              )}
          
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
