"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

export default function DownloadPDFButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const { pdf } = await import("@react-pdf/renderer");
      const { default: CVDocument } = await import(
        "@/components/pdf/CVDocument"
      );
      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Javier_Ramirez_CV.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className="px-2 py-1 print:hidden"
    >
      {loading ? (
        <Loader2 width={20} strokeWidth={1} className="animate-spin" />
      ) : (
        <Download width={20} strokeWidth={1} />
      )}
    </Button>
  );
}
