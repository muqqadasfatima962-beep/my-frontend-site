"use client";

import React from "react";
import { Check } from "lucide-react";

export default function InspectionContent() {
  const servicesList = [
    { num: "01", title: "Asset Integrity & Risk Management" },
    { num: "02", title: "Pressure Vessel Inspection" },
    { num: "03", title: "Piping System Inspection" },
    { num: "04", title: "Storage Tank Inspection" },
    { num: "05", title: "Mechanical Integrity Assessment" },
    { num: "06", title: "Non-Destructive Testing (NDT)" },
    { num: "07", title: "Welding & Material Inspection" },
    { num: "08", title: "Corrosion Monitoring & Control" },
    { num: "09", title: "Structural Integrity Assessment" },
    { num: "10", title: "Lifting Inspection Services" },
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden" }}>
      
      {/* 1. Hero Section (Background Image: about-inspection.png) */}
      <section 
        style={{ 
          position: "relative", 
          backgroundImage: `linear-gradient(rgba(7, 55, 127, 0.75), rgba(7, 55, 127, 0.75)), url(/about-inspection.png)`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="hero-container" style={{ paddingTop: "130px", paddingBottom: "90px" }}>
          <div className="hero-content" style={{ position: "relative", zIndex: 2 }}>
            <p className="hero-small-title" style={{ color: "#ff591f", fontWeight: "700" }}>Service Domain 01</p>
            <h1 className="hero-title" style={{ color: "#ffffff" }}>
              Inspection & Integrity <span style={{ color: "#ff591f" }}>Assessment</span>
            </h1>
            <div className="hero-line" style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", margin: "15px 0" }}></div>
            <p className="hero-description" style={{ color: "#e2e8f0" }}>
              Systematic evaluation of industrial equipment, structures, and
              mechanical systems to determine their present condition and fitness for
              continued operation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper with Matching Side Padding */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 80px" }}>
        
        {/* 2. Why It Matters Section */}
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
              Inspection activities help identify defects, corrosion, deterioration,
              structural weaknesses, and operational risks that may affect asset
              safety and performance.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Early detection of corrosion, cracks, and material degradation</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Documented fitness-for-service evidence for continued operation</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Reduced risk of unplanned shutdowns and safety incidents</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Inspection findings that feed directly into maintenance planning</span>
              </li>
            </ul>
          </div>

          {/* Right Image Box (Using about-inspection.png here too) */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <div style={{ width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", backgroundColor: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}>
              <img
                src="/about-inspection.png" 
                alt="Why It Matters"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Services We Deliver Section */}
      <div 
        style={{ 
          backgroundColor: "#f4f7fa",
          backgroundImage: `
            linear-gradient(to right, #e5edf5 1px, transparent 1px),
            linear-gradient(to bottom, #e5edf5 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          padding: "50px 0",
          borderTop: "1px solid #e5edf5",
          borderBottom: "1px solid #e5edf5"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
          
          <div style={{ marginBottom: "30px" }}>
            <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
              Scope
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "10px" }}>
              Services We Deliver
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px" }}></div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {servicesList.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 22px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <span style={{ color: "#ff591f", fontWeight: "700", fontSize: "14px", backgroundColor: "#fff7ed", padding: "6px 12px", borderRadius: "8px", flexShrink: 0 }}>
                  {item.num}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#1e293b" }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}