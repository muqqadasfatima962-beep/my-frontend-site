"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TeamAndIndustrySection() {
  const clientLogos = [
    { name: "GE", logo: "/GE.svg" },
    { name: "KCEN", logo: "/KCEN.svg" },
    { name: "PSO", logo: "/PSO.svg" },
    { name: "Engro Energy", logo: "/Engro Energy.svg" },
    { name: "Packages Mall", logo: "/Packages Mall.svg" },
    { name: "Coats", logo: "/Coats.svg" },
    { name: "Parco", logo: "/Parco.svg" },
    { name: "Water / Gear", logo: "/water.svg" },
    { name: "GO", logo: "/GO.svg" },
    { name: "Style Textile", logo: "/Style Textile.svg" },
    { name: "Hubco", logo: "/Hubco.svg" },
    { name: "Fossil", logo: "/Fossil.svg" },
    { name: "Nishat", logo: "/Nishat.svg" },
    { name: "Attock", logo: "/Attock.svg" },
    { name: "MCL", logo: "/MCL.svg" },
    { name: "Emporium", logo: "/Emporium.svg" },
    { name: "AWT", logo: "/AWT.svg" },
    { name: "Empire", logo: "/empire.svg" },
    { name: "Total", logo: "/Total.svg" },
    { name: "Red Cube", logo: "/Red Cube.svg" },
    { name: "Hyundai", logo: "/Hyundai.svg" },
    { name: "Naveena", logo: "/Naveena.svg" },
    { name: "Guard Filters", logo: "/Guard Filters.svg" },
    { name: "FFC", logo: "/FFC.svg" },
    { name: "Hallmark", logo: "/Hallmark.svg" },
    { name: "BP", logo: "/BP.svg" },
    { name: "Amal Foods", logo: "/Amal Foods.svg" },
    { name: "HTL ZIC", logo: "/HTL ZIC.svg" },
    { name: "TUV Rheinland", logo: "/TUV Rheinland.svg" },
    { name: "Packages Group", logo: "/Packages Group.svg" },
    { name: "Be Energy", logo: "/Be Energy.svg" },
    { name: "Nestle", logo: "/Nestle.svg" },
    { name: "EKL", logo: "/EKL.svg" },
    { name: "PepsiCo", logo: "/Pepsico.svg" },
    { name: "N3", logo: "/N3.svg" },
    { name: "Veloxi", logo: "/Veloxi.svg" },
    { name: "Shell", logo: "/Shell.svg" },
    { name: "Bureau Veritas", logo: "/Bureau Veritas.svg" },
    { name: "Elite", logo: "/Elite.svg" },
    { name: "Puma", logo: "/Puma.svg" },
    { name: "Molson", logo: "/Molson.svg" },
    { name: "Jawz", logo: "/Jawz.svg" },
    { name: "Byco", logo: "/Byco.svg" },
    { name: "Saybolt", logo: "/Saybolt.svg" },
    { name: "POL", logo: "/POL.svg" },
    { name: "Hepsec", logo: "/Hepsec.svg" },
    { name: "Taj Gasoline", logo: "/Taj Gasoline.svg" },
    { name: "Zoom", logo: "/Zoom.svg" },
    { name: "Mazhar Shafi", logo: "/Mazhar Shafi.svg" },
    { name: "TUV Austria", logo: "/TUV Austria.svg" },
    { name: "Coca-Cola", logo: "/Coca-Cola.svg" },
    { name: "LOT", logo: "/LOT.svg" },
    { name: "Nimir", logo: "/Nimir.svg" },
    { name: "Centaurus", logo: "/Centaurus.svg" },
    { name: "Rousch Pakistan", logo: "Rousch Pakistan.svg" },
    { name: "HW", logo: "/HW.svg" },
    { name: "Mascol", logo: "/Mascol.svg" },
    { name: "Descon", logo: "/Descon.svg" },
    { name: "UEIL", logo: "/UEIL.svg" },
    { name: "Askar", logo: "/Askar.svg" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", width: "100%", backgroundColor: "#ffffff", boxSizing: "border-box" }}>
      
      {/* Responsive fix for leadership cards on mobile while keeping desktop layout intact */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
          .leadership-card {
            min-height: auto !important;
            height: auto !important;
            padding: 30px 25px !important;
          }
          .logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 12px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1200px) {
          .logos-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        @media (min-width: 1201px) {
          .logos-grid {
            grid-template-columns: repeat(10, 1fr) !important;
          }
        }
      `}} />

      {/* ================= 1. LEADERSHIP SECTION ================= */}
      <div style={{ padding: "60px 8%", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          {/* Section Header */}
          <div style={{ marginBottom: "35px" }}>
            <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase", margin: "0 0 5px 0", letterSpacing: "1px" }}>
              Core Team
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#01286D", margin: "0 0 8px 0" }}>
              Leadership
            </h2>
            <p style={{ color: "#64748b", fontSize: "13px", maxWidth: "600px", margin: 0, lineHeight: "1.5" }}>
              Four directors accountable for engineering, commercial, financial and operational delivery on every project.
            </p>
          </div>

          {/* Staggered 2x2 Grid Layout */}
          <div className="leadership-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" }}>
            
            {/* Row 1, Col 1: Muhammad Tariq Khan (Dark Blue) */}
            <div 
              className="leadership-card"
              style={{ 
                backgroundColor: "#01286D", 
                padding: "35px 40px", 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                minHeight: "170px", 
                boxSizing: "border-box",
                borderTopLeftRadius: "6px"
              }}
            >
              <span style={{ position: "absolute", right: "25px", top: "15px", fontSize: "65px", fontWeight: "800", color: "rgba(255, 255, 255, 0.05)", userSelect: "none", lineHeight: "1" }}>01</span>
              <div>
                <span style={{ backgroundColor: "#ff591f", color: "#fff", padding: "4px 10px", fontSize: "9px", fontWeight: "700", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Chief Executive Officer
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", margin: "14px 0 15px 0", lineHeight: "1.2" }}>
                  Muhammad Tariq Khan
                </h3>
              </div>
              <div style={{ width: "65px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px" }}></div>
            </div>

            {/* Row 1, Col 2: Rana Muhammad Hamad (Light Card) */}
            <div 
              className="leadership-card"
              style={{ 
                backgroundColor: "#f4f7fa", 
                padding: "35px 40px", 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                minHeight: "170px", 
                boxSizing: "border-box",
                borderTopRightRadius: "6px"
              }}
            >
              <span style={{ position: "absolute", right: "25px", top: "15px", fontSize: "65px", fontWeight: "800", color: "#e2e8f0", userSelect: "none", lineHeight: "1" }}>02</span>
              <div>
                <span style={{ color: "#ff591f", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Director Commercial
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#01286D", margin: "14px 0 0 0", lineHeight: "1.2" }}>
                  Rana Muhammad Hamad
                </h3>
              </div>
              <div></div>
            </div>

            {/* Row 2, Col 1: Muhammad Rashid Khan (Light Card) */}
            <div 
              className="leadership-card"
              style={{ 
                backgroundColor: "#f4f7fa", 
                padding: "35px 40px", 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                minHeight: "170px", 
                boxSizing: "border-box",
                borderBottomLeftRadius: "6px"
              }}
            >
              <span style={{ position: "absolute", left: "25px", bottom: "10px", fontSize: "65px", fontWeight: "800", color: "#e2e8f0", userSelect: "none", lineHeight: "1" }}>03</span>
              <div style={{ paddingLeft: "50px" }}>
                <span style={{ color: "#ff591f", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Director Finance
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#01286D", margin: "14px 0 0 0", lineHeight: "1.2" }}>
                  Muhammad Rashid Khan
                </h3>
              </div>
              <div></div>
            </div>

            {/* Row 2, Col 2: Muhammad Maaz Ahsan (Dark Blue) */}
            <div 
              className="leadership-card"
              style={{ 
                backgroundColor: "#01286D", 
                padding: "35px 40px", 
                position: "relative", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                minHeight: "170px", 
                boxSizing: "border-box",
                borderBottomRightRadius: "6px"
              }}
            >
              <span style={{ position: "absolute", left: "25px", bottom: "10px", fontSize: "65px", fontWeight: "800", color: "rgba(255, 255, 255, 0.05)", userSelect: "none", lineHeight: "1" }}>04</span>
              <div style={{ paddingLeft: "50px" }}>
                <span style={{ backgroundColor: "#ff591f", color: "#fff", padding: "4px 10px", fontSize: "9px", fontWeight: "700", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Operations & Technical
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", margin: "14px 0 15px 0", lineHeight: "1.2" }}>
                  Muhammad Maaz Ahsan
                </h3>
              </div>
              <div style={{ paddingLeft: "50px" }}>
                <div style={{ width: "65px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px" }}></div>
              </div>
            </div>

          </div>

          {/* Subtext Paragraph */}
          <div style={{ borderLeft: "3px solid #ff591f", paddingLeft: "15px", margin: "35px 0 0 0" }}>
            <p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.6", margin: 0, maxWidth: "750px" }}>
              With an established client base and successful operations under DES, we are now expanding our capabilities through DAIS — a new identity designed to serve clients while building on enhanced technical expertise and our team.
            </p>
          </div>

        </div>
      </div>

      {/* ================= 2. INDUSTRIES WE SERVE ================= */}
      <div style={{ padding: "50px 8% 60px 8%", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase", margin: "0 0 5px 0", letterSpacing: "1px" }}>
            Industry Coverage
          </p>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#01286D", margin: "0 0 10px 0" }}>
            Industries We Serve
          </h2>
          
          <div style={{ width: "45px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "15px" }}></div>

          <p style={{ color: "#64748b", fontSize: "13px", maxWidth: "700px", margin: "0 0 30px 0", lineHeight: "1.5" }}>
            DAIS supports industries where equipment safety, operational continuity, accurate measurement, regulatory compliance, and asset reliability are critical.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
            
            {/* Energy & Process Industries */}
            <div style={{ backgroundColor: "#f4f7fa", borderRadius: "10px", padding: "35px 30px", boxSizing: "border-box" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#01286D", margin: "0 0 12px 0" }}>
                Energy & Process Industries
              </h3>
              <div style={{ width: "35px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>
              
              <ul style={{ listStyleType: "none", margin: 0, padding: 0, color: "#475569", fontSize: "12.5px", lineHeight: "2.4" }}>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Oil & Gas</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Petrochemical Plants</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Fertilizer & Chemical Industries</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Power Generation</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Energy Infrastructure</li>
              </ul>
            </div>

            {/* Manufacturing & Production */}
            <div style={{ backgroundColor: "#f4f7fa", borderRadius: "10px", padding: "35px 30px", boxSizing: "border-box" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#01286D", margin: "0 0 12px 0" }}>
                Manufacturing & Production
              </h3>
              <div style={{ width: "35px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>

              <ul style={{ listStyleType: "none", margin: 0, padding: 0, color: "#475569", fontSize: "12.5px", lineHeight: "2.4" }}>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Manufacturing Industries</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Industrial Processing Facilities</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Food & Beverage Industry</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Pharmaceutical & Healthcare Industry</li>
              </ul>
            </div>

            {/* Infrastructure & Utilities */}
            <div style={{ backgroundColor: "#f4f7fa", borderRadius: "10px", padding: "35px 30px", boxSizing: "border-box" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#01286D", margin: "0 0 12px 0" }}>
                Infrastructure & Utilities
              </h3>
              <div style={{ width: "35px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "20px" }}></div>

              <ul style={{ listStyleType: "none", margin: 0, padding: 0, color: "#475569", fontSize: "12.5px", lineHeight: "2.4" }}>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Cement & Construction Industry</li>
                <li style={{ position: "relative", paddingLeft: "14px" }}><span style={{ position: "absolute", left: 0, color: "#ff591f" }}>•</span> Water & Wastewater Facilities</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* ================= 3. SUBLIME FAMILY OF DOLPHIN (CLIENTS / PARTNERS LOGOS) ================= */}
      <div style={{ padding: "0 8% 70px 8%", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ color: "#ff591f", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase", margin: "0 0 5px 0", letterSpacing: "1px" }}>
              Trusted Partner in Asset Integrity
            </p>
            
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#01286D", margin: "0 0 8px 0", fontFamily: "Georgia, serif" }}>
              Sublime Family of Dolphin
            </h2>
            
            <div style={{ width: "45px", height: "3px", backgroundColor: "#ff591f", borderRadius: "2px", marginBottom: "12px" }}></div>

            <p style={{ color: "#64748b", fontSize: "13px", maxWidth: "700px", margin: "0 0 40px 0", lineHeight: "1.5" }}>
              A selection of organisations served across energy, process, manufacturing and infrastructure sectors.
            </p>

            {/* LOGOS GRID */}
            <div
              className="logos-grid"
              style={{
                display: "grid",
                gap: "28px 16px",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {clientLogos.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}