"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency, and strong engineering ethics.",
    },
    {
      title: "Safety",
      desc: "We prioritize human life and asset protection every time.",
    },
    {
      title: "Excellence",
      desc: "We deliver high-quality engineering solutions aligned with international standards.",
    },
    {
      title: "Innovation",
      desc: "We adopt modern technologies and advanced inspection methodologies.",
    },
    {
      title: "Reliability",
      desc: "We ensure consistent, accurate, and dependable service delivery.",
    },
    {
      title: "Technical Expertise",
      desc: "We are supported by a highly skilled and experienced team of professionals ensuring excellent execution.",
    },
  ];

  const industries = [
    {
      title: "Energy & Process Industries",
      items: [
        "Oil & Gas",
        "Petrochemical Plants",
        "Fertilizer & Chemical Industries",
        "Power Generation",
        "Energy Infrastructure",
      ],
    },
    {
      title: "Manufacturing & Production",
      items: [
        "Manufacturing Industries",
        "Industrial Processing Facilities",
        "Food & Beverage Industry",
        "Pharmaceutical & Healthcare Industry",
      ],
    },
    {
      title: "Infrastructure & Utilities",
      items: [
        "Cement & Construction Industry",
        "Water & Wastewater Facilities",
      ],
    },
  ];

  return (
    <div style={{ width: "100%", fontFamily: "'Inter', sans-serif" }}>
      {/* RESPONSIVE MEDIA QUERIES */}
      <style jsx>{`
        .values-section {
          padding: 80px 40px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 60px;
          row-gap: 45px;
        }

        .industries-section {
          padding: 70px 40px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .section-title {
          font-size: 36px;
        }

        .industries-title {
          font-size: 40px;
        }

        /* TABLET VIEW (<= 1024px) */
        @media (max-width: 1024px) {
          .values-grid,
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        /* MOBILE VIEW (<= 768px) */
        @media (max-width: 768px) {
          .values-section,
          .industries-section {
            padding: 50px 20px;
          }

          .section-title {
            font-size: 28px;
            margin-bottom: 30px !important;
          }

          .industries-title {
            font-size: 30px;
          }

          .values-grid,
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .industries-desc br {
            display: none;
          }
        }
      `}</style>

      {/* 1. DARK BLUE SECTION (The Way We Engineer) */}
      <section
        className="values-section"
        style={{
          backgroundColor: "#0A2246",
          color: "#ffffff",
          position: "relative",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span
              style={{
                color: "#E25B2D",
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "0.2px",
              }}
            >
              Core Values
            </span>

            <h2
              className="section-title"
              style={{
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                margin: "8px 0 50px 0",
                color: "#ffffff",
              }}
            >
              The Way We Engineer
            </h2>
          </motion.div>

          <div className="values-grid">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.18)",
                  paddingTop: "18px",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    margin: "0 0 8px 0",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8B9CBA",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LIGHT SECTION (Industries We Serve) */}
      <section
        className="industries-section"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span
              style={{
                color: "#E25B2D",
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "0.2px",
              }}
            >
              Industry Coverage
            </span>

            <h2
              className="industries-title"
              style={{
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                color: "#0A2246",
                margin: "8px 0 0 0",
                letterSpacing: "-0.5px",
              }}
            >
              Industries We Serve
            </h2>
            <div
              style={{
                width: "48px",
                height: "3px",
                backgroundColor: "#E25B2D",
                margin: "12px 0 20px 0",
              }}
            ></div>

            <p
              className="industries-desc"
              style={{
                color: "#64748B",
                fontSize: "13.5px",
                wordSpacing: "1.2px",
                letterSpacing: "0.1px",
                margin: "0 0 40px 0",
                lineHeight: "1.6",
              }}
            >
              DAIS supports industries where equipment safety, operational continuity, accurate
              <br />
              measurement, regulatory compliance, and asset reliability are critical.
            </p>
          </motion.div>

          {/* BOXES GRID */}
          <div className="industries-grid">
            {industries.map((ind, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.18,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 18px 30px rgba(10, 34, 70, 0.12)",
                }}
                style={{
                  backgroundColor: "#F3F7FC",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  boxSizing: "border-box",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Georgia, serif",
                    color: "#0A2246",
                    margin: 0,
                    lineHeight: "1.3",
                  }}
                >
                  {ind.title}
                </h3>

                <div
                  style={{
                    width: "32px",
                    height: "3px",
                    backgroundColor: "#E25B2D",
                    margin: "12px 0 24px 0",
                  }}
                ></div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {ind.items.map((subItem, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 6, color: "#E25B2D" }}
                      transition={{ type: "spring", stiffness: 350 }}
                      style={{
                        fontSize: "13px",
                        color: "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#E25B2D",
                          borderRadius: "50%",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      ></span>
                      {subItem}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}