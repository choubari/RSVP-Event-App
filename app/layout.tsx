import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || ""),
  title: "RSVP Events - Next.js App",
  description: "Open Source App to learn Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "RSVP Events - Next.js App",
    description: "Open Source App to learn Next.js",
    siteName: "RSVP Events",
    images: [
      {
        url: "/og.png",
        alt: "RSVP Events - Next.js 13 Demo App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSVP Events - Next.js App",
    description: "Open Source App to learn Next.js",
    images: ["/og.png"],
    creator: "@choubari_",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main role="main" className="flex min-h-screen flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
