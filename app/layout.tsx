import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TurfPro — Premium Artificial Turf Installation",
  description:
    "Transform your outdoor space with professional-grade artificial grass. 500+ projects, 10-year warranty, eco-friendly materials.",
  keywords: ["artificial turf", "synthetic grass", "turf installation", "lawn care"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
