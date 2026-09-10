import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Code2, Trophy, Download, ArrowUpRight, Mail, MapPin,
  GraduationCap, Briefcase, BadgeCheck, Award, Sparkles, ExternalLink,
  Menu, X, Send, Terminal, Cpu, Database, Layers, ArrowRight
} from 'lucide-react';
import profileImage from "../assets/image2.jpeg";
import pituitaryImage from "../assets/pituitary.jpeg";
import ecommerceImage from "../assets/ecommerce.png";


const PORTRAIT = profileImage;
const HERO_BG = 'https://images.hostinger.com/9a6a62f2-8a22-4955-b5f3-3aa8e981e5dd.png';

const LINKS = {
  github: 'https://github.com/Subhashree-git-02',
  linkedin: 'https://www.linkedin.com/in/subhashree-s-sahoo',
  hackerrank: 'https://www.hackerrank.com/profile/subhashreesaho18',
  email: 'subhashreesahoo49021662@gmail.com',
  resume: 'https://drive.google.com/file/d/1yrblxMsBzkx7kphbCSTWYfSBGLIVjy1E/view?usp=drivesdk',
};

const ROLES = ['MCA Graduate', 'Java Developer', 'MERN Stack Developer', 'Full-Stack Developer', 'DSA Enthusiast', 'Problem Solver'];

