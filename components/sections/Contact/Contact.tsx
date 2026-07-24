import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export default function Contact() {
  return (
    <div className="flex gap-6 text-sm text-[hsl(var(--text-secondary))] items-center">
      <a
        href="mailto:jramirezsamc@gmail.com"
        className="inline-flex items-center gap-1.5 hover:text-[hsl(var(--text-primary))] transition-colors"
      >
        <MailIcon className="h-4 w-4" />
        jramirezsamc@gmail.com
      </a>
      <a
        href="https://github.com/errezeeta"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-[hsl(var(--text-primary))] transition-colors"
      >
        <GitHubIcon className="h-4 w-4" />
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/javier-rz"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-[hsl(var(--text-primary))] transition-colors"
      >
        <LinkedInIcon className="h-4 w-4" />
        LinkedIn
      </a>
    </div>
  );
}
