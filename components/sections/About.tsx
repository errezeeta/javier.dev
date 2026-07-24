"use client";

import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="About flex flex-col items-center gap-6 print:my-4 w-full">
      <h2 className="text-2xl font-bold text-center print:text-xl">About Me</h2>

      {/* Quick info cards */}
      <div className="flex flex-wrap justify-center gap-3 text-sm print:hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
          <MapPin className="h-3.5 w-3.5" />
          Barcelona, Spain
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
          <Briefcase className="h-3.5 w-3.5" />
          3+ years experience
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
          <GraduationCap className="h-3.5 w-3.5" />
          UPC-EETAC · Telemática
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-2xl text-center space-y-3">
        <p className="text-base leading-relaxed text-muted-foreground">
          Telematics Engineer (UPC-EETAC) with experience in{" "}
          <strong className="text-foreground">early-stage startups</strong>{" "}
          (TrueCold, 2024-present),{" "}
          <strong className="text-foreground">research centers</strong>{" "}
          (IEEC, ESA/Gaia), and{" "}
          <strong className="text-foreground">open-source projects</strong>.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          I combine full-stack development (Next.js, Express, TypeScript) with{" "}
          <strong className="text-foreground">DevOps on AWS</strong> (Lambda,
          API Gateway, CI/CD) and IoT + AI systems. I thrive in environments
          where I can own products end-to-end — from architecture decisions to
          deployment.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Currently seeking teams with an{" "}
          <strong className="text-foreground">ownership culture</strong> where I
          can keep growing as a full-stack engineer or specialize in
          backend/cloud.
        </p>
      </div>
    </section>
  );
}
