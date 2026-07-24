import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://errezeeta.github.io/javier.dev"),
  title: {
    default: "Javier Ramirez — Software Engineer",
    template: "%s | Javier Ramirez",
  },
  description:
    "Software Engineer in Barcelona. I build products end-to-end — from architecture to deployment. Previously at TrueCold, IEEC.",
  openGraph: {
    type: "website",
    siteName: "Javier Ramirez",
    title: "Javier Ramirez — Software Engineer",
    description:
      "Software Engineer in Barcelona. I build products end-to-end.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Javier Ramirez",
              jobTitle: "Software Engineer",
              email: "jramirezsamc@gmail.com",
              url: "https://errezeeta.github.io/javier.dev",
              sameAs: [
                "https://github.com/errezeeta",
                "https://linkedin.com/in/javier-rz",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressCountry: "ES",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UPC · EETAC Castelldefels",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
