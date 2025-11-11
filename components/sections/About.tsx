"use client";

import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="About flex flex-col items-center gap-5 print:my-4">
      <h2 className="text-2xl font-bold print:hidden">About me</h2>
      <div className="flex flex-col items-center gap-4">
        <h3
          className="text-lg print:hidden text-gray-500/80 font-light italic leading-tight"
          style={{
            fontFamily:
              "'Bradley Hand', 'Brush Script MT', 'Segoe Script', cursive",
          }}
        >
          Hey :) I'm Javi
        </h3>
        <p className="text-md">
          A results-oriented developer skilled in collaborative, full-stack
          environments. I support product development by contributing directly
          to design patterns and business logic decisions. I am proficient in
          DevOps practices, with hands-on experience implementing CI/CD
          pipelines for automated testing and successful deployments on AWS.
        </p>
      </div>
    </section>
  );
}
