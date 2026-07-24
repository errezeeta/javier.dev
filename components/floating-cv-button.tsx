"use client";

import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCVButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 print:hidden ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToBottom}
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
        aria-label="Download CV"
      >
        <FileText className="h-4 w-4" />
        <span>Download CV</span>
        <Download className="h-4 w-4" />
      </button>
    </div>
  );
}
