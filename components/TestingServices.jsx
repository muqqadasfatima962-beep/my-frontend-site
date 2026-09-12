"use client";

import React from "react";
import { Check } from "lucide-react";

export default function TestingServices() {
    const servicesList = [
        { num: "01", title: "Hydrostatic Pressure Testing" },
        { num: "02", title: "Pneumatic Pressure Testing" },
        { num: "03", title: "Pipeline Pressure Testing" },
        { num: "04", title: "Leak Detection & Testing" },
        { num: "05", title: "Valve Testing" },
        { num: "06", title: "Electrical Testing & Inspection" },
        { num: "07", title: "Seamless HP Cylinder Requalification" },
        { num: "08", title: "Welded LPG Cylinder Requalification" },
    ];

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
                            Testing Services
                        </h1>

                        <div style={{ width: "45px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>

                        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#cbd5e1", maxWidth: "620px" }}>
                            Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.
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
                            These activities help identify leakage, pressure weaknesses, equipment defects, and performance issues before they develop into operational failures or safety risks.
                        </p>

                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                                    <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                                </span>
                                <span>Verified pressure integrity before commissioning or restart.</span>
                            </li>
                            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                                    <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                                </span>
                                <span>Leaks, weaknesses and defects identified before failure.</span>
                            </li>
                            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                                    <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                                </span>
                                <span>Requalified cylinders and valves fit for continued service.</span>
                            </li>
                            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#374151" }}>
                                <span style={{ backgroundColor: "#fff7ed", color: "#ff591f", padding: "4px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                                    <Check style={{ width: "16px", height: "16px", strokeWidth: "3" }} />
                                </span>
                                <span>Clear pass/fail evidence for safety and regulatory review.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image Box */}
                    <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                        <div style={{ width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", backgroundColor: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}>
                            <img
                                src="/clock.svg"
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
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

                    <div style={{ marginBottom: "30px" }}>
                        <span style={{ color: "#ff591f", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
                            Scope
                        </span>
                        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#07377f", marginBottom: "10px" }}>
                            Services We Deliver
                        </h2>
                        <div style={{ width: "60px", height: "4px", backgroundColor: "#ff591f", borderRadius: "2px" }}></div>
                    </div>

                    {/* 3-Column Grid Layout using Pure Inline Grid Styles */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: "20px"
                        }}
                        className="services-grid"
                    >
                        {servicesList.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "12px",
                                    padding: "18px 22px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
                                }}
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

            {/* Responsive media query support for smaller screens */}
            <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

        </div>
    );
}