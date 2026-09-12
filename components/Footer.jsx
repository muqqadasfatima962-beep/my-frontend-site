"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ width: "100%", fontFamily: "Inter, sans-serif", overflow: "hidden" }}>
      <style jsx>{`
        .cta-banner {
          padding: 36px 180px;
        }

        .cta-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .main-footer {
          padding: 60px 180px 45px 180px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1.2fr;
          gap: 60px;
        }

        .bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 1200px) {
          .cta-banner {
            padding: 36px 40px;
          }
          .main-footer {
            padding: 50px 40px 40px 40px;
          }
          .footer-grid {
            gap: 40px;
          }
        }

        @media (max-width: 992px) {
          .cta-banner {
            padding: 28px 24px;
          }
          .main-footer {
            padding: 40px 24px 30px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 24px 16px;
          }
          .cta-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .main-footer {
            padding: 32px 16px 24px 16px;
          }
          .cta-button {
            width: 100%;
            justify-content: center;
          }
          .bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      {/* TOP CALL-TO-ACTION BANNER */}
      <div
        className="cta-banner"
        style={{
          backgroundColor: "#071F42",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div className="cta-container">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <Image 
              src="/trust.svg" 
              alt="Shield Icon" 
              width={36} 
              height={36} 
              style={{ flexShrink: 0 }}
            />

            <div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "Georgia, serif",
                  margin: 0,
                  lineHeight: "1.3",
                }}
              >
                Trusted engineering support for safer operations
              </h3>
              <p
                style={{
                  color: "#A0AEC0",
                  fontSize: "12px",
                  margin: "6px 0 0 0",
                  fontWeight: "400",
                  lineHeight: "1.4",
                }}
              >
                Technical Expertise | Safety | Accuracy | Reliability | Quality
              </p>
            </div>
          </div>

          <button
            className="cta-button"
            style={{
              backgroundColor: "#E25B2D",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              padding: "12px 22px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            REQUEST A QUOTE
            <span style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "1" }}>›</span>
          </button>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div
        className="main-footer"
        style={{
          backgroundColor: "#071F42",
          color: "#ffffff",
        }}
      >
        <div className="footer-grid" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Column 1 */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                margin: "0 0 10px 0",
                color: "#ffffff",
              }}
            >
              Dolphin Asset Integrity Solutions
            </h3>
            <p
              style={{
                color: "#E25B2D",
                fontSize: "13px",
                fontWeight: "600",
                margin: "0 0 14px 0",
              }}
            >
              Ensuring Safety, Integrity, and Reliability
            </p>
            <p
              style={{
                color: "#A0AEC0",
                fontSize: "13px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Engineering and asset integrity services ensuring the safety,
              integrity and reliability of industrial assets — inspection,
              calibration, testing and training.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                margin: "0 0 16px 0",
                color: "#ffffff",
              }}
            >
              Service Domains
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "13px",
                color: "#A0AEC0",
              }}
            >
              <li style={{ cursor: "pointer" }}>Inspection & Integrity Assessment</li>
              <li style={{ cursor: "pointer" }}>Calibration Services</li>
              <li style={{ cursor: "pointer" }}>Testing Services</li>
              <li style={{ cursor: "pointer" }}>Training Services</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                margin: "0 0 16px 0",
                color: "#ffffff",
              }}
            >
              Head Office
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                fontSize: "13px",
                color: "#A0AEC0",
                lineHeight: "1.5",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Image src="/first.svg" alt="Location" width={16} height={16} style={{ marginTop: "3px", flexShrink: 0 }} />
                <span>
                  First Floor, Plaza No. 29 Broadway, Paragon Housing Society,
                  Barki Road, Lahore, Pakistan.
                </span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Image src="/call.svg" alt="Phone" width={15} height={15} style={{ flexShrink: 0 }} />
                <span>+92 4235305335</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Image src="/call.svg" alt="Mobile" width={15} height={15} style={{ flexShrink: 0 }} />
                <span>+92 300 6624494</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Image src="/info.svg" alt="Email" width={15} height={15} style={{ flexShrink: 0 }} />
                <span>info@dolphinais.com</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Image src="/dolphin.svg" alt="Website" width={15} height={15} style={{ flexShrink: 0 }} />
                <span>dolphinais.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div
          className="bottom-bar"
          style={{
            maxWidth: "1280px",
            margin: "35px auto 0 auto",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            fontSize: "12px",
            color: "#A0AEC0",
          }}
        >
          <div>
            © 2026.Dolphin Asset Integrity Solutions (Private) Limited-All rights reserved.
          </div>
          <div>Inspection | Calibration | Testing | Training</div>
        </div>
      </div>
    </footer>
  );
}