"use client";

import React from "react";
import { Check } from "lucide-react";

export default function CalibrationServices() {
  const servicesList = [
    { num: "01", title: "Pressure Instrument Calibration" },
    { num: "02", title: "Pressure Gauge Calibration" },
    { num: "03", title: "Temperature Instrument Calibration" },
    { num: "04", title: "Flow Meter Calibration" },
    { num: "05", title: "Electrical Equipment Calibration" },
    { num: "06", title: "Instrument Calibration" },
    { num: "07", title: "Measuring & Precision Tools Calibration" },
    { num: "08", title: "Safety Valve Testing & Calibration" },
    { num: "09", title: "Laboratory Equipment Calibration" },
    { num: "10", title: "Tank Calibration" },
    { num: "10", title: "On-Site Calibration Services" },
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden" }}>
      
      {/* 1. Hero Section */}
      <section 
        style={{ 
          position: "relative", 
          backgroundColor: "#031d44", 
          backgroundImage: `linear-gradient(90deg, rgba(3, 29, 68, 0.94) 0%, rgba(3, 29, 68, 0.82) 100%), url('/calibration.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "135px", 
          paddingBottom: "135px"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }} className="px-6 sm:px-10 lg:px-[80px]">
          <div style={{ maxWidth: "750px", color: "#ffffff" }}>
            
            <h1 style={{ fontSize: "44px", fontWeight: "800", marginBottom: "16px", lineHeight: "1.1", letterSpacing: "-0.5px" }} className="text-3xl sm:text-4xl lg:text-[44px]">
              Calibration Services
            </h1>
            
            <div style={{ width: "45px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>
            
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#cbd5e1", maxWidth: "620px" }}>
              Verifying measuring instruments against recognized reference standards to ensure accuracy, consistency, and reliable readings.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 80px" }} className="px-6 sm:px-10 lg:px-[80px] py-12 lg:py-16">
        
        {/* 2. Why It Matters Section (Text + Image) */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
          
          {/* Left Text Content */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
              Overview
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "16px" }} className="text-2xl sm:text-[32px]">
              Why It Matters
            </h2>
            <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
              Regular calibration supports precise control, equipment safety,
              product quality, regulatory compliance, and dependable technical
              decision-making.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Traceability to primary standards reference instruments.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Ensures process control and consistent product quality.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>Compliance with industry calibration certificates and records.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                  <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                </span>
                <span>On-site calibration thus avoids instrument downtime.</span>
              </li>
            </ul>
          </div>

          {/* Right Image Box */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <div style={{ width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", backgroundColor: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}>
              <img
                src="/calibration.svg" 
                alt="Why It Matters"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Services We Deliver Section (Grid) */}
      <div 
        style={{ 
          backgroundColor: "#f4f7fa",
          backgroundImage: `
            linear-gradient(to right, #e5edf5 1px, transparent 1px),
            linear-gradient(to bottom, #e5edf5 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          paddingTop: "70px",
          paddingBottom: "70px",
          borderTop: "1px solid #e5edf5",
          borderBottom: "1px solid #e5edf5"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }} className="px-6 sm:px-10 lg:px-[80px]">
          
          <div style={{ marginBottom: "30px" }}>
            <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
              Scope
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "10px" }} className="text-2xl sm:text-[32px]">
              Services We Deliver
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px" }}></div>
          </div>

          {/* 3-Column Grid Layout matching Figma */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))", 
              gap: "20px" 
            }}
            className="calibration-grid"
          >
            {servicesList.map((item, index) => (
              <div
                key={index}
                style={{ 
                  backgroundColor: "#ffffff", 
                  border: "1px solid #e2e8f0", 
                  borderRadius: "12px", 
                  padding: "20px 24px", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "16px", 
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" 
                }}
              >
                {/* Simple Plain Text Number (No Box/Background) */}
                <span 
                  style={{ 
                    color: "#ff591f", 
                    fontWeight: "700", 
                    fontSize: "15px", 
                    flexShrink: 0 
                  }}
                >
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

      {/* Responsive Media Query for Tablets and Mobiles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .calibration-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .calibration-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}