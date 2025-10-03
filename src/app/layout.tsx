import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rohan Karamel | ML Researcher | Math & CS",
  description: "Portfolio of Rohan Karamel - Research Fellow at Rutgers Artificial Intelligence & Data Science Collaboratory, Machine Learning Engineer, and Computer Science student specializing in AI, deep learning, and software engineering.",
  keywords: "Rohan Karamel, Machine Learning Engineer, Machine Learning Researcher, Computer Science, Rutgers University, Portfolio",
  authors: [{ name: "Rohan Karamel" }],
  creator: "Rohan Karamel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakdcolon.github.io",
    title: "Rohan Karamel | ML Researcher | Math + CS Student",
    description: "Portfolio showcasing machine learning research, machine learning projects, and software engineering work.",
    siteName: "Rohan Karamel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Karamel | ML Researcher | Math + CS Student",
    description: "Portfolio showcasing AI research, machine learning projects, and software engineering work.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased cursor-none`} style={{fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
