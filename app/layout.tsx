import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: "Aidquarters - Professional Household Staff Recruitment",
  description:
    "Connect with vetted housekeepers, nannies, and drivers. Quality service recruitment made simple and secure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}

import "./globals.css";
