// ============================================================
//  Navbar.jsx — full Tailwind v4
// ============================================================
import { useState } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ isFloating, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={["sticky top-0 z-50 transition-colors duration-300", 
        isFloating ? "py-0" : "",].join(" ")}>
      {/* Shell — shrinks when floating */}
      <div
        className={[
          "mx-auto transition-[width] duration-300",
          isFloating
            ? "w-[min(520px,calc(100%-32px))] pt-3.5"
            : "w-[min(1180px,calc(100%-48px))]",
        ].join(" ")}
      >
        {/* Inner bar */}
        <div
          className={[
            "flex items-center justify-between transition-[min-height,border,border-radius] duration-300",
            isFloating
              ? [
                  "min-h-[62px] px-4 rounded-full justify-center",
                  "bg-white/10 backdrop-blur-lg",
                  "shadow-[0_14px_35px_rgba(2,6,23,0.28)]",
                ].join(" ")
              : "min-h-[78px] border-b border-white/8",
          ].join(" ")}
        >
          {/* Brand — hidden in floating on desktop, shown on mobile */}
          <a
            href="#about"
            onClick={closeMenu}
            className={[
              "brand-logo text-[1.15rem] font-bold tracking-wide transition-opacity duration-200",
              isFloating ? "hidden md:hidden" : "block",
            ].join(" ")}
          >
            <span className="font-brand text-3xl text-violet-500">Y.</span>{""}
            <span className="font-brand text-3xl text-violet-500">A</span>
          </a>

          {/* Brand — always visible on mobile when floating */}
          {isFloating && (
            <a
              href="#about"
              onClick={closeMenu}
              className="block md:hidden text-[1rem] font-bold tracking-wide"
            >
              <span className="font-brand text-3xl text-violet-500">Y.</span>{""}
            <span className="font-brand text-3xl text-violet-500">A</span>
            </a>
          )}

          {/* Hamburger (mobile only) */}
          <button
            className="relative md:hidden w-7 h-5 cursor-pointer z-[100] ml-auto"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {[0, 9, 18].map((top, i) => (
              <span
                key={i}
                className={[
                  "absolute left-0 block h-0.5 w-full rounded-sm",
                  "bg-gradient-to-r from-cyan-400 to-violet-500",
                  "transition-all duration-250",
                  menuOpen && i === 0 ? "top-[9px] rotate-[135deg]" : "",
                  menuOpen && i === 1 ? "opacity-0 -left-[60px]" : "",
                  menuOpen && i === 2 ? "top-[9px] -rotate-[135deg]" : "",
                ].join(" ")}
                style={!menuOpen ? { top } : undefined}
              />
            ))}
          </button>

            {/* Nav links — desktop */}
            <nav
              className={[
                "hidden md:flex transition-all duration-300",
                isFloating ? "gap-5 justify-center" : "gap-8",
              ].join(" ")}
            >
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const active = activeSection === id;
                return (
                  <a
                    key={label}
                    href={href}
                    className={[
                      "nav-link-item text-[1rem] transition-colors duration-300",
                      isFloating
                        ? active
                          ? "text-violet-400"
                          : "text-white/80 hover:text-white"
                        : active
                        ? "text-white"
                        : "text-slate-300 hover:text-white",
                      active ? "active" : "",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav
            className={[
              "nav-mobile-open md:hidden absolute left-4 right-4 mt-2.5",
              "flex flex-col gap-0 p-4 rounded-2xl",
              "border border-white/12 backdrop-blur-lg",
              isFloating
                ? "bg-white/95 border-violet-300/30"
                : "bg-slate-900/95",
            ].join(" ")}
          >
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={[
                    "py-3 text-base border-b border-white/8 last:border-0",
                    "transition-colors duration-200",
                    isFloating
                      ? active
                        ? "text-violet-400"
                        : "text-white/80 hover:text-white"
                      : active
                      ? "text-white"
                      : "text-slate-300 hover:text-white",
                  ].join(" ")}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
