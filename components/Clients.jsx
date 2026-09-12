"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Clients() {
  const advantages = [
    {
      number: "01",
      title: "Why Choose DAIS",
      desc: "We are supported by a highly skilled, certified, and experienced team of professionals with strong technical expertise in inspection, testing, calibration, and engineering services, ensuring precise and reliable service execution.",
    },
    {
      number: "02",
      title: "Safety-Focused Approach",
      desc: "Human safety, asset protection, and operational risk reduction remain central to our service execution.",
    },
    {
      number: "03",
      title: "Reliable Technical Reporting",
      desc: "Clear, accurate, and dependable technical findings support informed maintenance and operational decisions.",
    },
  ];

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
    <div style={{ width: "100%", fontFamily: "'Inter', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style jsx>{`
        .advantages-section {
          padding: 80px 0 60px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
          width: 100%;
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
          width: 100%;
        }

        /* Explicit balanced padding for inner text and edges */
        .cards-item {
          padding: 44px 36px;
          height: 100%;
          box-sizing: border-box;
          width: 100%;
        }

        .logos-section {
          padding: 60px 0 80px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 28px 16px;
        }

        .main-heading {
          font-size: 40px;
        }

        /* LAPTOP VIEW */
        @media (max-width: 1200px) {
          .section-container {
            padding: 0 30px;
          }
          .logos-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        /* TABLET VIEW */
        @media (max-width: 992px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .logos-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px 16px;
          }
        }

        /* MOBILE VIEW */
        @media (max-width: 768px) {
          .advantages-section,
          .logos-section {
            padding: 50px 0;
          }

          .section-container {
            padding: 0 20px;
          }

          .main-heading {
            font-size: 28px;
          }

          .advantages-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cards-item {
            padding: 36px 28px;
            height: auto;
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 12px;
          }
        }
      `}</style>

      {/* SECTION: WHY CHOOSE DAIS */}
      <section className="advantages-section" style={{ backgroundColor: "#F4F7FC" }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                color: "#E85D36",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
              }}
            >
              Our Advantage
            </span>

            <h2
              className="main-heading"
              style={{
                fontWeight: "800",
                fontFamily: "Georgia, serif",
                color: "#081E3D",
                margin: "8px 0 0 0",
                letterSpacing: "-0.5px",
              }}
            >
              Why Choose DAIS
            </h2>

            <div
              style={{
                width: "44px",
                height: "3px",
                backgroundColor: "#E85D36",
                margin: "14px 0 20px 0",
              }}
            ></div>

            <p
              style={{
                color: "#5A6B82",
                fontSize: "14px",
                width: "100%",
                maxWidth: "650px",
                margin: "0 0 40px 0",
                lineHeight: "1.5",
              }}
            >
              Technical expertise, structured engineering practices, and a strong
              commitment to safety and quality.
            </p>
          </motion.div>

          {/* CARDS GRID */}
          <div className="advantages-grid">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                className="cards-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 24px rgba(8, 30, 61, 0.08)",
                }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid rgba(226, 232, 240, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.01)",
                }}
              >
                <span
                  style={{
                    color: "#E85D36",
                    fontSize: "20px",
                    fontWeight: "800",
                    fontFamily: "Georgia, serif",
                    margin: "0 0 16px 0",
                    display: "block",
                  }}
                >
                  {item.number}
                </span>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Georgia, serif",
                    color: "#081E3D",
                    margin: "0 0 16px 0",
                    lineHeight: "1.35",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748B",
                    lineHeight: "1.65",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: SUBLIME FAMILY OF DOLPHIN */}
      <section className="logos-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                color: "#FD550A",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
              }}
            >
              Trusted Partner in Asset Integrity
            </span>

            <h2
              className="main-heading"
              style={{
                fontWeight: "800",
                fontFamily: "Georgia, serif",
                color: "#081E3D",
                margin: "8px 0 0 0",
                letterSpacing: "-0.5px",
              }}
            >
              Sublime Family of Dolphin
            </h2>

            <p
              style={{
                color: "#5A6B82",
                fontSize: "14px",
                maxWidth: "650px",
                margin: "12px 0 40px 0",
                lineHeight: "1.5",
              }}
            >
              A selection of organisations served across energy, process, manufacturing and infrastructure sectors.
            </p>

            {/* LOGOS GRID */}
            <div
              className="logos-grid"
              style={{
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
      </section>
    </div>
  );
}