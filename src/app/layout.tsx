import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rohan Karamel | Machine Learning Engineer & Computer Science Student",
  description: "Portfolio of Rohan Karamel - Research Fellow at Rutgers AI & DS Collaboratory, Machine Learning Engineer, and Computer Science student specializing in AI, deep learning, and software engineering.",
  keywords: "Rohan Karamel, Machine Learning Engineer, AI Research, Computer Science, Rutgers University, Portfolio",
  authors: [{ name: "Rohan Karamel" }],
  creator: "Rohan Karamel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakdcolon.github.io",
    title: "Rohan Karamel | Machine Learning Engineer & Computer Science Student",
    description: "Portfolio showcasing AI research, machine learning projects, and software engineering work.",
    siteName: "Rohan Karamel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Karamel | Machine Learning Engineer & Computer Science Student",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`} style={{fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
