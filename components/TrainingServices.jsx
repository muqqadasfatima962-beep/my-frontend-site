"use client";

import React from "react";
import { Check } from "lucide-react";

export default function TrainingServices() {
  return (
    <div style={{ width: "100%", backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden", fontFamily: "sans-serif" }}>
      
      {/* 1. Hero Section */}
      <section 
        style={{ 
          position: "relative", 
          backgroundColor: "#031d44", 
          backgroundImage: `linear-gradient(90deg, rgba(3, 29, 68, 0.94) 0%, rgba(3, 29, 68, 0.82) 100%), url('/clock.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "135px", 
          paddingBottom: "135px"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "750px", color: "#ffffff" }}>
            
            <h1 style={{ fontSize: "44px", fontWeight: "800", marginBottom: "16px", lineHeight: "1.1", letterSpacing: "-0.5px" }}>
              Training Services
            </h1>
            
            <div style={{ width: "45px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>
            
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#cbd5e1", maxWidth: "620px" }}>
              Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 40px" }}>
        
        {/* 2. Why It Matters Section (Text + Image) */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
          
          {/* Left Text Content */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
              Overview
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "16px" }}>
              Why It Matters
            </h2>
            <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
              Our training services support personnel in developing the competences required to perform industrial activities safely, accurately, and in accordance with applicable technical practices and safety requirements.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Personnel competent in inspection and safe testing practice.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Stronger hazard awareness on lifting and electrical work.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Faster, more confident emergency response.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Practical skills transferred directly to site conditions.</span>
              </li>
            </ul>
          </div>

          {/* Right Image Box */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <div style={{ width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", backgroundColor: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}>
              <img
                src="/training.svg" 
                alt="Training Why It Matters"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}