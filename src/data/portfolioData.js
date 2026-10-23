export const portfolioData = {
  personal: {
    name: "Fiston Ngabonziza",
    badge: "BSc in IT (AUCA) • NET OPS 1 • ICT (IPRC Huye)",
    title: "IT Support Technician | IT Graduate",
    tagline: "Delivering dependable enterprise IT support, network maintenance, systems administration, and modern software solutions.",
    location: "Kigali, Rwanda",
    status: "Available for IT Support, Network & Systems Roles",
    email: "ngabofiston23@gmail.com",
    github: "https://github.com/Ngabo23",
    linkedin: "https://www.linkedin.com/in/fiston-ngabonziza-9a709b1ab/",
    summary: "Proactive IT Support Technician and Information Technology graduate with practical enterprise experience gained at NPD Ltd. Skilled in end-user support, hardware and software maintenance, printer troubleshooting, IP configuration, remote desktop assistance (AnyDesk), and server-room operations. Solid foundation in networking (NET OPS 1), operating systems (Linux/Windows), and modern software development (React, Node.js, Java, Spring Boot, PostgreSQL, MySQL)."
  },

  metrics: [
    { label: "Technical Support SLA", value: "99%+", detail: "Hardware, software & remote diagnostics" },
    { label: "Core Enterprise Projects", value: "4 Systems", detail: "Helpdesk Chatbot, Clearance, Attendance, Ops" },
    { label: "Academic Qualifications", value: "3 Levels", detail: "BSc IT (AUCA), A1 ICT (IPRC), A2 CS" },
    { label: "Workstations & Peripherals", value: "100+", detail: "Serviced, patched & network-configured" }
  ],

  education: [
    {
      id: "auca-bsc",
      degree: "Bachelor of Science in Information Technology",
      institution: "Adventist University of Central Africa (AUCA)",
      period: "2023 – 2026",
      location: "Kigali, Rwanda",
      level: "BSc Degree",
      badge: "In Progress / Final Year",
      description: "Focus on Enterprise Information Systems, Network Administration, Database Architectures, and AI-Powered Service Desk Solutions.",
      highlights: [
        "Final-Year Project: AI-Powered IT Help Desk Chatbot designed for NPD Ltd support operations",
        "Full-stack web application development: React, Node.js, and PostgreSQL",
        "Systems design, database modeling, and software engineering methodologies"
      ]
    },
    {
      id: "iprc-a1",
      degree: "Advanced Diploma (A1) in Information & Communication Technology (ICT)",
      institution: "IPRC Huye (RP)",
      period: "2018 – 2021",
      location: "Huye, Rwanda",
      level: "A1 Advanced Diploma",
      badge: "Graduated",
      description: "Hands-on technical curriculum in computer hardware maintenance, LAN installation, IP configuration, operating systems, and web programming.",
      highlights: [
        "Practical computer lab maintenance, hardware assembly, and component-level diagnostics",
        "Local Area Network (LAN) cabling, switch configuration, and IP address management",
        "Developed software applications using Java and relational databases"
      ]
    },
    {
      id: "stpeter-a2",
      degree: "Certificate of Secondary Education (A2) in Computer Science",
      institution: "St. Peter College of Shyogwe",
      period: "2015 – 2017",
      location: "Muhanga, Rwanda",
      level: "A2 Certificate",
      badge: "Graduated",
      description: "Foundational computer science, algorithmic reasoning, software basics, office productivity tools, and computer repair fundamentals.",
      highlights: [
        "Algorithms and logic programming basics in C and Pascal",
        "Computer maintenance fundamentals and basic operating system setup"
      ]
    }
  ],

  certifications: [
    {
      id: "netops-1",
      name: "NET OPS 1 Certificate",
      issuer: "Network Operations Program",
      badgeIcon: "Network",
      code: "NETOPS-1-CERT",
      date: "Certified",
      status: "Active & Verified",
      color: "from-blue-600 to-cyan-500",
      description: "Practical network operations training covering TCP/IP protocol stack, IPv4 subnetting and assignment, router/switch connectivity, patch cabling, and structured network troubleshooting."
    },
    {
      id: "giz-risa",
      name: "Code and Design Camp Certificate",
      issuer: "GIZ (German Development Agency) & RISA (Rwanda Information Society Authority)",
      badgeIcon: "Award",
      code: "GIZ-RISA-2019",
      date: "2019",
      status: "Accredited",
      color: "from-emerald-500 to-teal-600",
      description: "Rigorous technology camp organized by GIZ and RISA covering modern software engineering best practices, UI/UX design, collaborative version control with Git, and digital solutions."
    }
  ],

  skillCategories: [
    {
      id: "it-support",
      name: "IT Support & System Maintenance",
      icon: "ShieldCheck",
      summary: "End-user support, hardware diagnostics, OS deployment, and peripheral maintenance.",
      skills: [
        { name: "Hardware & PC Troubleshooting", level: 95, desc: "Diagnosing motherboards, power supplies, RAM, SSD/HDD replacement, and preventative maintenance" },
        { name: "OS Installation & Configuration", level: 95, desc: "Clean installs, imaging, driver configuration for Windows 10/11 and Linux environments" },
        { name: "Printer Setup & Maintenance", level: 92, desc: "Network shared printers, local USB setup, spooler troubleshooting, toner replacement, and driver fixes" },
        { name: "Remote Desktop Support (AnyDesk)", level: 95, desc: "Quick-response remote troubleshooting for branch and remote employees using AnyDesk and TeamViewer" },
        { name: "Server-Room Routine Operations", level: 85, desc: "Rack organization, cable management, server power health checks, and environment monitoring" },
        { name: "Email & User Account Setup", level: 90, desc: "Provisioning employee email accounts, Outlook/Thunderbird client setup, and credentials onboarding" }
      ]
    },
    {
      id: "networking",
      name: "Networking & Systems Administration",
      icon: "Network",
      summary: "LAN setup, IP addressing, structured cabling, and Linux/Windows administration.",
      skills: [
        { name: "IP Configuration & Subnetting", level: 92, desc: "IPv4 static assignment, DHCP pool management, default gateways, and DNS settings" },
        { name: "Network Maintenance & Cabling", level: 90, desc: "CAT5e/CAT6 crimping, patch panel punching, switch port testing, and link connectivity verification" },
        { name: "Linux System Administration", level: 86, desc: "Linux CLI navigation, file permissions, shell commands, package management, and basic services" },
        { name: "Basic Server Administration", level: 84, desc: "Active Directory basics, file share permissions, backup checks, and local server administration" },
        { name: "Network Troubleshooting Tools", level: 90, desc: "Ping, Traceroute, Ipconfig/Ifconfig, Netstat, Wireshark, cable testers" }
      ]
    },
    {
      id: "programming",
      name: "Programming & Web Development",
      icon: "Terminal",
      summary: "Building web applications, backend services, and automated workflow solutions.",
      skills: [
        { name: "JavaScript & React.js", level: 88, desc: "Component architecture, hooks, responsive modern UI creation, and RESTful API integration" },
        { name: "Node.js & Express", level: 85, desc: "REST API endpoints, backend business logic, asynchronous operations, and middleware" },
        { name: "Java & Spring Boot", level: 84, desc: "Object-oriented software development, enterprise attendance logic, and MVC architecture" },
        { name: "PHP & C", level: 80, desc: "Web scripting, server-side data processing, algorithmic programming, and systems fundamentals" },
        { name: "HTML5, CSS3 & Tailwind CSS", level: 92, desc: "Semantic markup, flexbox/grid layouts, responsive mobile-friendly styling, and animations" }
      ]
    },
    {
      id: "databases-tools",
      name: "Databases, Tools & Version Control",
      icon: "Activity",
      summary: "Relational data management, Git repositories, and development toolchains.",
      skills: [
        { name: "PostgreSQL", level: 88, desc: "Relational database schema design, queries, student clearance tables, and data integrity" },
        { name: "MySQL", level: 86, desc: "Database modeling, CRUD operations, wage management tables, and SQL scripting" },
        { name: "Git & GitHub", level: 90, desc: "Version control, branching, committing, pull requests, repository management (github.com/Ngabo23)" },
        { name: "VS Code & Development Tools", level: 92, desc: "IDE customization, extensions, debugging, terminal integration, and Postman API testing" }
      ]
    }
  ],

  projects: [
    {
      id: "helpdesk-chatbot",
      title: "AI-Powered IT Help Desk Chatbot (NPD Ltd Concept)",
      category: "AI & IT Service Management",
      featured: true,
      timeframe: "Final-Year Project (AUCA)",
      role: "Lead Systems Designer & Researcher",
      summary: "Designed an intelligent IT help desk chatbot concept modeled on NPD Ltd's technical support operations. The system automates first-level troubleshooting, ticket logging, issue escalation, and IT analytics.",
      impact: [
        "Automated first-level troubleshooting for frequent printer, network, and password issues",
        "Streamlined ticket creation and tracking with automatic priority routing",
        "Integrated searchable IT knowledge base reducing repetitive calls to IT staff",
        "Real-time analytics dashboard monitoring support ticket resolution velocity"
      ],
      technologies: ["AI Chatbot Engine", "React", "Node.js", "Knowledge Base API", "Ticketing Workflow", "PostgreSQL"],
      topologySummary: "End-user web/mobile interface connected via REST APIs to a NLP classification engine, knowledge base, and escalation dispatcher to IT technicians.",
      highlights: [
        "Engineered rule-based and conversational workflows for common enterprise IT issues (e.g. printer spooler, network disconnection, email config).",
        "Modeled real-world IT support workflows observed during professional internship at NPD Ltd."
      ]
    },
    {
      id: "student-clearance",
      title: "Digital Student Clearance Web System",
      category: "Web & Workflow Automation",
      featured: true,
      timeframe: "Software Development Project",
      role: "Full-Stack Developer",
      summary: "Engineered a web-based student clearance system built with React, Node.js, and PostgreSQL. Digitize and streamlines university clearance across academic, finance, library, and dean departments.",
      impact: [
        "Replaced slow, manual paper sign-offs with an instantaneous digital clearance trail",
        "Recorded immutable verification decisions and departmental audit logs",
        "Provided transparent real-time status tracking for graduating students"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS", "JWT Authentication"],
      topologySummary: "Responsive React frontend communicating with Node.js REST API layer, interacting with PostgreSQL relational tables for multi-department approvals.",
      highlights: [
        "Created role-based authentication allowing department heads to review, approve, or reject student clearance with detailed notes.",
        "Implemented database schema constraints ensuring all prerequisite approvals are verified before final clearance generation."
      ]
    },
    {
      id: "labour-attendance",
      title: "Labour Attendance & Wage Management Application",
      category: "Enterprise Software Development",
      featured: true,
      timeframe: "Core Systems Project",
      role: "Java & Database Developer",
      summary: "Developed a desktop and web-compatible workforce management solution using Java, MySQL, and Spring Boot to track daily worker attendance, work shifts, and wage disbursements.",
      impact: [
        "Automated daily check-in/check-out logs eliminating manual paper muster rolls",
        "Calculated daily and monthly wage disbursements based on role rates and hours",
        "Generated exportable managerial payroll and attendance summary reports"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "JDBC / Hibernate", "Reporting Engine", "OOP"],
      topologySummary: "Java/Spring application layer handling business calculation logic backed by a normalized MySQL relational database.",
      highlights: [
        "Built automated overtime and deduction calculation algorithms ensuring accurate payroll disbursements.",
        "Created user-friendly reporting screens for management auditing and employee attendance history."
      ]
    },
    {
      id: "npd-it-support",
      title: "Enterprise IT Support & Infrastructure Maintenance",
      category: "IT Support & Network Operations",
      featured: false,
      timeframe: "2025 (NPD Ltd Internship)",
      role: "IT Support Technician Intern",
      summary: "Delivered hands-on hardware/software maintenance, network support, and end-user assistance across NPD Ltd's corporate and site operations.",
      impact: [
        "Serviced 100+ office workstations, laptops, and networked printers with 99%+ resolution rate",
        "Assisted in configuring IP assignments and physical patch panel connections",
        "Provided rapid remote desktop support using AnyDesk to minimize employee downtime"
      ],
      technologies: ["AnyDesk Remote Tool", "Hardware Diagnostics", "IP Configuration", "Printer Troubleshooting", "Windows/Linux OS", "Server Room"],
      topologySummary: "Enterprise corporate network with distributed office workstations, shared network printers, patch panels, and centralized server-room infrastructure.",
      highlights: [
        "Performed OS installations, data backups, and employee business email configurations for new staff.",
        "Conducted routine physical server room checks, power backup inspections, and rack cabling maintenance."
      ]
    }
  ],

  experience: [
    {
      role: "IT Support Technician Intern",
      company: "NPD Ltd",
      period: "2025",
      location: "Kigali, Rwanda",
      responsibilities: [
        "Provided daily technical support for hardware and software issues across corporate workstations, laptops, and peripheral devices.",
        "Conducted component-level hardware diagnostics, RAM/storage replacements, and preventative maintenance cleaning.",
        "Configured and maintained enterprise network printers, local USB connections, and resolved print queue/spooler errors.",
        "Delivered prompt remote technical assistance to offsite and department staff using AnyDesk.",
        "Assisted in IP address assignment, Ethernet cabling, patch panel connections, and basic server-room operational tasks.",
        "Installed and deployed Windows and Linux operating systems, device drivers, and configured employee business email accounts."
      ]
    },
    {
      role: "IT & Systems Development Lead (Academic & Solutions)",
      company: "AUCA & IPRC Technical Projects",
      period: "2021 – 2026",
      location: "Kigali / Huye, Rwanda",
      responsibilities: [
        "Researched and conceptualized an AI-powered IT Help Desk Chatbot tailored for enterprise operational support at NPD Ltd.",
        "Engineered the full-stack web-based Student Clearance System using React.js, Node.js, and PostgreSQL.",
        "Developed the Labour Attendance and Wage Management application using Java, Spring Boot, and MySQL.",
        "Maintained collaborative Git code repositories, technical documentation, and system architecture schemas."
      ]
    }
  ],

  topologyNodes: [
    { id: "isp-gateway", name: "Kigali ISP Fiber Gateway", category: "Internet Transit", type: "cloud", model: "Enterprise Fiber Uplink", ip: "197.243.10.1", os: "Carrier Gateway", protocols: ["DHCP", "DNS (8.8.8.8)", "NAT"], speed: "100 Mbps Dedicated", mtu: 1500, status: "optimal", cpu: "12%", activeRoutes: "Default Route 0.0.0.0/0", details: "High-speed enterprise internet connection delivering connectivity to office workstations, servers, and remote support gateways.", x: 10, y: 20 },
    { id: "core-switch", name: "Core Switch & Patch Panel", category: "Network Distribution", type: "router", model: "Managed 24-Port Gigabit Switch", ip: "192.168.1.1", os: "Switch Management OS", protocols: ["VLANs", "DHCP Snooping", "802.1Q"], speed: "24x 1 Gbps Gigabit", mtu: 1500, status: "optimal", cpu: "18%", activeRoutes: "Subnet 192.168.1.0/24 (VLAN 10)", details: "Central switching and patch panel distribution connecting office floor ports, network printers, and server room equipment.", x: 38, y: 20 },
    { id: "server-room", name: "NPD Server Room & Services", category: "Infrastructure & Server", type: "spine", model: "Enterprise Rack Server & Storage", ip: "192.168.1.10", os: "Linux / Windows Server", protocols: ["SMB/NFS", "DNS", "Email (SMTP/IMAP)", "SSH"], speed: "2x 1 Gbps LACP", mtu: 1500, status: "optimal", cpu: "28%", activeRoutes: "Employee Mail & File Storage Services", details: "Houses on-premise business services, local network backups, employee email routing, and centralized database storage.", x: 65, y: 20 },
    { id: "cloud-helpdesk", name: "AI Helpdesk Chatbot Hub", category: "Service Desk Platform", type: "cloud", model: "Web & NLP Helpdesk Server", ip: "192.168.1.50:5000", os: "Node.js / React Service", protocols: ["HTTPS", "REST API", "PostgreSQL", "WebSocket"], speed: "1 Gbps Uplink", mtu: 1500, status: "optimal", cpu: "15%", activeRoutes: "Chatbot NLP & Ticket Dispatch API", details: "Automated IT Help Desk Chatbot system handling tier-1 troubleshooting, automated ticket generation, and IT analytics.", x: 90, y: 20 },
    { id: "printers-lan", name: "Networked Printers & Scanners", category: "Peripherals & Fleet", type: "lan", model: "Enterprise Multifunction Network Printers", ip: "192.168.1.200 - .210 (Static)", os: "Embedded Print OS", protocols: ["RAW 9100", "IPP", "SNMP v2", "LPR"], speed: "100 Mbps Ethernet", mtu: 1500, status: "optimal", cpu: "Normal", activeRoutes: "Static IP Print Spooler Pool", details: "Network printers mapped to all departments with static IP reservations, monitored for toner levels and spooler queue health.", x: 65, y: 75 },
    { id: "workstations", name: "User Workstations & Laptops", category: "End-User Fleet", type: "lan", model: "Dell / HP PCs (Win 11 & Linux)", ip: "192.168.1.100 - .199 (DHCP)", os: "Windows 10/11 & Ubuntu", protocols: ["AnyDesk Remote", "DHCP", "DNS", "Outlook/IMAP"], speed: "Gigabit Ethernet & WiFi", mtu: 1500, status: "optimal", cpu: "Normal", activeRoutes: "Active Clients: 100+ Endpoints", details: "Enterprise user fleet receiving daily IT support, software maintenance, remote AnyDesk troubleshooting, and secure network access.", x: 25, y: 75 }
  ]
};
