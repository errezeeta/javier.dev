import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact/Contact";
import CoreSkills from "@/components/sections/CoreSkills/CoreSkills";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills/Skills";
import Languages from "@/components/sections/Languages/Languages";
import Projects from "@/components/sections/Projects/Projects";
import Interests from "@/components/sections/Interests/Interests";
import PrintButton from "@/components/PrintButton";
import DownloadPDFButton from "@/components/DownlaodPDFButton";
import { FloatingCVButton } from "@/components/floating-cv-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Floating CV download button */}
      <FloatingCVButton />

      <div className="container flex flex-col items-center gap-12 print:gap-4 px-6 py-12 print:py-0 md:px-24 md:py-20 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="w-full stagger-children">
          <Intro />
        </section>

        {/* Contact Bar */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Contact />
        </section>

        {/* Core Skills Pills */}
        <section className="w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CoreSkills />
        </section>

        {/* About */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="section-divider" />
          <About />
        </section>

        {/* Experience */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="section-divider" />
          <Experience />
        </section>

        {/* Projects */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="section-divider" />
          <Projects />
        </section>

        {/* Skills */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="section-divider" />
          <Skills />
        </section>

        {/* Education */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="section-divider" />
          <Education />
        </section>

        {/* Languages */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="section-divider" />
          <Languages />
        </section>

        {/* Interests */}
        <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <div className="section-divider" />
          <Interests />
        </section>

        {/* Bottom CTA */}
        <section className="w-full flex flex-col items-center gap-4 py-8 animate-fade-in"
          style={{ animationDelay: "1s" }}>
          <div className="section-divider" />
          <p className="text-muted-foreground text-sm">
            ¿Hablamos? — Let&apos;s talk!
          </p>
          <Contact />
          <div className="flex gap-3 mt-4">
            <DownloadPDFButton />
            <PrintButton />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground pb-8 print:hidden animate-fade-in"
          style={{ animationDelay: "1.1s" }}>
          <p>
            Built with TypeScript, Next.js 14, Tailwind CSS &amp; shadcn/ui
            {" · "}
            <a
              href="https://github.com/errezeeta/javier.dev"
              target="_blank"
              className="underline hover:text-foreground transition-colors"
            >
              Source
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
