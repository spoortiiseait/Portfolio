import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Printer,
  Copy,
  Check,
  Eye,
  ExternalLink,
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export function ResumeSection() {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handlePrint = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    window.print();
  };

  const handleDownload = () => {
    setDownloading(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Trigger print dialog where user can choose "Save as PDF"
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 500);
  };

  const handleCopyPlainText = () => {
    const plainResume = `
SPOORTI M S
Phone: ${resumeData.personal.phone} | Email: ${resumeData.personal.email}
LinkedIn: ${resumeData.personal.linkedin} | GitHub: ${resumeData.personal.github}
Location: ${resumeData.personal.location}

SUMMARY:
${resumeData.personal.summary}

EDUCATION:
- Bachelor of Engineering – Information Science Engineering (2024 – Present)
  Adichunchanagiri Institute Of Technology, VTU | Karnataka, India
- Pre-University Course (PUC) (2022 – 2024)
  Sri Siddaganga PU Science College, Davanagere | Karnataka, India
- SSLC (2022)
  Kourava Education Society, Balambeed | Karnataka, India

TECHNICAL SKILLS:
- Programming Languages: Java, Python, C
- Web Technologies: HTML, CSS, JavaScript, React.js, Node.js
- Databases: MySQL, MongoDB, JDBC
- Core Concepts: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks
- Tools: Git, GitHub, VS Code, Postman
- Other Skills: REST APIs, Responsive Web Design, Basic Cloud Computing, Problem Solving

PROJECTS:
1. Campus Lost and Found System (2026) - React.js, JavaScript, Node.js, MongoDB
2. Library Management System (2026) - Java, MySQL, JDBC
3. Weather Information Dashboard (2026) - HTML, CSS, JavaScript, REST API
4. Student Result Analysis System (2025) - Python, CSV, Data Analysis

EXPERIENCE:
Student Developer / Technical Team Member (2026)
College Technical Activities, Karnataka, India

CERTIFICATIONS:
- Java Programming Fundamentals
- Python Programming
- Data Structures and Algorithms
- SQL and Database Fundamentals
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-500/30 bg-cyber-500/10 text-xs font-mono text-cyber-400 mb-4">
            <span>08 // RESUME &amp; CV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Vitae &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            View the verified, complete resume or export a clean ATS-friendly print copy directly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-500 to-electric-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 no-print">
          <button
            onClick={handleDownload}
            id="resume-download-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyber-500 to-electric-violet hover:from-cyber-400 hover:to-electric-purple shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4" />
            <span>{downloading ? 'Preparing PDF...' : 'Download Resume (PDF)'}</span>
          </button>

          <button
            onClick={handlePrint}
            id="resume-print-btn"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-800 dark:text-slate-200 glass-card hover:border-cyber-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <Printer className="w-4 h-4 text-cyber-400" />
            <span>Print Resume</span>
          </button>

          <button
            onClick={handleCopyPlainText}
            id="resume-copy-txt-btn"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Raw Text</span>
              </>
            )}
          </button>
        </div>

        {/* Digital Resume Sheet Preview Container (Printable) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-2xl p-6 sm:p-10 md:p-14 text-left text-slate-900 dark:text-slate-100 transition-colors resume-printable font-sans">
          {/* Header */}
          <div className="border-b-2 border-slate-300 dark:border-slate-700 pb-5 mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
              {resumeData.personal.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mono">
              <a href={`tel:${resumeData.personal.phone}`} className="hover:text-cyber-500">
                {resumeData.personal.phone}
              </a>
              <span>|</span>
              <a href={`mailto:${resumeData.personal.email}`} className="hover:text-cyber-500">
                {resumeData.personal.email}
              </a>
              <span>|</span>
              <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyber-500">
                linkedin.com/in/Spoorti M S
              </a>
              <span>|</span>
              <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="hover:text-cyber-500">
                github.com/Spoorti M S
              </a>
            </div>
          </div>

          {/* Section: SUMMARY */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {resumeData.personal.summary}
            </p>
          </div>

          {/* Section: EDUCATION */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Bachelor of Engineering – Information Science Engineering
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Adichunchanagiri Institute Of Technology, VTU
                  </div>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400 font-mono text-xs">
                  <div>2024 – Present</div>
                  <div>Karnataka, India</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Pre-University Course (PUC)
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Sri Siddaganga PU Science College, Davanagere
                  </div>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400 font-mono text-xs">
                  <div>2022 – 2024</div>
                  <div>Karnataka, India</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    SSLC
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Kourava Education Society, Balambeed
                  </div>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400 font-mono text-xs">
                  <div>2022</div>
                  <div>Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: TECHNICAL SKILLS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Programming Languages:</strong> Java, Python, C
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Web Technologies:</strong> HTML, CSS, JavaScript, React.js
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Databases:</strong> MySQL, MongoDB
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Core Concepts:</strong> Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems, Computer Networks
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Tools:</strong> Git, GitHub, VS Code, Postman
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold">Other Skills:</strong> REST APIs, Responsive Web Design, Basic Cloud Computing, Problem Solving
              </div>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 font-mono">
              PROJECTS
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
                  <div className="text-slate-900 dark:text-white font-bold">
                    Campus Lost and Found System
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                    2026
                  </div>
                </div>
                <div className="text-xs text-cyber-500 font-mono">
                  Web Application | React.js, JavaScript, Node.js, MongoDB
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 dark:text-slate-300">
                  <li>Developed a web application that allows students to report, search, and manage lost and found items within a campus.</li>
                  <li>Implemented item registration with descriptions, categories, location, date, and contact information.</li>
                  <li>Designed a searchable interface to help users find reported items efficiently.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
                  <div className="text-slate-900 dark:text-white font-bold">
                    Library Management System
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                    2026
                  </div>
                </div>
                <div className="text-xs text-electric-purple font-mono">
                  Java Database Project | Java, MySQL, JDBC
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 dark:text-slate-300">
                  <li>Developed a system for managing books, students, borrowing, and returning records in a college library.</li>
                  <li>Implemented book search, issue, return, and availability tracking functionality.</li>
                  <li>Connected the Java application with MySQL using JDBC for persistent data storage.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
                  <div className="text-slate-900 dark:text-white font-bold">
                    Weather Information Dashboard
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                    2026
                  </div>
                </div>
                <div className="text-xs text-emerald-500 font-mono">
                  Web Application | HTML, CSS, JavaScript, REST API
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 dark:text-slate-300">
                  <li>Developed a web dashboard for displaying weather information based on a user’s selected location.</li>
                  <li>Integrated a weather API to retrieve real-time weather data and display relevant information.</li>
                  <li>Created a responsive user interface with search and location-based weather display features.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
                  <div className="text-slate-900 dark:text-white font-bold">
                    Student Result Analysis System
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                    2025
                  </div>
                </div>
                <div className="text-xs text-amber-500 font-mono">
                  Python Mini Project | Python, CSV, Data Analysis
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 dark:text-slate-300">
                  <li>Developed a Python-based application to process and analyze student examination results.</li>
                  <li>Implemented calculations for total marks, percentage, grades, and subject-wise performance.</li>
                  <li>Used CSV files for storing and processing student result data.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: EXPERIENCE */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              EXPERIENCE
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between font-semibold">
                <div className="text-slate-900 dark:text-white font-bold">
                  Student Developer / Technical Team Member
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                  2026
                </div>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                College Technical Activities | Karnataka, India
              </div>
              <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-slate-700 dark:text-slate-300">
                <li>Collaborated with student teams on academic and software-development projects.</li>
                <li>Contributed to frontend development, database management, testing, documentation, and presentations.</li>
                <li>Participated in technical discussions and problem-solving activities.</li>
              </ul>
            </div>
          </div>

          {/* Section: CERTIFICATIONS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Java Programming Fundamentals – Online Certification</li>
              <li>Python Programming – Online Certification</li>
              <li>Data Structures and Algorithms – Online Certification</li>
              <li>SQL and Database Fundamentals – Online Certification</li>
            </ul>
          </div>

          {/* Section: ACHIEVEMENTS & ACTIVITIES */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              ACHIEVEMENTS &amp; ACTIVITIES
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Participated in college-level technical events and hackathons.</li>
              <li>Participated in software development and problem-solving activities.</li>
              <li>Actively preparing for software development placements and technical interviews.</li>
            </ul>
          </div>

          {/* Section: ADDITIONAL INFORMATION */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              ADDITIONAL INFORMATION
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Interests:</strong> Software Development, Artificial Intelligence, Web Development, Cloud Computing, Problem Solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
