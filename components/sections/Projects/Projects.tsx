export default function Projects() {
  return (
    <section className="Projects flex flex-col items-center gap-5 print:gap-4">
      <h2 className="text-2xl font-bold print:text-xl">Projects</h2>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-md font-bold print:text-md">
            AI Video Automation Pipeline
          </h3>
          <p className="text-sm text-muted-foreground print:text-sm">
            n8n · Gemini · YouTube API · Shotstack · SerpAPI
          </p>
          <p className="text-md print:text-sm">
            Built an end-to-end automated pipeline that generates and publishes
            YouTube Shorts daily. The workflow fetches trending topics via
            SerpAPI, uses Gemini to generate optimized scripts, synthesizes
            voice with Google TTS, renders vertical video with Shotstack, and
            publishes to YouTube — fully automating the content creation
            lifecycle with 6+ API integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
