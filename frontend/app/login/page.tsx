"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);

      // Store the token in local storage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Use Next.js router for redirection
        router.push("/main");
      } else {
        setError("No token received");
      }
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-to-lavender">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome back to <span className="text-[#3c2ca2]">Workflo</span>!
        </h1>
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
          onClick={handleLogin}
          className="w-full py-2 bg-[#3c2ca2] text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#3c2ca2]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
