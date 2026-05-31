import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Loading } from "@/components/ui/Loading";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Awanish Kumar Verma | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Awanish Kumar Verma, a passionate Computer Science student interested in Full Stack Development, Artificial Intelligence, Data Science, and Cloud Technologies.",
  keywords: ["Awanish Kumar Verma", "Full Stack Developer", "AI Enthusiast", "Data Science", "Portfolio", "Next.js", "React"],
  openGraph: {
    title: "Awanish Kumar Verma | Portfolio",
    description: "Full Stack Developer & AI Enthusiast",
    type: "website",
    url: "https://awanish-portfolio.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent-purple selection:text-white`} suppressHydrationWarning>
        <Loading />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
