import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/components/navbar";
import { ThemeProvider } from "next-themes";

const funnelDisplay = Funnel_Display({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathaniel Joseph | Certified frotnend developer",
  description:
    "I'm Nathaniel Joseph, a certified frontend developer skilled in HTML, CSS, JavaScript, React, and Vue.js. I build responsive, user-focused websites with clean code and intuitive design. Explore my portfolio to see my work!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.className} antialiased dark:bg-[#161616]`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
