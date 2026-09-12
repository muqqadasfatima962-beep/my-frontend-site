"use client";

import { ChevronRight } from "lucide-react";
import { Poppins, Roboto_Slab } from "next/font/google";
import { motion } from "framer-motion";

/* =====================================================
    FIGMA FONTS
===================================================== */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
});

/* =====================================================
    HERO SECTION
===================================================== */

export default function Hero() {
  // Container variant for staggered children reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // 2D Fade & Slide Up variant
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className="hero"
      style={{
        backgroundColor: "#01286D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* RESPONSIVE INTERNAL CSS STYLES */}
      <style jsx>{`
        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .hero-title {
          font-size: 42px;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .hero-title span {
          color: #ff591f;
        }

        .hero-small-title {
          color: #ff591f;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .hero-line {
          width: 60px;
          height: 3px;
          background-color: #ff591f;
          margin-bottom: 20px;
        }

        .hero-description {
          color: #e2e8f0;
          font-size: 14px;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background-color: #ff591f;
          color: #ffffff;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }

        .secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #ffffff;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }

        /* TABLET BREAKPOINT (768px) */
        @media (max-width: 768px) {
          .hero-container {
            padding: 50px 24px;
          }

          .hero-content-wrapper {
            transform: none !important;
          }

          .hero-title {
            font-size: 30px;
          }

          .hero-small-title {
            font-size: 13px;
          }

          .hero-description {
            font-size: 13px;
          }
        }

        /* MOBILE BREAKPOINT (480px) */
        @media (max-width: 480px) {
          .hero-container {
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 24px;
            line-height: 1.3;
          }

          .hero-title br {
            display: none;
          }

          .hero-small-title {
            font-size: 12px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* FIGMA COLOR OVERLAY */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, #01286D 0%, rgba(1,40,109,0.95) 33%, rgba(1,40,109,0.90) 66%, rgba(1,40,109,0.70) 100%)",
          opacity: 1,
          mixBlendMode: "normal",
          pointerEvents: "none",
          zIndex: 1,
        }}
      ></div>

      {/* HERO CONTENT */}
      <div
        className="hero-container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          className="hero-content hero-content-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* SMALL TITLE */}
          <motion.p
            variants={itemVariants}
            className={`hero-small-title ${poppins.className}`}
          >
            Trusted Asset Integrity & Engineering Solutions
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            variants={itemVariants}
            className={`hero-title ${robotoSlab.className}`}
          >
            Ensuring the <span>Integrity,</span> <br />
            <span>Safety</span> & Reliability of <br />
            Critical Industrial Assets
          </motion.h1>

          {/* ORANGE LINE */}
          <motion.div
            variants={itemVariants}
            className="hero-line"
          ></motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className={`hero-description ${poppins.className}`}
          >
            We provide comprehensive inspection, testing, calibration, and
            engineering solutions that help industries enhance operational
            safety, maximize asset performance, and maintain compliance with
            international quality standards.
          </motion.p>

          {/* BUTTONS WITH 3D HOVER EFFECT */}
          <motion.div variants={itemVariants} className="hero-buttons">
            {/* REQUEST A QUOTE */}
            <motion.a
              href="#"
              className={`primary-btn ${poppins.className}`}
              style={{
                fontSize: "13px",
                padding: "10px 18px",
                display: "inline-flex",
                alignItems: "center",
              }}
              whileHover={{
                scale: 1.05,
                translateZ: 20,
                boxShadow: "0px 8px 20px rgba(226, 91, 45, 0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>REQUEST A QUOTE</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-flex", marginLeft: "6px" }}
              >
                <ChevronRight size={14} strokeWidth={2} />
              </motion.div>
            </motion.a>

            {/* EXPLORE SERVICES */}
            <motion.a
              href="#"
              className={`secondary-btn ${poppins.className}`}
              style={{
                fontSize: "13px",
                padding: "10px 18px",
                display: "inline-flex",
                alignItems: "center",
              }}
              whileHover={{
                scale: 1.05,
                translateZ: 20,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              EXPLORE OUR SERVICES
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}