// ============================================================
//  portfolioData.js — centralized data for the portfolio
//  Edit this file to update all sections of the site
// ============================================================

export const heroData = {
  name: "Yadri Amtsal",
  status: "Open to opportunities",
  roles: ["Software Engineer", "Fullstack Web Developer"],
  tagline: "Hello World!",
  description:
    "I'm a developer focused on crafting responsive interfaces and solving real problems through code. I care about clean design, sharp user experience, and projects that feel alive.",
  cvLink: "https://drive.google.com/uc?export=download&id=121cLw8GvYGcT2hUaZbft9wTQOS-dMoMn",
  profileImage: "/images/profile_crosshanded.png",
  profileTag: "Frontend • Backend",
};

export const educationData = {
  academic: {
    icon: null,
    iconVariant: "violet",
    title: "Education",
    institution: "Polytechnic State of Jember",
    degree: "Bachelor of Informatics Engineering",
    // gpa: "3.69 / 4.00",
  },
  courses: {
    icon: null,
    iconVariant: "cyan",
    title: "Courses",
    items: [
      {
        name: "FGA Digitalent Kominfo Scholarship Bootcamp – Data Science",
        provider: "Binar Academy",
        location: "Remote, Indonesia",
        period: "March 2023 – Apr 2023",
      },
      {
        name: "Bootcamp Full-Stack Web Developer",
        provider: "Harisenin.com",
        location: "Remote, Indonesia",
        period: "Aug 2025 – Dec 2025",
      },
    ],
  },
};

export const skillsData = [
  {
    title: "Programming Language",
    icon: "terminal",
    tags: [
      { name: "HTML, CSS", icon: "HTML + CSS" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "PHP", icon: "PHP" },
      { name: "Python", icon: "Python" },
      { name: "Java", icon: "Java" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "layers",
    tags: [
      { name: "React", icon: "React" },
      { name: "Tailwind", icon: "Tailwind" },
      { name: "Vue", icon: "Vue" },
      { name: "Bootstrap", icon: "Bootstrap" },
      { name: "Node.js", icon: "Node.js" },
      { name: "Express", icon: "Express" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "database",
    tags: [
      { name: "MySQL", icon: "MySQL" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "PostgreSQL", icon: "PostgreSQL" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    tags: [
      { name: "Git", icon: "Git" },
      { name: "Figma", icon: "Figma" },
      { name: "Docker", icon: "Docker" },
      { name: "Postman", icon: "Postman" },
      { name: "Jest", icon: "Jest" },
    ],
  },
];

export const projectsData = [
  {
    tag: "Web App",
    title: "Chill",
    description: "Streaming platform concept with a modern cinematic interface.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Tailwind", "Node.js"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    tag: "Web App",
    title: "To-Do List",
    description: "Minimal productivity app focused on clarity, speed, and clean interaction.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Tailwind", "Express"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    tag: "Landing Page",
    title: "Eduford",
    description: "University landing page with bold layout, clear hierarchy, and responsive design.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const contactData = [
  { label: "Email",     value: "yadri.amz@gmail.com",                    href: "mailto:yadri.amz@gmail.com" },
  { label: "GitHub",    value: "github.com/justyamzal",                  href: "https://github.com/justyamzal" },
  { label: "Instagram", value: "instagram.com/rk.ymzl",                  href: "https://instagram.com/rk.ymzl" },
  { label: "LinkedIn",  value: "linkedin.com/in/yadribullah-hul-amtsal", href: "https://linkedin.com/in/yadribullah-hul-amtsal" },
];

export const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Contact",   href: "#contact" },
];

export const footerText = "© 2025 Yadri Amzal. Designed with a darker, sharper visual identity.";
