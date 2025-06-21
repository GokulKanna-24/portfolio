import './App.css'
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Download, Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="./g.svg" alt="Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Gokul B</h1>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="./GOKUL_B_Resume.pdf"
              download
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              <Download className="mr-2" size={16} /> CV
            </a>
          </div>
          {/* Mobile Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4 text-sm bg-white">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              href="/GOKUL_B_Resume.pdf"
              download
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              <Download className="mr-2" size={16} /> CV
            </a>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-100 to-white min-h-[80vh] flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-bold z-10">Gokul B</h1>
        <p className="text-xl mt-4 z-10 text-gray-700">
          Full Stack Developer | Laravel & Angular Specialist
        </p>
        <div className="flex gap-4 mt-6 z-10">
          <a href="mailto:gokulkanna2407@gmail.com" className="text-blue-600 hover:underline">
            <Mail className="inline-block mr-1" size={18} /> gokulkanna2407@gmail.com
          </a>
          <a href="tel:+919344617486" className="text-blue-600 hover:underline">
            <Phone className="inline-block mr-1" size={18} /> +91 93446 17486
          </a>
        </div>
        <div className="flex gap-6 mt-4 z-10">
          <a href="https://github.com/GokulKanna-24" target="_blank" rel="noopener noreferrer">
            <Github size={28} className="hover:text-gray-700" />
          </a>
          <a href="https://linkedin.com/in/gokulkanna24" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} className="hover:text-blue-700" />
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a full stack developer with 3+ years of experience specializing in Laravel and Angular. I enjoy building clean, efficient, and scalable applications from front-end to back-end. My strengths lie in clean code, performance tuning, UI/UX, and working in collaborative teams.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2 text-sm text-white">
            {["Laravel", "Angular", "React", "Flutter", "JQuery", "MySQL", "Redis", "Express.js"].map(skill => (
              <li key={skill} className="bg-blue-600 px-3 py-1 rounded-full">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "HalaX – Medical Billing Optimization",
                description:
                  "Integrates data from multiple platforms via APIs & Excel. Implements Redis-based real-time broadcasting & job queues.",
                tech: ["Angular", "Laravel", "MySQL", "Redis"],
              },
              {
                title: "Desk – Issue Tracking System",
                description:
                  "Built a ticketing system with scheduling module for issue follow-ups. Full-stack architecture & development.",
                tech: ["Angular", "Laravel", "MySQL"],
              },
              {
                title: "SSO – Secure Authentication Service",
                description:
                  "Centralized login for internal apps using Laravel Passport.",
                tech: ["Laravel", "OAuth2"],
              },
              {
                title: "Restaurant Management Site",
                description:
                  "Improved admin side logic and optimized order handling & testing workflows.",
                tech: ["PHP", "JQuery", "MySQL", "Bootstrap"],
              },
            ].map((project, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">Full Stack Developer – Pracma IT Solutions</h3>
            <span className="text-sm text-gray-500">Aug 2023 – Present</span>
            <p className="text-gray-700 mt-2">
              Built full-stack apps with Laravel & Angular. Led new feature development, backend APIs, and real-time data queues.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Full Stack Developer – Megamind Computing Solutions</h3>
            <span className="text-sm text-gray-500">Jun 2022 – Jun 2023</span>
            <p className="text-gray-700 mt-2">
              Developed web/mobile apps with API logic, backend performance optimization, and collaborative solutions.
            </p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Let's build something amazing. Reach out via email or LinkedIn.
        </p>
        <a
          href="mailto:gokulkanna2407@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Gokul B. All rights reserved.
      </footer>
    </div>
  )
}

export default App
