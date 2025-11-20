import React, { useState, useEffect } from "react";
import Image from "next/image";
import Add from "../../../public/images/Add.png"

const NewSettelarAdd = () => {
  const [show, setShow] = useState(true);
  const [dontShow, setDontShow] = useState(false);

  const closePopup = () => {
    if (dontShow) {
      localStorage.setItem("hideNewsletterPopup", "true");
    }
    setShow(false);
  };

  useEffect(() => {
    const hide = localStorage.getItem("hideNewsletterPopup");
    if (hide === "true") setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "700px",
          display: "flex",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            border: "none",
            background: "none",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Left Image */}
        <div style={{ width: "280px", height: "100%" }}>
          <img
            src={Add}
            alt="newsletter"
           width={200}
           height={200}
          />
        </div>

        {/* Right Side */}
        <div style={{ padding: "30px", flex: 1 }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "24px" }}>
            Subscribe to Our Newsletter
          </h2>

          <p style={{ marginBottom: "20px" }}>
            Subscribe to our newsletter and save your{" "}
            <strong>20% money</strong> with discount code today.
          </p>

          <div
            style={{
              display: "flex",
              margin: "20px 0",
              gap: "10px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ddd",
              }}
            />
            <button
              style={{
                background: "#2eb35a",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>

          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={dontShow}
              onChange={() => setDontShow(!dontShow)}
              style={{ marginRight: "6px" }}
            />
            Do not show this window
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewSettelarAdd;
