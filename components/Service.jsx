"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Service() {
  // 1. TOP CARDS KE ICONS
  const topFeatures = [
    {
      icon: <Image src="/scale.svg" alt="Scale" width={22} height={22} />,
      title: "Structured Engineering",
      subtitle: "International standards & practices",
    },
    {
      icon: <Image src="/capability.svg" alt="Capability" width={22} height={22} />,
      title: "On-Site Capability",
      subtitle: "Services delivered at your facility",
    },
    {
      icon: <Image src="/team.svg" alt="Team" width={22} height={22} />,
      title: "Certified Team",
      subtitle: "Skilled inspection & calibration engineers",
    },
  ];

  // 2. MAIN SERVICE CARDS KE ICONS
  const services = [
    {
      number: "01",
      icon: <Image src="/search.svg" alt="Inspection" width={24} height={24} />,
      title: "Inspection & Integrity Assessment",
      description:
        "Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.",
      linkText: "Explore Inspection",
    },
    {
      number: "02",
      icon: <Image src="/services.svg" alt="Calibration" width={24} height={24} />,
      title: "Calibration Services",
      description:
        "Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.",
      linkText: "Explore Calibration",
    },
    {
      number: "03",
      icon: <Image src="/explore.svg" alt="Testing" width={24} height={24} />,
      title: "Testing Services",
      description:
        "Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.",
      linkText: "Explore Testing",
    },
    {
      number: "04",
      icon: <Image src="/cap.svg" alt="Training" width={24} height={24} />,
      title: "Training Services",
      description:
        "Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.",
      linkText: "Explore Training",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f7f9fc",
        padding: "60px 20px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* TOP 3 SMALL CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          {topFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                flex: "1 1 300px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                backgroundColor: "#ffffff",
                border: "1px solid #e1e8f0",
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(15, 37, 82, 0.03)",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #dbe3ed",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#0f2552",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    margin: "3px 0 0 0",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <span
            style={{
              color: "#ff6b35",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.2px",
            }}
          >
            Service Domains
          </span>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#0f2552",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "13px",
              maxWidth: "600px",
              margin: "4px 0 0 0",
              lineHeight: "1.5",
            }}
          >
            Four integrated technical domains covering the full lifecycle of
            industrial asset integrity.
          </p>
        </motion.div>

        {/* MAIN 4 CARDS GRID (2 COLUMNS) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0px 10px 20px rgba(15, 37, 82, 0.08)" }}
              style={{
                flex: "1 1 480px",
                backgroundColor: "#ffffff",
                border: "1px solid #e1e8f0",
                borderRadius: "12px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 3px 8px rgba(15, 37, 82, 0.03)",
                boxSizing: "border-box",
                minHeight: "240px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #dbe3ed",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#e2e8f0",
                    lineHeight: 1,
                  }}
                >
                  {service.number}
                </span>
              </div>

              <div style={{ margin: "20px 0 24px 0" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0f2552",
                    margin: "0 0 8px 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>

              <div>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#ff6b35",
                    fontWeight: "600",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  {service.linkText} &rarr;
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}