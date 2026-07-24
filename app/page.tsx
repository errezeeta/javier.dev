import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import Experience from "@/components/sections/Experience/Experience";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Education from "@/components/sections/Education/Education";
import Languages from "@/components/sections/Languages/Languages";
import Interests from "@/components/sections/Interests/Interests";
import DownloadPDFButton from "@/components/DownlaodPDFButton";
import PrintButton from "@/components/PrintButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 py-16 sm:py-28 space-y-24 sm:space-y-32">
        {/* Hero */}
        <Intro />

        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* Education */}
        <section className="w-full max-w-2xl mx-auto">
          <h2 className="section-label">Education</h2>
          <div>
            <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
              Telematics Engineering
            </h3>
            <p className="text-sm text-[hsl(var(--text-secondary))] mt-0.5">
              UPC · EETAC Castelldefels
            </p>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-[hsl(var(--text-tertiary))] mt-1.5">
              2017 — 2021
            </p>
          </div>
        </section>

        {/* Languages */}
        <Languages />

        {/* Interests */}
        <Interests />

        {/* CTA: Download CV */}
        <section className="w-full max-w-2xl mx-auto flex items-center gap-3 no-print">
          <DownloadPDFButton />
          <PrintButton />
        </section>

        {/* Footer */}
        <footer className="text-center no-print">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[hsl(var(--text-tertiary))]">
            <a
              href="https://github.com/errezeeta/javier.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--text-secondary))] transition-colors"
            >
              View source
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
