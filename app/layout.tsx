import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anisha | Portfolio - CS Student & Web Developer",
  description:
    "Personal portfolio of Anisha - Computer Science Engineering student at BIT interested in coding, C++, Python, and building web apps.",
  keywords: ["Anisha", "Portfolio", "Computer Science", "BIT", "C++", "Python", "Web Developer"],
  authors: [{ name: "Anisha" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#060608] text-gray-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
