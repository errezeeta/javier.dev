import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col items-center text-center pt-12 sm:pt-20 pb-4">
      {/* Photo — large, circular, subtle shadow */}
      <div className="mb-8 animate-enter">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-card">
          <Image
            src="/portait.JPG"
            alt="Javier Ramirez"
            width={144}
            height={144}
            className="object-cover w-full h-full scale-105"
            priority
          />
        </div>
      </div>

      {/* Name — compressed, tight tracking like Vercel */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] text-[hsl(var(--text-primary))] animate-enter">
        Javier Ramirez
      </h1>

      {/* Role — clean, understated */}
      <p className="mt-4 text-lg sm:text-xl text-[hsl(var(--text-secondary))] font-light animate-enter">
        Software Engineer
      </p>

      {/* One-liner — personal, direct */}
      <p className="mt-5 text-sm sm:text-base text-[hsl(var(--text-tertiary))] max-w-md leading-relaxed animate-enter">
        I build products end-to-end — from architecture and APIs to deployment
        on AWS. Based in Barcelona.
      </p>

      {/* Links — minimal, monospace labels */}
      <div className="flex items-center gap-6 mt-8 animate-enter">
        <LinkItem href="mailto:jramirezsamc@gmail.com" label="Email" />
        <LinkItem
          href="https://github.com/errezeeta"
          label="GitHub"
        />
        <LinkItem
          href="https://linkedin.com/in/javier-rz"
          label="LinkedIn"
        />
      </div>
    </section>
  );
}

function LinkItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={label === "Email" ? undefined : "_blank"}
      rel={label === "Email" ? undefined : "noopener noreferrer"}
      className="group flex flex-col items-center gap-0.5"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[hsl(var(--text-tertiary))] group-hover:text-[hsl(var(--accent))] transition-colors">
        {label}
      </span>
    </a>
  );
}
