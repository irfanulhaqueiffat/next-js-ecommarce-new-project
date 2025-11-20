'use client';

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const RegisterPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);
  const [success, setSuccess]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Frontend Validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!accepted) {
      setError("You must accept terms & conditions.");
      return;
    }

    setLoading(true);

    try {

      // 🔥 REGISTER API CALL
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
          role: "USER",
        }),
      });

      const data = await res.json().catch(() => null);
      console.log("REGISTER RESPONSE:", res.status, data);

      //.registration errors
      if (!res.ok || data?.success === false) {
        const msg =
          data?.errors?.[0]?.msg ||
          data?.message ||
          data?.error ||
          "Registration failed. Try again.";

        throw new Error(msg);
      }

      setSuccess(true);

      // 🔥 AUTO LOGIN AFTER SUCCESS
      const loginRes = await fetch("https://api.freeapi.app/api/v1/auth/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const loginData = await loginRes.json().catch(() => null);
      console.log("LOGIN RESPONSE:", loginRes.status, loginData);

      if (!loginRes.ok || loginData?.success === false) {
        const msg =
          loginData?.message ||
          loginData?.error ||
          loginData?.errors?.[0]?.msg ||
          "Account created, but auto-login failed.";
        throw new Error(msg);
      }

      const auth = loginData.data;

      // Save token + username
      if (auth?.access_token) {
        localStorage.setItem("token", auth.access_token);
        localStorage.setItem("username", auth.user.username);
      }

      router.push("/");

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Breadcrumb */}
      <div className="breadcrumbs flex items-center text-sm py-12 text-gray-600 mt-6 ml-8 space-x-2">
        <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
          <FaHome className="mr-1 ml-[300px]" />
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-600 font-medium">Create Account</span>
      </div>

      <div className="container">
        <div className="min-h-screen flex flex-col justify-between bg-white">

          {/* Register Card */}
          <div className="flex flex-col items-center justify-center grow">
            <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

              {error && <p className="mb-3 text-sm text-red-500 text-center">{error}</p>}
              {success && <p className="mb-3 text-sm text-green-600 text-center">Registration successful! Logging in...</p>}

              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  Accept all terms & Conditions
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
