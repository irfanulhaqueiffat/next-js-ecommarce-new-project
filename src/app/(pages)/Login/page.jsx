'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");    
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Check if user already logged in
  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    if (token) {
      setUserData({ username: "LoggedUser" }); 
    }
  }, []);

  const handleLogout = () => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("token");
    document.cookie = "token=; Max-Age=0; path=/;";
    setUserData(null);
    router.push("/Login"); // route er naam jeta use korso oita diye dio (Login / login)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!username || !password) {
      setError("Username and password required");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      // Use credentials: 'include' to allow cookies to be set by the API
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,          // e.g. emilys
          password,          // e.g. emilyspass
          expiresInMins: 30,
        }),
        credentials: "include", // allow cross-origin cookies
      });

      if (!res.ok) {
        let errMsg = "Login failed";
        try {
          const errData = await res.json();
          if (errData?.message) errMsg = errData.message;
        } catch (_) {}
        throw new Error(errMsg);
      }

      const data = await res.json();
      console.log("LOGIN SUCCESS:", data);
      setUserData(data);

      // Store token and username, and set access token as cookie for subsequent requests
      if (typeof window !== "undefined" && data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username || username);
        // Set access token as cookie (for API requests)
        document.cookie = `access_token=${data.token}; path=/; max-age=${30 * 60}; samesite=strict`;
        window.dispatchEvent(new Event("loginStateChange"));
      }

      // 👉 Navigate to HOME after successful login
      router.push("/");

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong while calling API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login">
      {/* Breadcrumb */}
      <div className="breadcrumbs flex items-center text-sm py-12 text-gray-600 mt-6 ml-8 space-x-2">
        <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
          <FaHome className="mr-1 ml-[300px]" />
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/" className="text-gray-500 hover:text-green-600 transition">
          Account
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-600 font-medium">Login</span>
      </div>

      <div className="container">
        <div className="min-h-screen flex flex-col justify-between bg-white">

          {/* Sign In Card */}
          <div className="flex flex-col items-center justify-center grow">
            <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

              {/* Error */}
              {error && (
                <p className="mb-3 text-sm text-red-500 text-center">
                  {error}
                </p>
              )}

              {/* If logged in show logout button */}
              {userData ? (
                <div className="text-center">
                  <p className="mb-3 text-green-600">
                    Logged in as{" "}
                    <span className="font-semibold">{userData.username}</span>
                  </p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-6 py-2 rounded-md mt-3 hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Username (e.g. emilys)"
                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password (e.g. emilyspass)"
                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                      href="/Registration"
                      className="text-green-600 font-medium hover:underline"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Newsletter Section */}
          <footer className="bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-semibold text-lg mb-2">Subscribe our Newsletter</h3>
              <p className="text-gray-500 text-sm mb-4">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                Phasellus imperdiet elit eu magna.
              </p>

              <div className="flex justify-center space-x-4 mt-6 text-gray-500">
                <FaFacebook className="cursor-pointer hover:text-green-600" />
                <FaTwitter className="cursor-pointer hover:text-green-600" />
                <FaPinterest className="cursor-pointer hover:text-green-600" />
                <FaInstagram className="cursor-pointer hover:text-green-600" />
              </div>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;
