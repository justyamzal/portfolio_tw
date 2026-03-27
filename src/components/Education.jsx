// ============================================================
//  Education.jsx — full Tailwind v4
// ============================================================
import { GraduationCap, Rocket } from "lucide-react";
import { educationData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

// Shared card style
const cardCls = [
  "border border-white/8 bg-slate-900/72 backdrop-blur-[16px]",
  "rounded-[24px] shadow-[0_18px_50px_rgba(2,6,23,0.35)] p-8",
  "transition-all duration-300 hover:-translate-y-2",
  "hover:border-violet-500/30 hover:shadow-[0_18px_50px_rgba(124,58,237,0.15)]",
].join(" ");

function IconBadge({ iconType, variant }) {
  const styles = {
    violet: "bg-violet-500/20 text-violet-400",
    cyan:   "bg-cyan-400/20   text-cyan-400",
  };
  const Icon = iconType === "graduation" ? GraduationCap : Rocket;
  return (
    <div
      className={`inline-flex items-center justify-center w-13 h-13 rounded-[18px] mb-4.5 text-[1.4rem] ${styles[variant]}`}
    >
      <Icon className="w-7 h-7" />
    </div>
  );
}

export default function Education() {
  const headingRef = useScrollReveal();
  const card1Ref   = useScrollReveal();
  const card2Ref   = useScrollReveal();

  const { academic, courses } = educationData;

  return (
    <section
      id="education"
      className="py-25 bg-white/3 border-y border-white/5"
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="reveal max-w-180 mx-auto mb-14 text-center">
          <p className="text-cyan-400 text-[1rem] uppercase tracking-[0.28em]">Background</p>
          <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Education &amp; Courses</h2>
          <p className="mt-3.5 text-slate-400">A quick look at the academic and practical foundation behind my work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12">

          {/* Background */}
          
          {/* Academic */}
          <article ref={card1Ref} className={`reveal ${cardCls}`}>
            <div className="flex items-center gap-4">
              <IconBadge iconType="graduation" variant={academic.iconVariant} />
              <h3 className="text-[1.7rem] font-bold mb-5">{academic.title}</h3>
            </div>
            <p className="font-semibold">{academic.institution}</p>
            <p className="text-slate-400">{academic.degree}</p>
            {/* <span className="inline-block mt-2.5 px-3.5 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-[0.92rem]">
              GPA: {academic.gpa}
            </span> */}
          </article>

          {/* Courses */}
          <article ref={card2Ref} className={`reveal ${cardCls}`}>
            <div className="flex items-center gap-4">
            <IconBadge iconType="rocket" variant={courses.iconVariant} />
            <h3 className="text-[1.7rem] font-bold mb-5">{courses.title}</h3>
            </div>
            <ul className="mt-4 space-y-4">
              {courses.items.map((c, i) => (
                <li key={i} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:bg-cyan-400">
                    <p className="font-semibold text-white">{c.name}</p>
                    <p className="text-slate-400">{c.provider} • {c.location}</p>
                    <p className="text-slate-400 text-[0.92rem] mt-1">{c.period}</p>
              </li>
            ))}
            </ul>

          </article>

        </div>
      </div>
    </section>
  );
}
