// ============================================================
//  hooks/index.js
// ============================================================
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useScrollReveal
 * Adds class "show" when element enters the viewport.
 */
export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useNavbar
 * Tracks scroll to toggle floating state and active section.
 */
export function useNavbar(sectionIds = []) {
  const [isFloating, setIsFloating]     = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  const onScroll = useCallback(() => {
    setIsFloating(window.scrollY > 80);

    const triggerPoint = window.scrollY + 140;
    let current = sectionIds[0] ?? "";
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el && triggerPoint >= el.offsetTop) current = id;
    });
    setActiveSection(current);
  }, [sectionIds]);

  return { isFloating, activeSection, onScroll };
}
