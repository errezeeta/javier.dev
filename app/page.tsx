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
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
            Education
          </h2>
          <div>
            <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
              Telematics Engineering
            </h3>
            <p className="text-sm text-[hsl(var(--text-secondary))]">
              UPC · EETAC Castelldefels
            </p>
            <p className="text-xs text-[hsl(var(--text-tertiary))] mt-1">
              2017 — 2021
            </p>
          </div>
        </section>

        {/* Languages */}
        <Languages />

        {/* Interests */}
        <Interests />

        {/* Download */}
        <section className="w-full max-w-2xl mx-auto flex items-center gap-3 no-print">
          <DownloadPDFButton />
          <PrintButton />
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-[hsl(var(--text-tertiary))] no-print">
          <p>
            <a
              href="https://github.com/errezeeta/javier.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--text-secondary))] transition-colors"
            >
              Source
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
