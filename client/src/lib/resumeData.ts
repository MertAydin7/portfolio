// Resume data file for portfolio site

// Personal information
export const personalInfo = {
  name: "Bugra Mert Aydin",
  location: "Binghamton, NY",
  email: "baydin2@binghamton.edu",
  phone: "(707) 913 8386",
  linkedin: "linkedin.com/in/b-mert-aydin",
  title: "Software Developer",
  summary: "Computer Science graduate with experience in front-end development, data analysis, and digital forensics. Skilled in creating responsive user interfaces and data visualization solutions. Strong leadership background with a passion for problem-solving and community building."
};

// Education information
export const education = [
  {
    school: "Binghamton University, State University of New York",
    college: "Thomas J. Watson College of Engineering and Applied Science",
    degree: "Bachelor of Science in Computer Science",
    date: "Aug 2020 - May 2024",
    gpa: "3.34/4.00",
    achievements: ["Dean's List: Spring 2021"]
  },
  {
    school: "Istanbul Technical University",
    college: "Faculty of Computer and Informatics",
    degree: "Bachelor of Science in Information Systems Engineering",
    date: "Sep 2018 - May 2024",
    achievements: ["Certificate of Appreciation"]
  }
];

// Skills organized by category
export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 85 },
    { name: "SQL", level: 85 },
    { name: "HTML/CSS", level: 85 },
    { name: "C++", level: 70 },
    { name: "C", level: 65 },
    { name: "Dart", level: 60 }
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "AngularJS", level: 85 },
    { name: "Node.js", level: 80},
    { name: "Express", level: 80 },
    { name: "TailwindCSS", level: 85 },
    { name: "Kivy", level: 75 },
    { name: ".NET", level: 70 }
  ],
  dataAnalysis: [
    { name: "MySQL", level: 85 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Matplotlib", level: 80 },
    { name: "Plotly", level: 75 },
    { name: "SQL", level: 85 },
    
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "Vite", level: 80 },
    { name: "Framer Motion", level: 80 },
    { name: "Excel", level: 85 },
    { name: "MS Office", level: 85 },
    { name: "Binalyze AIR", level: 70 },
    { name: "KeygenSH", level: 75 },
    { name: "OpenCV", level: 70 }
  ]
};

// Relevant coursework
export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "IT Systems Analysis and Design",
  "Data Mining",
  "Human Computer Interaction", 
  "Probability and Statistical Methods", 
  "Software Engineering & Project Management"
];

// Professional experience
export const workExperience = [
  {
    company: "Mirabito Energy Products",
    position: "Front-End Developer – Internship",
    location: "New York, US",
    period: "Aug 2023 – May 2024",
    responsibilities: [
      "Developed and maintained responsive web applications using Angular and TypeScript",
      "Created and enhanced user interfaces with HTML, CSS, and JavaScript to improve user experience and engagement",
      "Implemented detailed data visualizations for business intelligence solutions, utilizing SVG and Angular animations",
      "Collaborated in an agile environment, participating in daily stand-ups and sprint meetings"
    ]
  },
  {
    company: "TURK AI",
    position: "AI Intern – Python Developer",
    location: "Ankara, Turkey",
    period: "Jul 2023 – Jul 2023",
    responsibilities: [
      "Analyzed, cleaned, and interpreted data using Python, ensuring efficient data management and manipulation for applications",
      "Supported the development of modular and organized code using Python modules, enhancing code maintainability and reusability",
      "Evaluated data sources for reliability and usability, contributing to improved performance and data quality"
    ]
  },
  {
    company: "DIFOSE Digital Forensics Services",
    position: "Digital Forensics Intern",
    location: "Ankara, Turkey",
    period: "Jun 2023 – Jul 2023",
    responsibilities: [
      "Conducted secure software licensing with KeygenSH, supporting controlled software product distribution",
      "Improved software efficiency through Python encapsulated packages, enhancing code modularity and reusability",
      "Evaluated data sources and performed in-depth research on RFC3161 standards to implement secure digital data timestamping"
    ]
  }
];

