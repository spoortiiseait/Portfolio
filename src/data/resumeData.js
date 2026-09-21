export const resumeData = {
  personal: {
    name: "Spoorti M S",
    title: "Software Engineer & Information Science Undergrad",
    subtitle: "5th Semester Information Science Engineering Student @ AIT (VTU)",
    tagline: "Passionate about engineering practical, scalable software solutions with clean code, modern web technologies, and robust database architectures.",
    email: "spoortims2006@email.com",
    phone: "+91-9380612186",
    location: "Karnataka, India",
    github: "https://github.com/Spoorti-M-S",
    linkedin: "https://linkedin.com/in/Spoorti-M-S",
    status: "Open to Software Engineering Internships & Entry-Level Roles",
    summary:
      "Information Science Engineering undergraduate currently pursuing the 5th semester with a keen interest in software development, data structures, web technologies, databases, cloud computing, and artificial intelligence. Familiar with programming fundamentals, object-oriented programming, database concepts, and web development. Dedicated to building practical software solutions and continuously improving problem-solving skills. Seeking internship and entry-level opportunities in software development and related technology roles."
  },

  metrics: [
    { label: "Featured Projects", value: "4+", detail: "Full-Stack & Systems" },
    { label: "Technical Certifications", value: "4", detail: "Java, Python, DSA, SQL" },
    { label: "Current Semester", value: "5th", detail: "Information Science (VTU)" },
    { label: "Problem Solving", value: "100%", detail: "DSA & Core CS Focus" },
  ],

  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      description: "Core languages used for systems, algorithms, and applications",
      items: [
        { name: "Java", level: "Proficient", rating: 85, highlight: "OOP, JDBC, Collections" },
        { name: "Python", level: "Proficient", rating: 82, highlight: "Scripting, Data Analysis, CSV" },
        { name: "C", level: "Intermediate", rating: 78, highlight: "Memory, Pointers, Algorithms" },
      ]
    },
    {
      category: "Web Technologies",
      icon: "Globe",
      description: "Frontend and full-stack development tools",
      items: [
        { name: "React.js", level: "Proficient", rating: 85, highlight: "Hooks, Components, SPA" },
        { name: "JavaScript (ES6+)", level: "Proficient", rating: 84, highlight: "Async/Await, DOM, APIs" },
        { name: "HTML5 & CSS3", level: "Advanced", rating: 90, highlight: "Semantic UI, Flexbox/Grid" },
        { name: "Node.js", level: "Intermediate", rating: 76, highlight: "Express, REST APIs" },
      ]
    },
    {
      category: "Databases & Storage",
      icon: "Database",
      description: "Relational and NoSQL persistent storage systems",
      items: [
        { name: "MySQL", level: "Proficient", rating: 85, highlight: "Complex Queries, Joins, Normalization" },
        { name: "MongoDB", level: "Intermediate", rating: 78, highlight: "Document Storage, Mongoose" },
        { name: "JDBC", level: "Proficient", rating: 80, highlight: "Java Relational DB Connector" },
      ]
    },
    {
      category: "Core CS Fundamentals",
      icon: "Cpu",
      description: "Theoretical foundation of computer science & system design",
      items: [
        { name: "Data Structures & Algorithms", level: "Proficient", rating: 84, highlight: "Arrays, Trees, Graphs, Sorting" },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", rating: 88, highlight: "Encapsulation, Polymorphism, Design" },
        { name: "Database Management Systems (DBMS)", level: "Proficient", rating: 85, highlight: "ACID, Transactions, Indexing" },
        { name: "Operating Systems", level: "Intermediate", rating: 78, highlight: "Process, Threads, Memory Management" },
        { name: "Computer Networks", level: "Intermediate", rating: 76, highlight: "TCP/IP, HTTP/S, Routing" },
      ]
    },
    {
      category: "Tools & Developer Practices",
      icon: "Wrench",
      description: "Daily workflow tools, version control, and collaboration",
      items: [
        { name: "Git & GitHub", level: "Proficient", rating: 85, highlight: "Branching, PRs, Version Control" },
        { name: "VS Code", level: "Advanced", rating: 90, highlight: "Extensions, Debugging, Environment" },
        { name: "Postman", level: "Intermediate", rating: 80, highlight: "API Testing & Inspection" },
        { name: "REST APIs", level: "Proficient", rating: 84, highlight: "Endpoints, JSON, Integration" },
        { name: "Responsive Web Design", level: "Advanced", rating: 88, highlight: "Mobile-First, Tailwind CSS" },
        { name: "Basic Cloud Computing", level: "Familiar", rating: 70, highlight: "Cloud Concepts & Hosting" },
      ]
    }
  ],

  projects: [
    {
      id: "campus-lost-and-found",
      title: "Campus Lost and Found System",
      year: "2026",
      category: "Web Application",
      badge: "Full-Stack Project",
      shortDesc: "A collaborative web application helping campus students report, search, and safely recover lost and found items.",
      description:
        "Developed a web application that allows students to report, search, and manage lost and found items within a campus. Implemented item registration with descriptions, categories, location, date, and contact information. Designed a searchable interface to help users find reported items efficiently.",
      tags: ["React.js", "JavaScript", "Node.js", "MongoDB", "Express", "REST API"],
      highlights: [
        "Item registration with descriptions, categories, specific campus locations, dates, and contact info",
        "Instant searchable & filterable interface to locate items quickly by category or location",
        "Secure claim workflow connecting finders directly with owners",
        "Responsive interface optimized for both mobile students and campus admin desks"
      ],
      color: "from-cyan-500/20 to-blue-600/20",
      accent: "cyan",
      github: "https://github.com/Spoorti-M-S/campus-lost-and-found",
      demo: "#"
    },
    {
      id: "library-management-system",
      title: "Library Management System",
      year: "2026",
      category: "Java & Database",
      badge: "Enterprise Java",
      shortDesc: "Comprehensive desktop and database application managing college library operations, cataloging, and student loans.",
      description:
        "Developed a system for managing books, students, borrowing, and returning records in a college library. Implemented book search, issue, return, and availability tracking functionality. Connected the Java application with MySQL using JDBC for persistent data storage.",
      tags: ["Java", "MySQL", "JDBC", "OOP", "Database Architecture"],
      highlights: [
        "Book search, issue, return, and real-time inventory availability tracking",
        "Connected Java application with MySQL using JDBC for ACID-compliant persistent storage",
        "Automated overdue tracking, return deadline management, and student borrowing records",
        "Structured with modular Object-Oriented design principles and secure SQL queries"
      ],
      color: "from-violet-500/20 to-purple-600/20",
      accent: "violet",
      github: "https://github.com/Spoorti-M-S/library-management-system",
      demo: "#"
    },
    {
      id: "weather-information-dashboard",
      title: "Weather Information Dashboard",
      year: "2026",
      category: "Web Application",
      badge: "Frontend API App",
      shortDesc: "Real-time interactive weather dashboard displaying meteorological conditions and forecasts for global locations.",
      description:
        "Developed a web dashboard for displaying weather information based on a user’s selected location. Integrated a weather API to retrieve real-time weather data and display relevant information. Created a responsive user interface with search and location-based weather display features.",
      tags: ["HTML5", "CSS3", "JavaScript", "REST API", "Responsive Design"],
      highlights: [
        "Integrated third-party Weather REST API to retrieve and visualize live weather conditions",
        "Location-based search bar supporting instant lookups for cities worldwide",
        "Visual indicators for humidity, wind velocity, atmospheric pressure, and temperature",
        "Responsive, modern layout with dynamic weather condition styling"
      ],
      color: "from-emerald-500/20 to-teal-600/20",
      accent: "emerald",
      github: "https://github.com/Spoorti-M-S/weather-information-dashboard",
      demo: "#"
    },
    {
      id: "student-result-analysis-system",
      title: "Student Result Analysis System",
      year: "2025",
      category: "Python & Data",
      badge: "Data Analysis",
      shortDesc: "Automated examination analysis system processing student marks, grade distributions, and performance statistics.",
      description:
        "Developed a Python-based application to process and analyze student examination results. Implemented calculations for total marks, percentage, grades, and subject-wise performance. Used CSV files for storing and processing student result data.",
      tags: ["Python", "CSV Data", "Data Analysis", "File I/O", "Algorithms"],
      highlights: [
        "Automated batch calculation of total marks, percentage percentages, and grade tiers",
        "Subject-wise performance breakdowns and statistical class averages",
        "Efficient file ingestion and data transformation using Python CSV parsing",
        "Clean terminal reports highlighting toppers and subject pass percentages"
      ],
      color: "from-amber-500/20 to-orange-600/20",
      accent: "amber",
      github: "https://github.com/Spoorti-M-S/student-result-analysis-system",
      demo: "#"
    }
  ],

  experience: [
    {
      role: "Student Developer / Technical Team Member",
      organization: "College Technical Activities",
      location: "Karnataka, India",
      period: "2026",
      type: "Technical Team",
      badge: "Hands-on Experience",
      description:
        "Collaborated with student teams on academic and software-development projects. Contributed to frontend development, database management, testing, documentation, and presentations. Participated in technical discussions and problem-solving activities.",
      keyContributions: [
        "Contributed to frontend development with clean, accessible, and responsive user interfaces",
        "Assisted in database schema design and relational integrity using MySQL and MongoDB",
        "Conducted testing, comprehensive code documentation, and interactive team presentations",
        "Actively engaged in technical architecture discussions and iterative problem-solving sessions"
      ],
      technologies: ["JavaScript", "React", "MySQL", "Git", "Problem Solving"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) – Information Science Engineering",
      institution: "Adichunchanagiri Institute Of Technology, VTU",
      location: "Karnataka, India",
      period: "2024 – Present",
      status: "Currently Pursuing (5th Semester)",
      badge: "Undergraduate Degree",
      description:
        "Specializing in Information Science Engineering with a focus on Software Engineering, Data Structures & Algorithms, Database Systems, Computer Networks, and Artificial Intelligence.",
      highlights: [
        "Currently pursuing 5th Semester with strong academic foundation in CS principles",
        "Active member of departmental technical workshops and coding sessions",
        "Focus on practical project building in Java, Python, and Full-Stack Web Development"
      ]
    },
    {
      degree: "Pre-University Course (PUC) – Science",
      institution: "Sri Siddaganga PU Science College",
      location: "Davanagere, Karnataka, India",
      period: "2022 – 2024",
      status: "Completed",
      badge: "Pre-University",
      description:
        "Focused on Mathematics, Physics, Chemistry, and Computer Science, building core analytical and logical thinking capabilities.",
      highlights: [
        "Strong foundation in Mathematics and fundamental algorithmic logic",
        "Early exposure to computer programming concepts"
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Kourava Education Society",
      location: "Balambeed, Karnataka, India",
      period: "2022",
      status: "Completed",
      badge: "Secondary Education",
      description:
        "Completed secondary education with comprehensive academic excellence in Science and Mathematics.",
      highlights: [
        "Graduated with foundational excellence in scientific studies"
      ]
    }
  ],

  certifications: [
    {
      title: "Java Programming Fundamentals",
      issuer: "Online Certification",
      topic: "Core Java, OOP, Collections & Exception Handling",
      icon: "Code",
      badge: "Verified",
      skillsCovered: ["Java OOP", "Class Hierarchies", "Exception Handling", "Basic Data Structures"]
    },
    {
      title: "Python Programming",
      issuer: "Online Certification",
      topic: "Python Core, Data Structures, File I/O & Functions",
      icon: "Terminal",
      badge: "Verified",
      skillsCovered: ["Python Syntax", "Lists & Dictionaries", "File Parsing", "Modular Programming"]
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Online Certification",
      topic: "Algorithmic Complexity, Searching, Sorting & Trees",
      icon: "Cpu",
      badge: "Verified",
      skillsCovered: ["Time & Space Complexity", "Recursion", "Searching/Sorting", "Graph/Tree Basics"]
    },
    {
      title: "SQL and Database Fundamentals",
      issuer: "Online Certification",
      topic: "Relational Queries, Normalization, Joins & ACID",
      icon: "Database",
      badge: "Verified",
      skillsCovered: ["DDL / DML", "Complex Joins", "Aggregation", "Relational Integrity"]
    }
  ],

  achievements: [
    {
      title: "Technical Events & Hackathons",
      category: "Competitions",
      icon: "Trophy",
      description: "Participated actively in college-level technical events, project showcases, and hackathons, collaborating under tight deadlines to prototype functional software."
    },
    {
      title: "Software Development & Problem Solving",
      category: "Engineering",
      icon: "Sparkles",
      description: "Regularly engaged in coding challenges and real-world project development to reinforce algorithmic thinking, debugging proficiency, and clean architecture."
    },
    {
      title: "Placement & Interview Preparation",
      category: "Career Milestones",
      icon: "Target",
      description: "Actively training for upcoming software engineering placement drives, rigorously preparing technical topics including Core CS, System Fundamentals, and Live Coding."
    }
  ],

  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Web Development",
    "Cloud Computing",
    "Problem Solving",
    "System Design Fundamentals"
  ]
};
