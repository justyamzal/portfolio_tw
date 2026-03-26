// ============================================================
//  Contact.jsx — Icon Tile Square + Email Form
// ============================================================
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { Send } from "lucide-react";
import { contactData, footerText } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

// ── Brand Icons (react-icons) ────────────────────────────────
const icons = {
  Email:     <MdEmail     size={24} />,
  GitHub:    <FaGithub    size={22} />,
  Instagram: <FaInstagram size={22} />,
  LinkedIn:  <FaLinkedin  size={22} />,
};

// ── Contact Tile ─────────────────────────────────────────────
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
        "border border-white/8 bg-slate-900/72 backdrop-blur-[16px]",
        "rounded-xl p-4 w-[100px] h-[100px]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08]",
        "hover:border-cyan-400/40 hover:shadow-[0_6px_24px_rgba(34,211,238,0.12)]",
        "hover:bg-cyan-400/10",
      ].join(" ")}
    >
      <span className="text-white-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:scale-110">
        {icons[label]}
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}

// ── Email Form ───────────────────────────────────────────────
function ContactForm() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose mailto link with form values
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:yadri.amz@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="reveal w-full max-w-[520px] mx-auto text-left"
    >
      <div className="flex flex-col gap-3">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[1rem] uppercase tracking-[0.18em] text-slate-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={[
                "bg-slate-900/72 border border-white/8 rounded-xl px-4 py-2.5",
                "text-[1rem] text-white placeholder:text-slate-600",
                "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
                "transition-all duration-200",
              ].join(" ")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[1rem] uppercase tracking-[0.18em] text-slate-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={[
                "bg-slate-900/72 border border-white/8 rounded-xl px-4 py-2.5",
                "text-[1rem] text-white placeholder:text-slate-600",
                "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
                "transition-all duration-200",
              ].join(" ")}
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[1rem] uppercase tracking-[0.18em] text-slate-500">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or idea..."
            className={[
              "bg-slate-900/72 border border-white/8 rounded-xl px-4 py-2.5",
              "text-[1rem] text-white placeholder:text-slate-600 resize-none",
              "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
              "transition-all duration-200",
            ].join(" ")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={[
            "mt-1 self-end flex items-center gap-2 px-6 py-2.5 rounded-xl",
            "bg-slate-900/72 text-white text-[0.88rem] font-medium",
            "border border-white/10 transition-all duration-200 hover:-translate-y-0.5",
            " hover:border-violet-500/40",
            "hover:shadow-[0_6px_20px_rgba(124,58,237,0.18)]",
            sent ? "opacity-60 pointer-events-none" : "group",
          ].join(" ")}
        >
          {sent ? (
            <><MdCheck size={16} /> Sent!</>
          ) : (
            <>
              <span className="group-hover:text-violet-400 transition-colors duration-200">Send Message</span>
              <Send
                size={16}
                className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-violet-400"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// ── Main Section ─────────────────────────────────────────────
export default function Contact() {
  const headingRef = useScrollReveal();

  return (
    <>
      <section id="contact" className="py-[100px]">
        <div className="w-[min(860px,calc(100%-48px))] mx-auto text-center">

          <div ref={headingRef} className="reveal max-w-[720px] mx-auto mb-12">
            <p className="text-violet-300 text-[1rem] uppercase tracking-[0.28em]">Contact</p>
            <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Let's Build Something Better</h2>
            <p className="mt-3.5 text-slate-400">If you want someone who cares about both code and presentation, let's talk.</p>
          </div>

          {/* Email Form */}
          <ContactForm />

          {/* Divider */}
          <div className="flex items-center gap-4 my-10 max-w-[520px] mx-auto">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-slate-500 text-[1rem] uppercase tracking-[0.2em]">or find me on</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Social Tiles */}
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
