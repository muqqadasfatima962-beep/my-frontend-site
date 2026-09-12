import React from "react";

export default function ContactHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "420px",
        /* Exact Figma Dark Navy Blue Color */
        backgroundColor: "#022252", 
        backgroundImage: "url('/hero-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        color: "#ffffff",
        padding: "60px 24px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Figma Matching Dark Blue Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(2, 34, 82, 0.92) 0%, rgba(2, 34, 82, 0.7) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Content Box */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1150px",
          width: "100%",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <p
          style={{
            color: "#ff591f",
            fontSize: "11px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "0 0 10px 0",
          }}
        >
          Contact Us
        </p>

        <h1
          style={{
            fontSize: "44px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 12px 0",
            lineHeight: "1.2",
            fontFamily: "Georgia, serif",
          }}
        >
          Talk To Our Engineers
        </h1>

        {/* Short Accent Line */}
        <div
          style={{
            width: "35px",
            height: "3px",
            backgroundColor: "#ff591f",
            marginBottom: "18px",
          }}
        ></div>

        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.6",
            color: "#e2e8f0",
            maxWidth: "520px",
            margin: "0",
          }}
        >
          Share your inspection, calibration, testing or training requirement and our technical team will respond with a suitable scope of work.
        </p>
      </div>
    </section>
  );
}