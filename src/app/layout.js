// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Namrata Bhaumik | Personal Portfolio",
  description: "Showcasing my skills, projects, and journey in tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
