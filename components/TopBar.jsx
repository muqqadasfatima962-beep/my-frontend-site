"use client";

import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  const services = ["Inspection", "Calibration", "Testing", "Training"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="top-bar"
    >
      <div className="top-bar-inner">
        {/* LEFT SIDE */}
        <div className="top-left">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <motion.span
                whileHover={{ color: "#FF5722" }}
                transition={{ duration: 0.2 }}
                style={{ cursor: "default" }}
              >
                {service}
              </motion.span>

              {index < services.length - 1 && (
                <span className="divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="top-right">
          <motion.span
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="contact-item"
            style={{ cursor: "pointer" }}
          >
            <MessageCircle size={13} strokeWidth={1.8} />
            <span>WHATSAPP</span>
          </motion.span>

          <motion.span
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="contact-item"
            style={{ cursor: "pointer" }}
          >
            <Phone size={13} strokeWidth={1.8} />
            <span>+92 300 6624494</span>
          </motion.span>

          <motion.span
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="contact-item email-hide-mobile"
            style={{ cursor: "pointer" }}
          >
            <Mail size={13} strokeWidth={1.8} />
            <span>info@dolphinais.com</span>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}