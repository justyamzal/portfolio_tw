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
        "border border-white/8 bg-slate-900/72 backdrop-blur-lg",
        "rounded-[24px] shadow-card",
        "transition-all duration-300 hover:-translate-y-2",
        "hover:border-violet-500/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]",
        "flex flex-col md:flex-row",
      ].join(" ")}
    >
      {/* Body — Left side (desktop) / Top (mobile) */}
      <div className="p-6 flex-1 flex flex-col justify-between order-2 md:order-1">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className={[
                "px-3 py-1.5 rounded-full text-[0.75rem]",
                "border border-white/10 bg-slate-900/80 backdrop-blur-md",
                "text-slate-300",
              ].join(" ")}
            >
              {tag}
            </span>
          </div>
          <h3 className="text-[1.4rem] font-bold mb-2.5 transition-colors duration-300">{title}</h3>
          <p className="text-slate-400 leading-[1.8] text-[0.95rem]">{description}</p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2 mt-4.5">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full text-[0.75rem] text-slate-300 bg-white/4 border border-white/8 flex items-center gap-1.5"
              >
                {stackIcons[s] && <span className="text-white-400">{stackIcons[s]}</span>}
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              "px-4 py-2.5 rounded-xl text-[0.92rem] text-center flex-1 md:flex-none",
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
              "px-4 py-2.5 rounded-xl text-[0.92rem] text-center flex-1 md:flex-none",
              "border border-white/10 transition-all duration-300",
              "hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/4",
            ].join(" ")}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Image area — Right side (desktop) / Bottom (mobile) */}
      <div className="project-image relative h-64 md:h-auto md:w-1/2 overflow-hidden order-1 md:order-2">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </article>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="py-25 bg-white/3 border-y border-white/5">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">

        <div ref={headingRef} className="reveal max-w-180 mx-auto mb-14 text-center">
          <p className="text-cyan-400 text-[1rem] uppercase tracking-[0.28em]">Projects</p>
          <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Selected Projects</h2>
          <p className="mt-3.5 text-slate-400">These are the projects that best show how I think, build, and design.</p>
        </div>

        <div className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
