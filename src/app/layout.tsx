import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Traci | Care Without Losing Yourself",
  description:
    "Caregiver coaching for adult children caring for aging parents. Learn to set boundaries, reduce guilt, and find balance. Take the free Burnout Barometer Quiz.",
  keywords: [
    "caregiver coach",
    "caregiver burnout",
    "caring for aging parents",
    "caregiver support",
    "caregiver guilt",
    "caregiver boundaries",
  ],
  openGraph: {
    title: "Coach Traci | Care Without Losing Yourself",
    description:
      "Caregiver coaching for adult children caring for aging parents. Learn to set boundaries, reduce guilt, and find balance.",
    url: "https://dotsongray.com",
    siteName: "Coach Traci",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Traci | Care Without Losing Yourself",
    description:
      "Caregiver coaching for adult children caring for aging parents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="antialiased overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
