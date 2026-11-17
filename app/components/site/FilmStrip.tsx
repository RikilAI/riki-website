"use client";
import { useState } from "react";

/** Endless photo strip. The second copy of the images is decorative (hidden from screen readers). Has a pause button. */
export default function FilmStrip({ alts, pauseLabel, playLabel }: { alts: string[]; pauseLabel: string; playLabel: string }) {
  const [paused, setPaused] = useState(false);
  const frames = [...alts, ...alts];
  return (
    <div className={`film-strip${paused ? " paused" : ""}`}>
      <div className="film-fade-l" />
      <div className="film-fade-r" />
      <div className="film-track">
        {frames.map((alt, i) => {
          const dup = i >= alts.length;
          return (
            <div key={i} className="film-frame" aria-hidden={dup || undefined}>
              <img src={`/images/opt/lecture-${(i % alts.length) + 1}.webp`} alt={dup ? "" : alt} width={480} height={320} loading="lazy" decoding="async" />
            </div>
          );
        })}
      </div>
      <button type="button" className="film-pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? `▶ ${playLabel}` : `❚❚ ${pauseLabel}`}
      </button>
    </div>
  );
}
