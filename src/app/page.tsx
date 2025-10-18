'use client';

import Image from "next/image";

import { useState } from "react";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "about me", href: "#about" },
  { label: "research", href: "#research" },
  { label: "papers", href: "#papers" },
  { label: "contact", href: "#contact" },
];

const education = [
  {
    school: "New York University",
    credential: "PhD, Computer Science",
    note: "Cybersecurity for Democracy Lab",
    timeframe: "2024 — Present",
  },
  {
    school: "University of Oklahoma",
    credential: "B.S., Computer Science",
    note: "Minor in Mathematics",
    timeframe: "2020 — 2024",
  },
];

const papers = [
  {
    title: "More and Scammier Ads: The Perils of YouTube's Ad Privacy Settings",
    venue: "PoPETs 2025",
    link: "https://petsymposium.org/popets/2025/popets-2025-0169.pdf",
  },
];

const projects = [
  {
    title: "TikTok Polarization",
    timeframe: "Aug 2024 — Present",
    description:
      "Analyzing content volume, polarization, and platform amplification patterns to understand how TikTok shapes divisive discourse and civic engagement.",
    tags: ["social media", "polarization", "mixed methods"],
  },
  {
    title: "Sparse Model Graphing",
    timeframe: "Aug 2023 — May 2024",
    description:
      "Developed an interactive front-end that visualizes variable graphs produced by a 98% accurate Graph Neural Network classifier for sparse matrix detection.",
    tags: ["visualization", "graph neural networks"],
  },
  {
    title: "Autonomous Driving Vision",
    timeframe: "Aug 2021 — May 2022",
    description:
      "Enhanced object detection pipelines for autonomous vehicles using OpenCV and Hough line detection, integrating outputs with LiDAR to reduce collision risk.",
    tags: ["computer vision", "object detection", "opencv"],
  },
  {
    title: "OU Data Analytics Lab",
    timeframe: "Jan 2021 — May 2021",
    description:
      "Partnered with a PhD researcher to investigate Simpson's paradox in public datasets, surfacing misuse risks and crafting guidelines for responsible analysis.",
    tags: ["statistics", "ethics"],
  },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <div
      className="min-h-screen bg-[#fdf8f5] text-[#28252b]"
      style={{
        backgroundImage:
          "linear-gradient(#e6e1de 1px, transparent 1px), linear-gradient(90deg, #e6e1de 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-10 sm:pt-14">
        <header className="sticky top-6 z-20 mx-auto w-full max-w-4xl">
          <div className="rounded-3xl border border-[#e3bfc7] bg-[#f4dede]/80 px-6 py-3 shadow-sm backdrop-blur">
            <nav className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
                Lexie Matsumoto
              </span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e3bfc7] text-[#4f3a43] transition hover:border-[#b87d8a] hover:text-[#b87d8a] sm:hidden"
                aria-label="Toggle navigation"
                aria-expanded={navOpen}
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <span className="sr-only">Menu</span>
                {navOpen ? (
                  <span className="text-xl leading-none">×</span>
                ) : (
                  <span className="flex flex-col items-center justify-center gap-1.5">
                    <span className="block h-0.5 w-5 rounded-full bg-current" />
                    <span className="block h-0.5 w-5 rounded-full bg-current" />
                    <span className="block h-0.5 w-5 rounded-full bg-current" />
                  </span>
                )}
              </button>
              <ul className="hidden items-center gap-6 font-mono text-sm uppercase tracking-[0.2em] text-[#4f3a43] sm:flex">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="transition-colors hover:text-[#b87d8a]"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {navOpen ? (
              <ul className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#e3bfc7] bg-white/90 p-4 font-mono text-sm uppercase tracking-[0.2em] text-[#4f3a43] shadow-[6px_6px_0_0_rgba(227,191,199,0.35)] sm:hidden">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-[#f8e3e8]"
                      href={link.href}
                      onClick={closeNav}
                    >
                      {link.label}
                      <span aria-hidden className="text-[#b87d8a]">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </header>

        <main className="flex flex-col gap-24">
          <section
            id="home"
            className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center"
          >
            <div className="relative rounded-[32px] border border-[#e3bfc7] bg-white/90 p-10 shadow-[12px_12px_0_0_rgba(227,191,199,0.55)]">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
                Introduction
              </span>
              <h1 className="mt-6 font-mono text-4xl leading-tight text-[#241820] sm:text-5xl">
                Hi, I'm Lexie.
              </h1>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-[#3e2f36] sm:text-lg">
                <p>
                  I'm a PhD student at New York University advised by Damon McCoy. 
                  I am part of the Cybersecurity for Democracy lab, a multi-university center for research-driven policy.
                </p>
                <p> 
                My research interests are social media harms and security, ethical AI, and other topics 
                that bridge technical approaches with legislative and policy initiatives.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-[#e3bfc7] bg-[#f8e3e8] px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:bg-[#f4dede]"
                  href="#contact"
                >
                  get in touch
                </a>
                {/* <a
                  className="rounded-full border border-[#e3bfc7] px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:border-[#b87d8a] hover:text-[#b87d8a]"
                  href="/Lexie-Jones-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view resume
                </a> */}
              </div>
            </div>
            <div className="mx-auto flex h-80 w-full max-w-xs items-center justify-center">
              <div className="relative h-full w-full rounded-[40px] border border-[#e3bfc7] bg-white/70 shadow-[10px_10px_0_0_rgba(227,191,199,0.45)]">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#f4dede] via-[#fdf8f5] to-[#eed5dc]" />
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-[40px] border border-white/60 bg-black/5 text-center backdrop-blur-sm">
                <div className="mx-auto flex h-80 w-full max-w-xs items-center justify-center">
                  <div className="relative h-full w-full overflow-hidden rounded-[40px] border border-[#e3bfc7] bg-white/70 shadow-[10px_10px_0_0_rgba(227,191,199,0.45)]">
                    <Image
                      src="/profile.jpg"
                      alt="Lexie Matsumoto"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="rounded-[32px] border border-[#e3bfc7] bg-white/85 p-10 shadow-[12px_12px_0_0_rgba(227,191,199,0.35)]"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
                  About me
                </span>
                <h2 className="font-mono text-3xl text-[#241820]">
                  Who I Am
                </h2>
                <p className="text-base leading-relaxed text-[#3e2f36]">
                  I am largely interested in how social media and other online platforms impact society, especially
                  more vulnerable populations such as children and marginalized communities. My goal in pursuing research is 
                  to inform policy and legislative efforts that promote safer, more equitable online spaces.
                </p>
                <p className="text-base leading-relaxed text-[#3e2f36]">
                  When I am not in the lab, you can find me spending too much money in a stationary store, at a cafe with a good book,
                  or on a walk through the park with my dog Venti.
                </p>
              </div>
              <div className="flex w-full max-w-xs flex-col gap-4">
                <div className="rounded-3xl border border-[#e3bfc7] bg-white/90 p-6 font-mono text-sm uppercase tracking-[0.25em] text-[#4f3a43] shadow-[8px_8px_0_0_rgba(227,191,199,0.35)]">
                  <span className="text-xs tracking-[0.35em] text-[#b87d8a]">
                    education
                  </span>
                  <ul className="mt-4 space-y-4 text-xs normal-case tracking-[0.1em] text-[#3e2f36]">
                    {education.map((item) => (
                      <li key={item.school} className="space-y-1">
                        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#241820]">
                          {item.school}
                        </p>
                        <p>{item.credential}</p>
                        <p>{item.note}</p>
                        <p className="text-[#b87d8a]">{item.timeframe}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="research" className="space-y-10">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
                Research spotlight
              </span>
              <h2 className="font-mono text-3xl text-[#241820]">
                Current projects
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-[#e3bfc7] bg-white/85 p-6 shadow-[8px_8px_0_0_rgba(227,191,199,0.35)]"
                >
                  <div>
                    <h3 className="font-mono text-xl text-[#241820]">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-[#b87d8a]">
                      {project.timeframe}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#3e2f36]">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#b87d8a]">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#e3bfc7] px-3 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="papers"
            className="rounded-[32px] border border-[#e3bfc7] bg-white/90 p-10 shadow-[12px_12px_0_0_rgba(227,191,199,0.35)]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
              Selected papers
            </span>
            <h2 className="mt-4 font-mono text-3xl text-[#241820]">
              Published Works
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3e2f36]">
              Below are some of my published research papers. Explore them to learn more about my work and contributions to the
              field.
            </p>
            <ul className="mt-8 space-y-6">
              {papers.map((paper) => (
                <li
                  key={paper.title}
                  className="rounded-[24px] border border-[#e3bfc7] bg-[#f8e3e8]/60 p-6 shadow-[8px_8px_0_0_rgba(227,191,199,0.3)]"
                >
                  <p className="font-mono text-lg uppercase tracking-[0.2em] text-[#241820]">
                    {paper.title}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#b87d8a]">
                    {paper.venue}
                  </p>
                  <a
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#e3bfc7] px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:border-[#b87d8a] hover:text-[#b87d8a]"
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    read paper
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="contact"
            className="rounded-[32px] border border-[#e3bfc7] bg-[#f8e3e8]/70 p-10 shadow-[12px_12px_0_0_rgba(227,191,199,0.35)]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
              Contact
            </span>
            <h2 className="mt-4 font-mono text-3xl text-[#241820]">
              Let's collaborate
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4f3a43]">
              I'm always eager to meet researchers, legislators, and organizers
              who are exploring similar questions. Reach out below!
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                className="rounded-3xl border border-[#e3bfc7] bg-white/70 px-6 py-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:-translate-y-1 hover:bg-white"
                href="mailto:lb4535@nyu.edu"
              >
                email
              </a>
              <a
                className="rounded-3xl border border-[#e3bfc7] bg-white/70 px-6 py-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:-translate-y-1 hover:bg-white"
                href="https://www.linkedin.com/in/lexie-matsumoto"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a
                className="rounded-3xl border border-[#e3bfc7] bg-white/70 px-6 py-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#4f3a43] transition hover:-translate-y-1 hover:bg-white"
                href="https://scholar.google.com/citations?user=xZXru8MAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                google scholar
              </a>
            </div>
          </section>
        </main>

        <footer className="pb-10 text-center font-mono text-xs uppercase tracking-[0.35em] text-[#b87d8a]">
          © {new Date().getFullYear()} Lexie Matsumoto — designed with care in NYC. Feel free to fork this <u><a href="https://github.com/lexiekateb/resumev2" target="_blank">repo</a></u>.
        </footer>
      </div>
    </div>
  );
}