const SKILLS = [
  { group: 'Languages', icon: Terminal, items: ['Java', 'JavaScript', 'SQL'] },
  { group: 'Frontend', icon: Layers, items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { group: 'Backend', icon: Cpu, items: ['Java', 'Spring Boot', 'Express.js','Node.js', 'OOPs'] },
  { group: 'Databases', icon: Database, items: ['MySQL', 'MongoDB', 'DBMS'] },
  { group: 'CS & Development', icon: Code2, items: ['OOP', 'Data Structures & Algorithms', 'Git', 'GitHub', 'Postman', 'Maven', 'Figma', 'Vercel', 'Netlify' ] },
];

const PROJECTS = [
  {
    title: 'ShopSphere — MERN Commerce',
    tag: 'MERN Stack',
    img: ecommerceImage,
    desc: 'A full-stack e-commerce platform with JWT authentication, cart, order management, an admin dashboard with analytics, and REST APIs built on Node, Express and MongoDB.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],

  },
  {
    title: 'Brain Tumor Detector - Tumor Classifier',
    tag: 'Deep Learning',
    img: pituitaryImage,
    desc: 'A deep learning web app that classifies MRI images with a CNN model, exposing live predictions and confidence scores through a clean, responsive interface.',
    stack: ['Python', 'CNN', 'Flask', 'React'],
    github: "https://github.com/Subhashree-git-02/Brain-Tumor-Detection-using-Deep-Learning",
  },
  // {
  //   title: 'ConvoRoom — Realtime Chat',
  //   tag: 'Full Stack',
  //   img: 'https://images.hostinger.com/aa409876-471f-4525-903c-fbfdf1ee3aeb.png',
  //   desc: 'A real-time messaging application featuring rooms, presence indicators and socket-based delivery, backed by a scalable Express and MongoDB service layer.',
  //   stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
  //   github: LINKS.github, demo: '#',
  // },
];

const EDUCATION = [
  { title: 'Master of Computer Applications (MCA) | CGPA: 8.18', place: 'Graduate', period: 'September 2024 — July 2026', note: 'Specialized in software engineering, data structures, and full-stack development. Graduated with distinction.' },
  { title: 'Bachelor of Science in Chemistry (B.Sc. Chemistry) | CGPA: 7.84', place: 'Undergraduate', period: 'May 2020 — June 2023', note: 'Studied a strong foundation in organic, inorganic, physical and analytical chemistry through theoretical and laboratory studies.' },
  { title: 'Higher Secondary Education (HSC)', place: 'Science', period: '2018 - 2020', note: 'Completed higher secondary education with a focus on science subjects, including physics, chemistry, and mathematics.' },
  { title: 'Secondary Education (BSE)', period: '2018', note: 'Completed secondary education with a focus on science subjects, including physics, chemistry, and mathematics.' },  
];

const EXPERIENCE = [
  { role: 'MERN Stack Developer Intern', org: 'Sparkradix Technologies', period: 'August 2025 — December 2025', points: ['Built and shipped MERN-stack applications with reusable component libraries and REST APIs.', 'Optimised database queries and improved API response times through indexing and pagination.'] },
  { role: 'Frontend Web Developer Intern', org: 'InternPe', period: 'June 2025 - July 2025', points: ['Assisted in building and maintained respoinsible frontend web applications using HTML, CSS, JavaScript and basic backend integration.', 'Continuously learning system design and scalable architecture patterns.'] },
];

const CERTS = ['Programming in Java Elite, NPTEL — IIT Kharagpur', 'MERN Stack Development — Sparkradix Technologies ', 'IBM Granite Model for Software Development — IBM SkillsBuild', 'AI for beginners — hp Life'];

const ACHIEVEMENTS = [
  { stat: '100+', label: 'DSA problems solved' },
  { stat: '2+', label: 'Projects built' },
  { stat: '3★', label: 'HackerRank rating' },
  { stat: '2026', label: 'MCA Graduate' },
];

const CODING_PROFILES = [
  { name: 'LeetCode', icon: Code2, href: LINKS.leetcode, meta: '100+ problems solved' },
  { name: 'HackerRank', icon: Trophy, href: LINKS.hackerrank, meta: '3-star problem solver' },
  { name: 'GitHub', icon: Github, href: LINKS.github, meta: 'Open source & projects' },
  { name: 'LinkedIn', icon: Linkedin, href: LINKS.linkedin, meta: 'Professional network' },
];

const NAV = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

function Reveal({ children, className = '', i = 0 }) {
  return (
    <motion.div variants={fade} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHead({ kicker, title, sub }) {
  return (
    <Reveal className="max-w-2xl">
      <span className="font-mono-code text-xs tracking-widest uppercase text-accent">{kicker}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 tracking-tight">{title}</h2>
      {sub && <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

function downloadResume() {
  const content = `SUBHASHREE SAHOO
Java Full Stack Developer  |  Software Development Engineer
Email: ${LINKS.email}  |  GitHub: ${LINKS.github}  |  LinkedIn: ${LINKS.linkedin}

SUMMARY
MCA graduate and aspiring Software Development Engineer passionate about Java,
Data Structures & Algorithms, Full Stack Web Development and Problem Solving. Experienced
in building real-world MERN-stack and Deep Learning projects.

SKILLS
Java, JavaScript, Spring Boot, React.js, Node.js, Express.js, MongoDB, SQL, HTML, Tailwind CSS, 
DSA, OOPs, DBMS, Computer Networks, Operating Systems, Git, GitHub, Figma, Netlify.

PROJECTS
- ShopSphere: Full-stack MERN e-commerce platform with admin dashboard.
- Brain Tumor Detector: Deep learning MRI image classifier with live predictions.

EDUCATION
- Master of Computer Applications (MCA), 2024-2026
- Bachelor of Science in Chemistry (B.Sc.), 2020-2023

CODING PROFILES
LeetCode: ${LINKS.leetcode}
HackerRank: ${LINKS.hackerrank}
`;
a.download = 'Subhashree_Sahoo_Resume.txt';
  a.click();
  URL.revokeObjectURL(url);
}

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">
            Subhashree<span className="text-primary">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{n}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={`#contact`} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition active:scale-[0.98]">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden p-2 -mr-2" onClick={() => setMenu((v) => !v)} aria-label="Menu">
            {menu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menu && (
          <div className="md:hidden border-t border-border/60 bg-background/95 px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenu(false)} className="py-1.5 text-muted-foreground">{n}</a>
            ))}
            <a href="#contact" onClick={() => setMenu(false)} className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">Hire Me</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16">
        <img src={HERO_BG} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center py-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Available for SDE roles
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Subhashree<br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Sahoo</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-5 h-8 font-mono-code text-lg sm:text-xl text-accent">
              <span className="text-muted-foreground">&gt;</span>{' '}
              <motion.span key={roleIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                {ROLES[roleIndex]}
              </motion.span>
              <span className="animate-pulse">_</span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              An MCA graduate and aspiring Software Development Engineer from India, building
              scalable, real-world software with the MERN stack and Deep Learning — driven by
              a genuine love for Java, DSA, and continuous learning.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition active:scale-[0.98]">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold hover:bg-secondary transition active:scale-[0.98]">
                <Download className="h-4 w-4" /> View Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-accent/40 text-accent px-6 py-3 text-sm font-semibold hover:bg-accent/10 transition active:scale-[0.98]">
                Hire Me
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-4">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Github className="h-5 w-5" /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Linkedin className="h-5 w-5" /></a>
              <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Code2 className="h-5 w-5" /></a>
              <span className="h-4 w-px bg-border" />
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> India</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-border/80 shadow-2xl shadow-primary/10">
              <img src={PORTRAIT} alt="Portrait of Subhashree Sahoo" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card/90 backdrop-blur px-4 py-3 shadow-xl">
              <p className="font-mono-code text-xs text-muted-foreground">currently</p>
              <p className="text-sm font-semibold">Preparing for SDE roles</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="border-y border-border/60 bg-secondary/20 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-8 pr-8 font-mono-code text-sm text-muted-foreground">
              {['Java', 'JavaScript', 'Spring Boot', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'SQL', 'Tailwind CSS', 'REST APIs', 'DSA', 'OOP', 'Git', 'GitHub', 'Postman','Figma'].map((s) => (
                <span key={s} className="flex items-center gap-8"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{s}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHead kicker="01 / About Me" title="Curious, confident, and always building." />
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Subhashree — an MCA graduate and Full Stack Java Developer who genuinely enjoys
              turning hard problems into clean, working software. My journey has taken me from the
              fundamentals of Java and Data Structures to shipping full real-world applications
              across the MERN stack.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              I care deeply about writing scalable, maintainable code, and I treat every project as a
              chance to grow — sharpening my problem-solving, communication, and engineering instincts
              as I prepare for Software Development Engineer roles.
            </p>
          </Reveal>
          <Reveal i={1} className="grid grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{a.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <SectionHead kicker="02 / Skills" title="The stack I build with." sub="A toolkit spanning languages, full-stack web development and computer-science foundations." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} i={i}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><s.icon className="h-5 w-5" /></span>
                  <h3 className="font-display font-semibold">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <SectionHead kicker="03 / Projects" title="Selected work." sub="Real-world applications built end to end — from data model to deployed interface." />
        <div className="space-y-8 mt-12">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} i={i}>
              <div className={`grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-border bg-card overflow-hidden ${i % 2 ? 'md:[direction:rtl]' : ''}`}>
                <div className="relative overflow-hidden [direction:ltr] group">
                  <img src={p.img} alt={p.title} className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-mono-code text-accent border border-border">{p.tag}</span>
                </div>
                <div className="p-8 [direction:ltr]">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-mono-code text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition">
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey: Education + Experience */}
      <section id="journey" className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <SectionHead kicker="04 / Journey" title="Education & experience." />
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-6 text-primary"><GraduationCap className="h-5 w-5" /><h3 className="font-display font-semibold text-lg">Education</h3></div>
            <div className="space-y-5">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.title} i={i}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold">{e.title}</h4>
                      <span className="font-mono-code text-xs text-accent whitespace-nowrap">{e.period}</span>
                    </div>
                    <p className="text-sm text-primary mt-1">{e.place}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6 text-primary"><Briefcase className="h-5 w-5" /><h3 className="font-display font-semibold text-lg">Experience</h3></div>
            <div className="space-y-5">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.role} i={i}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold">{e.role}</h4>
                      <span className="font-mono-code text-xs text-accent whitespace-nowrap">{e.period}</span>
                    </div>
                    <p className="text-sm text-primary mt-1">{e.org}</p>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <SectionHead kicker="05 / Certifications" title="Credentials." />
            <div className="mt-8 space-y-3">
              {CERTS.map((c, i) => (
                <Reveal key={c} i={i}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                    <BadgeCheck className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead kicker="06 / Achievements" title="Milestones." />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a.label} i={i}>
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 h-full">
                    <Award className="h-5 w-5 text-accent mb-3" />
                    <p className="font-display text-2xl font-bold">{a.stat}</p>
                    <p className="text-sm text-muted-foreground mt-1">{a.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coding profiles */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <SectionHead kicker="07 / Coding Profiles" title="Where I practice & ship." sub="Follow my problem-solving and open-source work across platforms." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {CODING_PROFILES.map((c, i) => (
            <Reveal key={c.name} i={i}>
              <a href={c.href} target="_blank" rel="noreferrer" className="group block h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><c.icon className="h-5 w-5" /></span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
                </div>
                <h3 className="font-display font-semibold mt-4">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.meta}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:py-32 border-t border-border/50">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/15 via-card to-accent/10 p-8 sm:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="font-mono-code text-xs tracking-widest uppercase text-accent">08 / Contact</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 tracking-tight">Let's build something great.</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              I'm actively looking for Software Development Engineer opportunities. Whether it's a role,
              a project, or a conversation about code — my inbox is always open.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=subhashreesahoo49021662@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition active:scale-[0.98]"
>
                <Send className="h-4 w-4" /> Get in touch
              </a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold hover:bg-secondary transition active:scale-[0.98]">
                <Download className="h-4 w-4" /> View Resume
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
              <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"><Mail className="h-4 w-4" /> {LINKS.email}</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"><Github className="h-4 w-4" /> GitHub</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold">Subhashree Sahoo</p>
            <p className="text-sm text-muted-foreground">Java Full Stack Developer · Aspiring SDE · India</p>
          </div>
          <div className="flex items-center gap-4">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Github className="h-5 w-5" /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Linkedin className="h-5 w-5" /></a>
            <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition"><Code2 className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Subhashree Sahoo. Designed & built with care.
        </div>
      </footer>
    </div>
  );
}
