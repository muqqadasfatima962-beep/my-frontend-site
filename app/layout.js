import "./globals.css";

export const metadata = {
  title: "DAIS - Dolphin Asset Integrity Solutions",
  description: "Trusted Asset Integrity & Engineering Solutions",
};

// YEH CODE BROWSER KO MOBILE RESPONSIVE TRIGGER KARTAA HAI
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* FALLBACK FOR MOBILE VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}