"use client";

import React from "react";

export default function AboutSection() {
  return (
    <div style={{ fontFamily: "sans-serif", width: "100%", backgroundColor: "#ffffff" }}>
      
      {/* ================= HERO SECTION ================= */}
      <div 
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(1, 40, 109, 0.82) 0%, rgba(1, 40, 109, 0.72) 40%, rgba(1, 40, 109, 0.58) 70%, rgba(1, 40, 109, 0.45) 100%), url('/industrial.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#ffffff",
          padding: "80px 8%",
          position: "relative",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", margin: "0 0 10px 0", letterSpacing: "1px" }}>
            About DAIS
          </p>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#ffffff", lineHeight: "1.2", margin: "0 0 15px 0" }}>
            Engineering Asset <br /> Integrity
          </h1>
          
          {/* Orange Underline Divider Line (Exact Figma Match) */}
          <div 
            style={{ 
              width: "50px", 
              height: "4px", 
              backgroundColor: "#ff591f", 
              marginBottom: "20px", 
              borderRadius: "2px" 
            }} 
          />

          <p style={{ color: "#e5e7eb", fontSize: "14px", lineHeight: "1.6", margin: 0, fontWeight: "300" }}>
            Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a professional engineering and asset integrity services company specializing in ensuring the safety, integrity and reliability of industrial assets. We provide advanced inspection, integrity assessment, calibration, and testing solutions across multiple industries, helping clients maintain operational safety, enhance asset performance, and extend equipment lifecycle through structured engineering practices and adherence to international standards.
          </p>
        </div>
      </div>

      {/* ================= WHO WE ARE SECTION ================= */}
      <div 
        style={{
          padding: "70px 8%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "center",
          maxWidth: "1300px",
          margin: "0 auto",
          boxSizing: "border-box"
        }}
      >
        {/* Left Text Column */}
        <div style={{ flex: "1 1 500px" }}>
          <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", margin: "0 0 10px 0", letterSpacing: "1px" }}>
            Who We Are
          </p>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#01286D", lineHeight: "1.2", margin: "0 0 20px 0" }}>
            Ensuring Safety, Integrity & <br /> Reliability
          </h2>
          <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.6", margin: "0 0 25px 0" }}>
            Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a professional engineering and asset integrity services company specializing in ensuring the safety, integrity and reliability of industrial assets. We provide advanced inspection, integrity assessment, calibration, and testing solutions across multiple industries, helping clients maintain operational safety, enhance asset performance, and extend equipment lifecycle through structured engineering practices and adherence to international standards.
          </p>
          
          <div style={{ borderLeft: "4px solid #ff591f", paddingLeft: "15px" }}>
            <p style={{ color: "#01286D", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", margin: 0 }}>
              “Ensuring safety, integrity, and reliability”
            </p>
          </div>
        </div>

        {/* Right Image Container */}
        <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "500px", height: "360px", borderBottom: "4px solid #ff591f", overflow: "hidden" }}>
            <img 
              src="/about-inspection.png" 
              alt="Engineers performing inspection"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}