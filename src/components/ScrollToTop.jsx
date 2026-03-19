// ============================================================
//  ScrollToTop.jsx — full Tailwind v4
// ============================================================
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-6 right-6 p-3 rounded-full cursor-pointer z-50",
        "flex items-center justify-center",
        "bg-violet-500/20 backdrop-blur-[12px]",
        "border border-violet-500/30 text-white",
        "transition-all duration-300",
        "hover:bg-violet-500/40",
        "[&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:-translate-y-0.5",
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-5",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
