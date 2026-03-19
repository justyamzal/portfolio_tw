// ============================================================
//  App.jsx
// ============================================================
import { useEffect } from "react";
import { useNavbar } from "./hooks";
import { navLinks } from "./data/portfolioData";

import Background  from "./components/Background";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Education   from "./components/Education";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import Contact     from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const SECTION_IDS = navLinks.map(({ href }) => href.replace("#", ""));

export default function App() {
  const { isFloating, activeSection, onScroll } = useNavbar(SECTION_IDS);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <Background />
      <Navbar isFloating={isFloating} activeSection={activeSection} />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
