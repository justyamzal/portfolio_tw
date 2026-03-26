// ============================================================
//  Projects.jsx — full Tailwind v4
//  Note: .project-image::after (gradient overlay) tetap di
//        globals.css karena pseudo-element tidak support di TW.
// ============================================================
import { projectsData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

// Mapping stack name → icon (same as Skills)
const stackIcons = {
  "HTML":      <FaHtml5  size={12} />,
  "CSS":       <FaCss3   size={12} />,
  "JavaScript": <FaJs    size={12} />,
  "React":     <FaReact  size={12} />,
  "Tailwind":  <FaCss3   size={12} />,
  "Node.js":   <FaNodeJs size={12} />,
  "Express":   <FaNodeJs size={12} />,
};

function ProjectCard({ tag, title, description, image, stack, demoUrl, repoUrl }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className={[
        "reveal overflow-hidden group",
        "border border-white/8 bg-slate-900/72 backdrop-blur-[16px]",
        "rounded-[24px] shadow-[0_18px_50px_rgba(2,6,23,0.35)]",
        "transition-all duration-300 hover:-translate-y-2",
        "hover:border-violet-500/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]",
      ].join(" ")}
    >
      {/* Image area — ::after overlay lives in globals.css */}
      <div className="project-image relative h-[215px] overflow-hidden">
        <span
          className={[
            "absolute z-[2] left-4 top-4 px-3 py-1.5 rounded-full text-[0.82rem]",
            "border border-white/10 bg-slate-900/80 backdrop-blur-[12px]",
          ].join(" ")}
        >
          {tag}
        </span>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700   group-hover:scale-110"
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-[1.4rem] font-bold mb-2.5 transition-colors duration-300">{title}</h3>
        <p className="text-slate-400 leading-[1.8]">{description}</p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mt-4.5">
          {stack.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full text-[0.82rem] text-slate-300 bg-white/4 border border-white/8 flex items-center gap-1.5"
            >
              {stackIcons[s] && <span className="text-white-400">{stackIcons[s]}</span>}
              {s}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5 max-sm:flex-col">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              "px-4 py-2.5 rounded-[12px] text-[0.92rem] text-center",
              "bg-white/10 transition-all duration-300",
              "hover:-translate-y-0.5 hover:bg-violet-500/82",
            ].join(" ")}
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              "px-4 py-2.5 rounded-[12px] text-[0.92rem] text-center",
              "border border-white/10 transition-all duration-300",
              "hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/4",
            ].join(" ")}
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="py-[100px] bg-white/[0.03] border-y border-white/5">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">

        <div ref={headingRef} className="reveal max-w-[720px] mx-auto mb-14 text-center">
          <p className="text-cyan-400 text-[1rem] uppercase tracking-[0.28em]">Projects</p>
          <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Selected Projects</h2>
          <p className="mt-3.5 text-slate-400">These are the projects that best show how I think, build, and design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
