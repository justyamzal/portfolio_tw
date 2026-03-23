// ============================================================
//  Hero.jsx — full Tailwind v4
// ============================================================
import { useEffect, useRef } from "react";
import { heroData } from "../data/portfolioData";

export default function Hero() {
  const seqRef = useRef([]);

  useEffect(() => {
    seqRef.current.forEach((el) => el?.classList.add("show"));
  }, []);

  const addSeq = (el) => {
    if (el && !seqRef.current.includes(el)) seqRef.current.push(el);
  };

  const { name, status, roles, tagline, description, cvLink, profileImage, profileTag } = heroData;

  return (
    <section id="about">
      <div
        className={[
          "w-[min(1180px,calc(100%-48px))] mx-auto",
          "min-h-[calc(100vh-78px)]",
          "grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]",
          "items-center gap-12 py-14 pb-20",
        ].join(" ")}
      >
        {/* ── Left ── */}
        <div>
          {/* Status badge */}
          <div
            ref={addSeq}
            className="hero-seq inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-violet-500/30 bg-white/4 shadow-[0_0_30px_rgba(139,92,246,0.12)] text-slate-200 text-[0.95rem] w-fit"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 [animation:pulse_1.8s_infinite]" />
            {status}
          </div>

          {/* Eyebrow */}
          <p
            ref={addSeq}
            className="hero-seq mt-4.5 text-cyan-400 uppercase tracking-[0.3em] text-[1rem]"
            style={{ animationDelay: "0.35s" }}
          >
            {roles.join(" • ")}
          </p>

          {/* H1 */}
          <h1
            ref={addSeq}
            className="hero-seq mt-3.5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] max-w-[760px]"
            style={{ animationDelay: "0.5s" }}
          >
            {tagline}
          </h1>

          {/* Description */}
          <p
            ref={addSeq}
            className="hero-seq mt-6 max-w-[640px] text-slate-400 text-[1rem] xs:text-center leading-[1.9]"
            style={{ animationDelay: "0.72s" }}
          >
            I'm <strong className="text-white">{name}</strong>,
            {" "}
            {description.replace(`I'm ${name}, `, "").replace(`I'm ${name},`, "")}
          </p>

          {/* CTA */}
          <div
            ref={addSeq}
            className="hero-seq flex flex-wrap gap-4 mt-8"
            style={{ animationDelay: "0.95s" }}
          >
            <a
              href={cvLink}
              className={[
                "inline-flex items-center justify-center px-6 py-3.5 rounded-[14px] mx-auto md:mx-0",
                "font-semibold border border-white/12 bg-white/4 text-white",
                "transition-all duration-300 hover:-translate-y-1",
                "hover:border-none hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-400",
              ].join(" ")}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* ── Right — Profile image ── */}
        <div
          ref={addSeq}
          className="hero-image hero-seq flex justify-center"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="relative">
            {/* Glow behind image — filter:blur stays in CSS */}
            <div
              className="absolute inset-0 rounded-full transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.42), rgba(34,211,238,0.18), rgba(217,70,239,0.28))",
                filter: "blur(34px)",
              }}
            />

            {/* Ring */}
            <div
              className={[
                "relative w-[380px] h-[380px] max-sm:w-[290px] max-sm:h-[290px]",
                "p-2.5 rounded-full border border-violet-500/45 bg-slate-900",
                "shadow-[0_0_60px_rgba(124,58,237,0.25)]",
                "group",
              ].join(" ")}
            >
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tag */}
            <div
              className={[
                "absolute left-1/2 -bottom-3.5 -translate-x-1/2 whitespace-nowrap",
                "px-4 py-2.5 rounded-full border border-white/10",
                "bg-slate-900/80 backdrop-blur-[14px] text-slate-200 text-[0.92rem]",
              ].join(" ")}
            >
              {profileTag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
