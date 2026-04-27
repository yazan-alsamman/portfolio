import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Identity Aura | Futuristic Portfolio",
  description: "A futuristic portfolio platform blending premium product aesthetics with performance-focused frontend craftsmanship.",
  keywords: ["portfolio", "next.js", "tailwind css", "framer motion", "glassmorphism"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)] font-sans">
        {children}
      </body>
    </html>
  );
}
