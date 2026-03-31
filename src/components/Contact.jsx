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
        "hover:border-violet-400/40 hover:shadow-[0_6px_24px_rgba(34,211,238,0.12)]",
        "hover:bg-violet-400/10",
      ].join(" ")}
    >
      <span className="text-white-400 transition-all duration-300 group-hover:text-white-300 group-hover:scale-110">
        {icons[label]}
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-slate-500 group-hover:text-violet-400 transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}

// ── Email Form ───────────────────────────────────────────────
function ContactForm() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose mailto link with form values
    const subject = encodeURIComponent(form.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Email: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:yadri.amz@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="reveal w-full text-left flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">
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
              "text-[0.95rem] text-white placeholder:text-slate-600",
              "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
              "transition-all duration-200",
            ].join(" ")}
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={[
              "bg-slate-900/72 border border-white/8 rounded-xl px-4 py-2.5",
              "text-[0.95rem] text-white placeholder:text-slate-600",
              "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
              "transition-all duration-200",
            ].join(" ")}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="your message..."
            className={[
              "bg-slate-900/72 border border-white/8 rounded-xl px-4 py-2.5",
              "text-[0.95rem] text-white placeholder:text-slate-600 resize-none",
              "focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5",
              "transition-all duration-200",
            ].join(" ")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={[
            "mt-2 self-start flex items-center gap-2 px-6 py-3 rounded-xl",
            "bg-violet-500 hover:bg-violet-600 text-white text-[0.88rem] font-medium uppercase",
            "border border-none transition-all duration-200 hover:-translate-y-1",
            "hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)]",
            sent ? "opacity-60 pointer-events-none" : "group",
          ].join(" ")}
        >
          {sent ? (
            <><MdCheck size={16} /> Sent!</>
          ) : (
            <>
              <span>Send Message</span>
              <Send
                size={16}
                className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
        <div className="w-[min(1200px,calc(100%-48px))] mx-auto">

          <div ref={headingRef} className="reveal max-w-[720px] mx-auto mb-16 text-center">
            <p className="text-violet-300 text-[1rem] uppercase tracking-[0.28em]">Contact</p>
            <h2 className="mt-3.5 text-[clamp(2rem,4vw,3rem)] font-bold">Let's Build Something Better</h2>
            <p className="mt-3.5 text-slate-400">If you want someone who cares about both code and presentation, let's talk.</p>
          </div>

          {/* Main layout — Left (Description + Socials) | Right (Form) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left — Description + Social Tiles */}
            <div className="flex flex-col gap-8">
              <div className="text-left">
                <p className="text-slate-400 leading-[1.8] text-[0.95rem]">
                  I'd be happy to connect! Feel free to reach out for project inquiries, collaboration opportunities, or any other questions you may have.
                </p>
              </div>

              {/* Social Tiles */}
              <div className="flex flex-col gap-4">
                {contactData.map((item) => {
                  const ref = useScrollReveal();
                  return (
                    <a
                      ref={ref}
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="reveal flex items-center gap-4 py-2 transition-all duration-300 group"
                    >
                      <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 border-violet-500/40 bg-transparent text-violet-300 transition-all duration-300 group-hover:border-violet-400 group-hover:text-violet-200 group-hover:scale-110">
                        {icons[item.label]}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white font-semibold text-base">{item.label}</span>
                        <span className="text-slate-400 text-sm">{item.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right — Contact Form */}
            <ContactForm />

          </div>

        </div>
      </section>

      <footer className="py-7 pb-10 xs:px-10 text-center text-slate-500 text-[0.92rem] border-t border-white/5 relative z-[1]">
        {footerText}
      </footer>
    </>
  );
}
