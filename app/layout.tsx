import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaLink Cyber Cafe | Nigeria's Smart Workspace",
  description: "Experience lightning-fast internet, co-working pods, and digital services tailored for Nigeria's next generation of creators at NexaLink Cyber Cafe.",
  openGraph: {
    title: "NexaLink Cyber Cafe",
    description: "Lightning-fast internet, creative pods, and business services in the heart of Nigeria.",
    url: "https://agentic-c2e1a90c.vercel.app",
    siteName: "NexaLink Cyber Cafe",
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaLink Cyber Cafe",
    description: "Lightning-fast internet, creative pods, and business services in the heart of Nigeria."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
