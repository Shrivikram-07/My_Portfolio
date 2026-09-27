import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shri Vikram M — Technology Developer",
  description:
    "Technology Developer building full-stack applications, AI-driven systems, and data-powered products. Specializing in computer vision telemetry, DeFi risk engines, and enterprise web systems.",
  keywords: [
    "Shri Vikram M",
    "Technology Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Maritime Systems",
    "Computer Vision",
    "DeFi Risk Dashboard",
    "Solana",
    "React.js",
    "Django",
    "Python",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Shri Vikram M", url: "https://github.com/Shrivikram-07" }],
  creator: "Shri Vikram M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrivikram.dev",
    siteName: "Shri Vikram M — Technology Developer",
    title: "Shri Vikram M — Technology Developer",
    description:
      "Technology Developer building full-stack applications, intelligent systems, and data-powered products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Vikram M — Technology Developer",
    description:
      "Building full-stack applications, intelligent systems, and data-powered products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
