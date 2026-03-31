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
        "grid grid-cols-1 xl:grid-cols-[1fr_1fr] ",
      ].join(" ")}
    >
      {/* Content (left on desktop) */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <p className="text-[2rem] font-bold mb-2.5 transition-colors duration-300 group-hover:text-violet-300">{title}</p>
          <div className="flex flex-wrap gap-2 -mt-1">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-[1rem] rounded-full text-slate-300 bg-white/4 border border-white/10 flex items-center gap-1.5"
              >
                {stackIcons[s] && <span className="text-violet-300">{stackIcons[s]}</span>}
                {s}
              </span>
            ))}
          </div>
          <p className="text-slate-400 leading-[1.8] mt-4 mb-4">{description}</p>
          

        </div>

        <div className="flex gap-3 mt-6 max-sm:flex-col">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-[0.92rem] text-center bg-gradient-to-r from-violet-500 to-cyan-500 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:from-violet-600 hover:to-cyan-600"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-[0.92rem] text-center border-2 border-white/20 text-white bg-transparent transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-400/10 hover:shadow-lg"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Image (right on desktop) */}
      <div className="project-image relative h-52 xl:h-auto overflow-hidden">
        <div className="absolute top-4 right-4 z-20">
          <span
            className="px-3 py-1.5 rounded-full text-[0.82rem] font-medium border border-white/20 bg-slate-900/90 backdrop-blur-md text-white"
          >
            {tag}
          </span>
        </div>

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

        <div className="flex flex-col gap-7">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
