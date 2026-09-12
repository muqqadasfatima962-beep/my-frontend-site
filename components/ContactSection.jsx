"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    // EmailJS keys yahan paste karein
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   
        "YOUR_TEMPLATE_ID",  
        formRef.current,
        "YOUR_PUBLIC_KEY"    
      )
      .then(
        (result) => {
          setLoading(false);
          setStatusMsg("Thank you! Your enquiry has been submitted successfully.");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMsg("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "80px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "flex-start" }}>
        
        {/* LEFT COLUMN: Reach DAIS */}
        <div style={{ flex: "1 1 450px" }}>
          <p style={{ color: "#ff591f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 6px 0" }}>
            Head Office
          </p>
          <h2 style={{ color: "#07377f", fontSize: "32px", fontWeight: "800", margin: "0 0 8px 0" }}>
            Reach DAIS
          </h2>
          
          <div style={{ width: "35px", height: "3px", backgroundColor: "#ff591f", marginBottom: "20px" }}></div>
          
          <p style={{ color: "#666666", fontSize: "13px", lineHeight: "1.6", margin: "0 0 35px 0" }}>
            Each domain has its own dedicated page covering scope, methodology and the<br />
            specific services we deliver.
          </p>

          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {/* 1. Head Office */}
            <div style={{ borderBottom: "1px solid rgba(102, 102, 102, 0.15)", paddingBottom: "20px", marginBottom: "20px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <img src="/Head.svg" alt="Location" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#07377f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Head Office
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "0", paddingLeft: "26px", lineHeight: "1.6" }}>
                First Floor, Plaza No. 29 Broadway, Paragon Housing Society, Barki<br />
                Road, Lahore, Pakistan.
              </p>
            </div>

            {/* 2. Landline */}
            <div style={{ borderBottom: "1px solid rgba(102, 102, 102, 0.15)", paddingBottom: "20px", marginBottom: "20px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <img src="/telliphone.svg" alt="Phone" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#07377f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Landline
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "0", paddingLeft: "26px" }}>
                +92 4235305335
              </p>
            </div>

            {/* 3. WhatsApp */}
            <div style={{ borderBottom: "1px solid rgba(102, 102, 102, 0.15)", paddingBottom: "20px", marginBottom: "20px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#07377f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  WhatsApp
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "0", paddingLeft: "26px" }}>
                +92 300 6624494
              </p>
            </div>

            {/* 4. Email */}
            <div style={{ borderBottom: "1px solid rgba(102, 102, 102, 0.15)", paddingBottom: "20px", marginBottom: "20px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <img src="/email.svg" alt="Email" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#07377f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Email
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "0", paddingLeft: "26px" }}>
                info@dolphinais.com
              </p>
            </div>

            {/* 5. Website */}
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <img src="/website.svg" alt="Website" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#07377f", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Website
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "12px", margin: "0", paddingLeft: "26px" }}>
                dolphinais.com
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Request a Quote Form */}
        <div style={{ flex: "1 1 480px", backgroundColor: "#f8fafc", padding: "35px", borderRadius: "2px", border: "1px solid #edf2f7" }}>
          <h3 style={{ color: "#07377f", fontSize: "24px", fontWeight: "800", margin: "0 0 8px 0" }}>
            Request a Quote
          </h3>
          <div style={{ width: "35px", height: "3px", backgroundColor: "#ff591f", marginBottom: "25px" }}></div>

          <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Full Name</label>
              <input type="text" name="user_name" required style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Company</label>
              <input type="text" name="user_company" required style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Email</label>
                <input type="email" name="user_email" required style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Phone</label>
                <input type="text" name="user_phone" required style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Service Required</label>
              <select name="service_required" style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box", backgroundColor: "#ffffff", color: "#475569" }}>
                <option value="Inspection & Integrity Assessment">Inspection & Integrity Assessment</option>
                <option value="Calibration Services">Calibration Services</option>
                <option value="Testing Services">Testing Services</option>
                <option value="Training Services">Training Services</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Scope Details</label>
              <textarea name="message" rows="4" placeholder="Equipment, site location, standards and timeline" required style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "2px", fontSize: "12px", outline: "none", boxSizing: "border-box", resize: "none" }}></textarea>
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: "#07377f", color: "#ffffff", border: "none", padding: "12px 24px", fontWeight: "bold", fontSize: "11px", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", borderRadius: "2px", width: "fit-content" }}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {statusMsg && (
              <p style={{ color: statusMsg.includes("wrong") ? "red" : "green", fontSize: "12px", marginTop: "10px" }}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}