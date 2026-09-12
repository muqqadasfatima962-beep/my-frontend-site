"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceContent() {
  const serviceDomains = [
    {
      number: "01",
      title: "Inspection & Integrity Assessment",
      desc: "Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.",
      linkText: "Explore Inspection →",
      link: "/services/inspection",
      image: "/about-inspection.png",
    },
    {
      number: "02",
      title: "Calibration Services",
      desc: "Verifying measuring instruments against recognized reference standards to ensure accuracy, compliance, and reliable readings.",
      linkText: "Explore Calibration →",
      link: "/services/calibration",
      image: "/calibration.svg",
    },
    {
      number: "03",
      title: "Testing Services",
      desc: "Validating the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.",
      linkText: "Explore Testing →",
      link: "/services/testing",
      image: "/clock.svg",
    },
    {
      number: "04",
      title: "Training Services",
      desc: "Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety, and operational awareness.",
      linkText: "Explore Training →",
      link: "/services/training",
      image: "/training.svg",
    },
  ];

  return (
    <div style={{ width: "100%", fontFamily: "'Inter', sans-serif", backgroundColor: "#ffffff" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style jsx>{`
        .services-hero {
          position: relative;
          background-image: linear-gradient(rgba(10, 31, 61, 0.85), rgba(13, 40, 79, 0.85)), url('/building.svg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          /* Figma ke mutabiq height maintain karne ke liye padding barha di hai */
          padding: 160px 0;
          color: #ffffff;
          text-align: center;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 60px 24px;
          box-sizing: border-box;
          width: 100%;
          background-color: #ffffff;
        }

        .domains-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 992px) {
          .domains-grid {
            grid-template-columns: 1fr;
          }
          .section-container {
            padding: 40px 16px;
          }
          .services-hero {
            padding: 100px 0;
          }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <div className="hero-content">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "#E85D36",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            Service Domains
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "48px",
              fontWeight: "800",
              fontFamily: "Georgia, serif",
              margin: "0 0 18px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "16px",
              color: "#94A3B8",
              lineHeight: "1.6",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Advanced inspection, integrity assessment, calibration, testing and
            training solutions delivered through structured engineering practices
            and international standards.
          </motion.p>
        </div>
      </section>

      {/* 2. CHOOSE A SERVICE DOMAIN SECTION */}
      <section style={{ backgroundColor: "#ffffff" }}>
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
              Four Domains
            </span>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                fontFamily: "Georgia, serif",
                color: "#081E3D",
                margin: "6px 0 10px 0",
              }}
            >
              Choose A Service Domain
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "14px",
                maxWidth: "650px",
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              Each domain has its own dedicated page covering scope, methodology, and the specific services we deliver.
            </p>
          </motion.div>

          {/* 4 CARDS GRID */}
          <div className="domains-grid">
            {serviceDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={domain.link}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid rgba(67, 67, 67, 0.3)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    height: "auto",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "240px",
                      backgroundColor: "#f1f5f9",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(67, 67, 67, 0.15)",
                    }}
                  >
                    <img
                      src={domain.image}
                      alt={domain.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "28px 32px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        color: "#E85D36",
                        fontSize: "18px",
                        fontWeight: "800",
                        fontFamily: "Georgia, serif",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {domain.number}
                    </span>

                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Georgia, serif",
                        color: "#081E3D",
                        margin: "0 0 10px 0",
                        lineHeight: "1.3",
                      }}
                    >
                      {domain.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#64748B",
                        lineHeight: "1.6",
                        margin: "0 0 20px 0",
                      }}
                    >
                      {domain.desc}
                    </p>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#E85D36",
                        fontSize: "13.5px",
                        fontWeight: "600",
                      }}
                    >
                      {domain.linkText}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}