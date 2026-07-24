import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-4 animate-reveal">
      {/* Photo */}
      <div className="mb-7">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-[hsl(var(--border))]">
          <Image
            src="/portait.JPG"
            alt="Javier Ramirez"
            width={112}
            height={112}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[hsl(var(--text-primary))]">
        Javier Ramirez
      </h1>

      {/* One-liner */}
      <p className="mt-3 text-base sm:text-lg text-[hsl(var(--text-secondary))] max-w-md text-balance leading-relaxed">
        Software engineer in Barcelona. I build products end-to-end, from
        architecture and APIs to deployment on AWS.
      </p>

      {/* Links */}
      <div className="flex items-center gap-5 mt-5 text-sm text-[hsl(var(--text-tertiary))]">
        <a
          href="mailto:jramirezsamc@gmail.com"
          className="hover:text-[hsl(var(--text-primary))] transition-colors"
        >
          jramirezsamc@gmail.com
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://github.com/errezeeta"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[hsl(var(--text-primary))] transition-colors"
        >
          GitHub
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://linkedin.com/in/javier-rz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[hsl(var(--text-primary))] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
