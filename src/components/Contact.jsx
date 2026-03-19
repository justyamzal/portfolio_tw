// ============================================================
//  Contact.jsx — Icon Tile Square (compact, violet theme)
// ============================================================
import { contactData, footerText } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

// ── SVG Brand Icons ──────────────────────────────────────────
const icons = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

function ContactTile({ label, href }) {
  const ref = useScrollReveal();

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      title={label}
      className={[
        "reveal group flex flex-col items-center justify-center gap-2.5",
        "border border-white/8 bg-slate-900/60 backdrop-blur-[16px]",
        "rounded-xl p-4 aspect-square w-[90px] h-[90px]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08]",
        "hover:border-violet-500/40 hover:shadow-[0_6px_24px_rgba(139,92,246,0.2)]",
        "hover:bg-violet-500/10",
      ].join(" ")}
    >
      <span className="text-violet-400 transition-all duration-300 group-hover:text-violet-300 group-hover:scale-110">
        {icons[label]}
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-slate-500 group-hover:text-violet-400 transition-colors duration-300">
        {label}
      </span>
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

          <div className="flex flex-wrap justify-center gap-4">
            {contactData.map((item) => (
              <ContactTile key={item.label} {...item} />
            ))}
          </div>

        </div>
      </section>

      <footer className="py-7 pb-10 xs:px-10 text-center text-slate-500 text-[0.92rem] border-t border-white/5 relative z-[1]">
        {footerText}
      </footer>
    </>
  );
}
