// ============================================================
//  Skills.jsx — full Tailwind v4
// ============================================================
import { skillsData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";
import { FaHtml5, FaCss3, FaJs, FaPhp, FaPython, FaJava, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaFigma, FaDocker, FaDatabase, FaCode, FaToolbox } from "react-icons/fa";

// Mapping skill name → icon (only using available fa icons)
const skillIcons = {
  "HTML + CSS":  <FaHtml5    size={14} />,
  "JavaScript":  <FaJs       size={14} />,
  "PHP":         <FaPhp      size={14} />,
  "Python":      <FaPython   size={14} />,
  "Java":        <FaJava     size={14} />,
  "React":       <FaReact    size={14} />,
  "Tailwind":    <FaCss3     size={14} />,        // Using CSS as alternative
  "Bootstrap":   <FaBootstrap size={14} />,
  "Node.js":     <FaNodeJs   size={14} />,
  "Express":     <FaCode     size={14} />,        // Using Code as alternative
  "MySQL":       <FaDatabase size={14} />,
  "MongoDB":     <FaDatabase size={14} />,        // Using Database as alternative
  "PostgreSQL":  <FaDatabase size={14} />,        // Using Database as alternative
  "Git":         <FaGitAlt   size={14} />,
  "Figma":       <FaFigma    size={14} />,
  "Docker":      <FaDocker   size={14} />,
  "Postman":     <FaToolbox  size={14} />,        // Using Toolbox as alternative
  "Jest":        <FaCode     size={14} />,        // Using Code as alternative
};

function SkillCard({ title, tags }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className={[
        "reveal border border-white/8 bg-slate-900/72 backdrop-blur-[16px]",
        "rounded-[24px] shadow-[0_18px_50px_rgba(2,6,23,0.35)] p-8",
        "transition-all duration-300 hover:-translate-y-2",
        "hover:border-violet-500/26 hover:shadow-[0_18px_45px_rgba(124,58,237,0.12)]",
      ].join(" ")}
    >
      <h3 className="text-[1.7rem] font-bold mb-5">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className={[
              "px-4 py-2.5 rounded-full text-[0.95rem] text-slate-200",
              "border border-white/8 bg-white/4",
              "transition-all duration-300",
              "hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10",
              "flex items-center gap-2",
            ].join(" ")}
          >
            {skillIcons[tag] && (
              <span className="text-cyan-400">{skillIcons[tag]}</span>
            )}
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal();

  return (
    <section id="skills" className="py-[100px]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">

        <div ref={headingRef} className="reveal max-w-[720px] mx-auto mb-14 text-center">
          <p className="text-violet-300 text-[1rem] uppercase tracking-[0.28em]">Capabilities</p>
          <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Skills That Power My Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
}
