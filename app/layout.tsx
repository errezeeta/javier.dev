import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://errezeeta.github.io/javier.dev"),
  title: "Javier Ramirez | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer based in Barcelona. Building SaaS products from MVP to production. Expertise in Next.js, TypeScript, AWS, and AI automation. Telematics Engineer (UPC-EETAC).",
  keywords: [
    "Javier Ramirez",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "AWS",
    "Barcelona",
    "Node.js",
    "Express",
    "DevOps",
  ],
  authors: [{ name: "Javier Ramirez", url: "https://github.com/errezeeta" }],
  creator: "Javier Ramirez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://errezeeta.github.io/javier.dev",
    title: "Javier Ramirez | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer based in Barcelona. Next.js, TypeScript, AWS, AI automation.",
    siteName: "Javier Ramirez — Resume",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Javier Ramirez — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Ramirez | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer based in Barcelona. Next.js, TypeScript, AWS, AI automation.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Javier Ramirez",
              givenName: "Javier",
              familyName: "Ramirez",
              jobTitle: "Full-Stack Software Engineer",
              email: "jramirezsamc@gmail.com",
              telephone: "+34 622 62 11 81",
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
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "Express",
                "AWS",
                "PostgreSQL",
                "Prisma",
                "Docker",
                "CI/CD",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UPC - EETAC Castelldefels",
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