// Project experience
export const projects = [
  {
    title: "Adaptive Portfolio Website with Multi-Mode UI/UX Design System",
    period: "Apr 2025 – Present",
    role: "Full Stack Developer",
    type: "Individual Project",
    description: "Engineered a React-based frontend using TypeScript and TailwindCSS with a component-based architecture.",
    achievements: [
      "Implemented a unique three-mode design system showcasing different approaches to UI/UX design",
      "Created reusable UI components and custom hooks for enhanced code maintainability",
      "Built responsive layouts ensuring optimal display across all device sizes using modern CSS techniques",
      "Integrated dynamic routing and state management for seamless user experience",
      "Git version control, automated build scripts (npm, esbuild, vite), and cloud deployment via Render simulating CI/CD workflows"
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    category: "Web Development"
  },
  {
    title: "Basic Data Analysis and Visualization Dashboard",
    period: "May 2024 – Sep 2024",
    role: "Python Developer",
    type: "Individual Project",
    description: "Created an interactive dashboard for data analysis and visualization.",
    achievements: [
      "Simulated data collection and cleaned/preprocessed data using Python (Pandas)",
      "Performed exploratory data analysis to identify trends, patterns, and correlations",
      "Created interactive visualizations using Plotly and developed a Dash application to enable user interaction with data"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "Pandas", "Plotly", "Dash"],
    category: "Data Analysis"
  },
  {
    title: "Time-Series Data Clustering using Modified K-means",
    period: "Jan 2024 – May 2024",
    role: "Python Developer",
    type: "Individual Project",
    description: "Developed a clustering algorithm for time-series data analysis.",
    achievements: [
      "Developed a Python application to cluster time-series data using a modified K-means algorithm",
      "Analyzed a dataset of 600 control charts to identify trends and patterns",
      "Utilized Pandas for data manipulation and Matplotlib for data visualization"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "Pandas", "Matplotlib", "K-means Algorithm"],
    category: "Data Science"
  },
  {
    title: "Spotify Wrapper App",
    period: "Jul 2023 – Aug 2023",
    role: "Full Stack Developer",
    type: "Group Project",
    description: "Designed and implemented a Python-based app to show Spotify user's analytics using the Kivy framework.",
    achievements: [
      "Built responsive design and interactive buttons for toggling tracking data",
      "Conducted unit testing and validation using the unittest framework",
      "Implemented secure data integration with Spotify API"
    ],
    image: "https://images.unsplash.com/photo-1591254674198-a316f1cf8531?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "Kivy", "Unittest", "Spotify API"],
    category: "Application Development"
  },
  {
    title: "Railway Reservation System",
    period: "Jan 2023 – May 2023",
    role: "Python Developer",
    type: "Individual Project",
    description: "Designed and implemented a relational database system using MySQL to manage railway reservations.",
    achievements: [
      "Developed a command-line interface (CLI) for user interaction",
      "Implemented error handling mechanisms to secure data accuracy",
      "Designed and managed relational database structure"
    ],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "MySQL", "CLI Development"],
    category: "Database Systems"
  },
  {
    title: "Road Line Detection",
    period: "Jan 2023 – May 2023",
    role: "Python Developer",
    type: "Individual Project",
    description: "Developed a road line detection system using OpenCV and computer vision techniques.",
    achievements: [
      "Implemented Canny Edge Detection and Hough Transform algorithms",
      "Optimized performance by fine tuning parameters",
      "Tested with over 500 images from Kaggle's dataset"
    ],
    image: "https://images.unsplash.com/photo-1502740479091-635887520276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    category: "Computer Vision"
  }
];

// Leadership experience
export const leadership = [
  {
    organization: "ITU-BINGO Community",
    position: "Founder and President",
    location: "Istanbul, Turkey",
    period: "Sep 2022 – Jan 2025",
    responsibilities: [
      "Formed a community to support and connect Turkish SUNY students, got over 50 registrations in the first month",
      "Received a Certificate of Appreciation from the President of ITU in recognition of founding and successfully leading the community",
      "Hosted over 10 events bridging SUNY students and alumni worldwide to share post-graduation career insights",
      "Mentored more than 5 students, managed their accommodations and transportations before arrival to US"
    ]
  }
];

// Volunteering experience
export const volunteering = [
  {
    organization: "ITU Dance Club",
    position: "Dance Assistant",
    location: "Istanbul, Turkey",
    period: "Sep 2022 – May 2023"
  },
  {
    organization: "TURK 112 class at Binghamton University",
    position: "Volunteer Assistant",
    location: "New York, US",
    period: "Feb 2022 – Jun 2022"
  },
  {
    organization: "ESL Conversation Pairs Program",
    position: "Language Partner",
    location: "New York, US",
    period: "Aug 2021 – Dec 2021"
  }
];
