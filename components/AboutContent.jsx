"use client";

import React from "react";
import { Check } from "lucide-react";

export default function EvolutionSection() {
  return (
    <div style={{ fontFamily: "sans-serif", width: "100%", backgroundColor: "#ffffff", boxSizing: "border-box" }}>
      
      {/* CSS to keep desktop design intact while making the box fully responsive on mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .evolution-box {
            height: auto !important;
            padding: 20px 10px !important;
          }
          .evolution-box span {
            white-space: normal !important;
            word-break: break-word !important;
          }
          .evolution-box img {
            max-height: 45px !important;
          }
        }
      `}} />

      {/* ================= 1. OUR EVOLUTION (FROM DES TO DAIS) ================= */}
      <div style={{ backgroundColor: "#f8fafc", padding: "60px 8%", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          
          {/* Left Text Block */}
          <div style={{ flex: "1 1 500px", minWidth: "280px" }}>
            <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "13px", textTransform: "uppercase", margin: "0 0 8px 0", letterSpacing: "1px" }}>
              Our Evolution
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#01286D", margin: "0 0 16px 0" }}>
              From DES To DAIS
            </h2>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              With an established client base and successful operations under DES — Dolphin Engineering Solutions — we are now expanding our capabilities through DAIS, a new identity designed to serve clients while building on enhanced technical expertise and our team.
            </p>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Same leadership, same trusted client relationships.",
                "Broader scope across inspection, calibration, testing and training.",
                "Strengthened technical team and engineering capability."
              ].map((text, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Check size={16} color="#ff591f" />
                  <span style={{ fontSize: "14px", color: "#334155" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Box Container */}
          <div style={{ flex: "1 1 450px", minWidth: "280px", display: "flex", justifyContent: "center", marginTop: "45px" }}>
            <div 
              className="evolution-box"
              style={{ 
                width: "100%", 
                maxWidth: "633px", 
                height: "240px", 
                border: "1px solid rgba(67, 67, 67, 0.5)", 
                borderRadius: "10px", 
                backgroundColor: "#ffffff", 
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center", 
                padding: "0 30px", 
                boxSizing: "border-box" 
              }}
            >
              {/* Left DES Block */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100%", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px", minHeight: "65px" }}>
                  <img 
                    src="/des-image.png" 
                    alt="DES Logo" 
                    style={{ maxWidth: "160px", maxHeight: "65px", objectFit: "contain" }} 
                  />
                </div>
                <span style={{ fontSize: "9px", fontWeight: "700", color: "#01286D", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 2px 0" }}>PREVIOUSLY</span>
                <span style={{ fontSize: "9px", color: "#475569", margin: "0 0 1px 0", lineHeight: "1.2", whiteSpace: "nowrap" }}>Dolphin Engineering Solutions</span>
                <span style={{ fontSize: "8px", color: "#64748b", margin: 0, whiteSpace: "nowrap" }}>(Private) Limited</span>
              </div>

              {/* Center Orange Arrow Circle */}
              <div style={{ display: "flex", justifyContent: "center", padding: "0 15px", alignItems: "center", height: "100%" }}>
                <div 
                  style={{ 
                    width: "32px", 
                    height: "32px", 
                    borderRadius: "50%", 
                    backgroundColor: "#ff591f", 
                    color: "#ffffff", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "16px", 
                    fontWeight: "bold",
                    flexShrink: 0
                  }}
                >
                  →
                </div>
              </div>

              {/* Right DAIS Block */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100%", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px", minHeight: "65px" }}>
                  <img 
                    src="/dais logo.svg" 
                    alt="DAIS Logo" 
                    style={{ maxWidth: "160px", maxHeight: "65px", objectFit: "contain" }} 
                  />
                </div>
                <span style={{ fontSize: "9px", fontWeight: "700", color: "#01286D", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 2px 0" }}>TODAY</span>
                <span style={{ fontSize: "9px", color: "#475569", margin: "0 0 1px 0", lineHeight: "1.2", whiteSpace: "nowrap" }}>Dolphin Engineering Solutions</span>
                <span style={{ fontSize: "8px", color: "#64748b", margin: 0, whiteSpace: "nowrap" }}>(Private) Limited</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= 2. MISSION & VISION ================= */}
      <div style={{ padding: "70px 8%", maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          
          {/* Our Mission */}
          <div style={{ backgroundColor: "#f8fafc", padding: "35px", borderRadius: "8px", position: "relative", borderLeft: "4px solid #ff591f", boxSizing: "border-box" }}>
            <span style={{ position: "absolute", right: "20px", top: "15px", fontSize: "40px", fontWeight: "bold", color: "#e2e8f0", userSelect: "none" }}>01</span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
              <span style={{ backgroundColor: "#ff591f", color: "#fff", padding: "3px 8px", fontSize: "12px", borderRadius: "4px", fontWeight: "bold" }}>01</span>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#01286D", margin: 0 }}>Our Mission</h3>
            </div>
            <p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              To deliver world-class asset integrity solutions that enhance operational safety, extend asset life, and reduce industrial risk through advanced engineering practices, technical excellence, and adherence to international standards.
            </p>
          </div>

          {/* Our Vision */}
          <div style={{ backgroundColor: "#f8fafc", padding: "35px", borderRadius: "8px", position: "relative", borderLeft: "4px solid #ff591f", boxSizing: "border-box" }}>
            <span style={{ position: "absolute", right: "20px", top: "15px", fontSize: "40px", fontWeight: "bold", color: "#e2e8f0", userSelect: "none" }}>02</span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
              <span style={{ backgroundColor: "#ff591f", color: "#fff", padding: "3px 8px", fontSize: "12px", borderRadius: "4px", fontWeight: "bold" }}>02</span>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#01286D", margin: 0 }}>Our Vision</h3>
            </div>
            <p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              To become a globally recognized leader in asset integrity management, delivering trusted, innovative, and sustainable engineering solutions that set benchmarks for safety, reliability, and performance.
            </p>
          </div>

        </div>
      </div>

      {/* ================= 3. CORE VALUES ================= */}
      <div style={{ padding: "0 8% 70px 8%", maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box" }}>
        <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "13px", textTransform: "uppercase", margin: "0 0 5px 0", letterSpacing: "1px" }}>
          Core Values
        </p>
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#01286D", margin: "0 0 10px 0" }}>
          The Way We Engineer
        </h2>
        <p style={{ color: "#64748b", fontSize: "13px", margin: "0 0 35px 0" }}>
          Our services are adapted to client requirements, operating environments, equipment conditions, and applicable technical standards.
        </p>

        {/* Responsive Grid for Core Values */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { title: "Integrity", desc: "We operate with honesty, transparency, and strong engineering ethics." },
            { title: "Safety", desc: "We prioritize human life and asset protection every time." },
            { title: "Excellence", desc: "We deliver high-quality engineering solutions aligned with international standards." },
            { title: "Innovation", desc: "We adopt modern technologies and advanced inspection methodologies." },
            { title: "Reliability", desc: "We ensure consistent, accurate, and dependable service delivery." },
            { title: "Technical Expertise", desc: "We are supported by a highly skilled and experienced team of professionals ensuring excellent execution." },
          ].map((item, index) => (
            <div key={index} style={{ border: "1px solid #e2e8f0", padding: "25px", borderRadius: "8px", backgroundColor: "#ffffff", boxSizing: "border-box" }}>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#01286D", margin: "0 0 8px 0" }}>{item.title}</h4>
              <p style={{ color: "#64748b", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}