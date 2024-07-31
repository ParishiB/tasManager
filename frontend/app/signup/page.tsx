"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        name,
        email,
        password,
      });

      console.log("Signup successful:", response.data);

      // Store the token in local storage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Optionally redirect the user or display a success message
        window.location.href = "/dashboard"; // Example redirect, change as needed
      } else {
        setError("No token received");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-to-lavender">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome to <span className="text-[#3c2ca2]">Workflo</span>!
        </h1>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border bg-gray-100 rounded"
        />
        <input
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border bg-gray-100 rounded"
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border bg-gray-100 rounded pr-10"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="button"
          onClick={handleSignup}
          className="w-full py-2 bg-[#3c2ca2] text-white rounded hover:bg-blue-600"
        >
          Signup
        </button>
        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3c2ca2]">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
