// ============================================================
//  Contact.jsx — full Tailwind v4
// ============================================================
import { contactData, footerText } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

function ContactCard({ label, value, href }) {
  const ref = useScrollReveal();
  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      className={[
        "reveal block",
        "border border-white/8 bg-slate-900/72 backdrop-blur-[16px]",
        "rounded-[24px] shadow-[0_18px_50px_rgba(2,6,23,0.35)] p-8",
        "transition-all duration-300 hover:-translate-y-2",
        "hover:border-violet-500/30 hover:shadow-[0_18px_45px_rgba(124,58,237,0.12)]",
      ].join(" ")}
    >
      <small className="block text-slate-400 mb-2">{label}</small>
      <strong
        className={[
          "text-white text-[1rem] break-words",
          "transition-colors duration-300",
          "group-hover:text-cyan-300",
        ].join(" ")}
        style={{ wordBreak: "break-word" }}
      >
        {value}
      </strong>
    </a>
  );
}

export default function Contact() {
  const headingRef = useScrollReveal();

  return (
    <>
      <section id="contact" className="py-[100px]">
        <div className="w-[min(860px,calc(100%-48px))] mx-auto text-center">

          <div ref={headingRef} className="reveal max-w-[720px] mx-auto mb-14">
            <p className="text-violet-300 text-[0.82rem] uppercase tracking-[0.28em]">Contact</p>
            <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Let's Build Something Better</h2>
            <p className="mt-3.5 text-slate-400">If you want someone who cares about both code and presentation, let's talk.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactData.map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}
          </div>

        </div>
      </section>

      <footer className="py-7 pb-10 xs:px-10  text-center text-slate-500 text-[0.92rem] border-t border-white/5 relative z-[1]">
        {footerText}
      </footer>
    </>
  );
}
