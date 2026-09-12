"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/", active: true },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "WHY CHOOSE US", href: "/why-choose-us" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="navbar-root"
    >
      {/* 1. TOP HEADER */}
      <div className="navbar-top-bar">
        <Link href="/" className="logo-wrapper">
          <Image
            src="/dais logo.svg"
            alt="DAIS Logo"
            width={140}
            height={45}
            className="logo-img"
            priority
          />
        </Link>

        {/* DESKTOP NAV LINKS (Hover effect added without color change) */}
        <nav className="desktop-nav">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href={link.href}
                className={`nav-item ${link.active ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="desktop-cta">
          <Link href="/contact" className="quote-btn">
            <span>REQUEST A QUOTE</span>
            <ChevronRight size={15} />
          </Link>
        </div>

        {/* MOBILE TOGGLE ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-hamburger-btn"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} color="#07377f" /> : <Menu size={24} color="#07377f" />}
        </button>
      </div>

      {/* 2. MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: -15, y: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: -15, y: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 320, 
              damping: 24 
            }}
            style={{ transformOrigin: "top center", perspective: "1000px" }}
            className="mobile-menu-dropdown"
          >
            <nav className="mobile-links-container">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-link-item ${link.active ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="quote-btn mobile-drawer-btn"
                onClick={() => setIsOpen(false)}
              >
                <span>REQUEST A QUOTE</span>
                <ChevronRight size={15} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}