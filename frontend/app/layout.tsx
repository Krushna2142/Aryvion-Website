import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Aryvion Technologies — AI, Software & Cloud Engineering",
  description:
    "Aryvion builds AI systems, custom software, web and mobile apps for startups, businesses and engineering students.",
  icons: { icon: "/TabLogo.svg", apple: "/TabLogo.svg" },
};

export const viewport: Viewport = {
  themeColor: "#02040A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="grain bg-ink-950 text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
