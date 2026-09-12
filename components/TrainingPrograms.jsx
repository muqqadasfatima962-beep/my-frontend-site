"use client";

import React from "react";

export default function TrainingPrograms() {
  const topServices = [
    { num: "01", title: "Non-Destructive Testing (NDT) Training" },
    { num: "02", title: "Lifting Operations & Inspection Training" },
    { num: "03", title: "Electrical Safety Training" },
    { num: "04", title: "Fire Safety Training" },
    { num: "05", title: "Emergency Response Training" },
  ];

  const detailedPrograms = [
    {
      num: "01",
      title: "Non-Destructive Testing (NDT) Training",
      desc: "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      num: "02",
      title: "Lifting Operations & Inspection Training",
      desc: "Building awareness of lifting equipment, inspection requirements, load handling, and safe lifting practices.",
    },
    {
      num: "03",
      title: "Electrical Safety Training",
      desc: "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      num: "04",
      title: "Fire Safety Training",
      desc: "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
    {
      num: "05",
      title: "Emergency Response Training",
      desc: "Developing knowledge of inspection methods, defect detection, and safe testing practices.",
    },
  ];

  return (
    <div style={{ width: "100%", fontFamily: "sans-serif", color: "#111827", overflowX: "hidden" }}>
      
      {/* 1. Services We Deliver (Top Section with Grid Background) */}
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
          marginBottom: "50px"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
            Scope
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "10px" }}>
            Services We Deliver
          </h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "30px" }}></div>

          {/* Top Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))", 
              gap: "20px" 
            }}
            className="services-grid"
          >
            {topServices.map((item, index) => (
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
                {/* Simple Plain Text Number (No box background, just orange color) */}
                <span style={{ color: "#ff591f", fontWeight: "700", fontSize: "15px", flexShrink: 0 }}>
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

      {/* 2. Knowledge To Competency (Bottom Section with Clean White Background) */}
      <div style={{ backgroundColor: "#ffffff", paddingBottom: "70px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
            Programs
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "10px" }}>
            Knowledge To Competency
          </h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "16px" }}></div>
          
          <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "30px", fontWeight: "500" }}>
            Knowledge <span style={{ margin: "0 4px" }}>›</span> Practical Skills <span style={{ margin: "0 4px" }}>›</span> Safety Awareness <span style={{ margin: "0 4px" }}>›</span> Competency
          </p>

          {/* Detailed Cards Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))", 
              gap: "24px" 
            }}
            className="programs-grid"
          >
            {detailedPrograms.map((prog, index) => (
              <div
                key={index}
                style={{ 
                  backgroundColor: "#ffffff", 
                  border: "1px solid #e2e8f0", 
                  borderRadius: "16px", 
                  padding: "28px", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)" 
                }}
              >
                <div>
                  <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", backgroundColor: "#ff591f", padding: "6px 12px", borderRadius: "8px", display: "inline-block", marginBottom: "16px" }}>
                    {prog.num}
                  </span>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#07377f", marginBottom: "12px", lineHeight: "1.3" }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid, .programs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid, .programs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}