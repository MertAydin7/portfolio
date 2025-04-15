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
    date: "May 2024",
    gpa: "3.34/4.00",
    achievements: ["Dean's List: Spring 2021"]
  },
  {
    school: "Istanbul Technical University",
    college: "Faculty of Computer and Informatics",
    degree: "Bachelor of Science in Information Systems Engineering",
    date: "May 2024",
    achievements: ["Certificate of Appreciation"]
  }
];

// Skills organized by category
export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "Java", level: 75 },
    { name: "C++", level: 70 },
    { name: "C", level: 65 },
    { name: "Dart", level: 60 }
  ],
  frameworks: [
    { name: "React", level: 80 },
    { name: "AngularJS", level: 85 },
    { name: "TailwindCSS", level: 80 },
    { name: "Kivy", level: 70 },
    { name: ".NET", level: 65 }
  ],
  dataAnalysis: [
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Matplotlib", level: 80 },
    { name: "Seaborn", level: 75 },
    { name: "Plotly", level: 75 },
    { name: "SQL", level: 85 },
    { name: "MySQL", level: 80 }
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "Excel", level: 85 },
    { name: "Power BI", level: 75 },
    { name: "Tableau", level: 75 },
    { name: "MS Office", level: 85 },
    { name: "Binalyze AIR", level: 70 },
    { name: "KeygenSH", level: 65 },
    { name: "OpenCV", level: 70 }
  ]
};

// Relevant coursework
export const coursework = [
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
      "Developed Angular-based front-end solutions for the Tank Level Monitoring project",
      "Created responsive UI features using TypeScript, HTML enhancing user experience",
      "Improved data visualization and introduced a dark mode, dynamic search bar using CSS",
      "Collaborated in an Agile environment, participating in weekly sprint planning and review meetings"
    ]
  },
  {
    company: "TURK AI",
    position: "AI Intern – Python Developer",
    location: "Ankara, Turkey",
    period: "Jul 2023 – Jul 2023",
    responsibilities: [
      "Analyzed and cleaned data using Python for efficient data management",
      "Developed modular Python code, improving maintainability",
      "Evaluated data sources for reliability and usability",
      "Worked within an Agile team, participating in daily stand-ups to achieve sprint goals"
    ]
  },
  {
    company: "DIFOSE Digital Forensics Services",
    position: "Digital Forensics Intern",
    location: "Ankara, Turkey",
    period: "Jun 2023 – Jul 2023",
    responsibilities: [
      "Conducted secure software licensing with KeygenSH",
      "Enhanced software efficiency with encapsulated Python packages",
      "Performed data extraction and quality checks using Binalyze AIR"
    ]
  }
];

// Project experience
export const projects = [
  {
    title: "UI/UX Design Portfolio Showcase",
    period: "Apr 2024 – Present",
    role: "Front-End Developer",
    type: "Individual Project",
    description: "Developed a portfolio website featuring a unique three-mode design system that demonstrates the importance of balancing UI and UX in web applications.",
    achievements: [
      "Created an interactive toggle system allowing users to switch between UI-focused, UX-focused, and balanced design modes",
      "Implemented distinct visual and functional characteristics for each mode using React, TailwindCSS, and Framer Motion",
      "Built responsive layouts ensuring optimal display across all device sizes",
      "Utilized modern web development practices including component-based architecture and CSS variables"
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    category: "Web Development"
  },
  {
    title: "Basic Data Analysis and Visualization Dashboard",
    period: "May 2024 – Present",
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
    role: "Python Co-Developer",
    type: "Group Project",
    description: "Built an application to display Spotify user analytics with a visual interface.",
    achievements: [
      "Designed and implemented a Python-based app to show Spotify user's analytics using the Kivy framework",
      "Integrated spotipy and moviepy libraries for enhanced functionality",
      "Conducted unit testing and validation to ensure app reliability and performance"
    ],
    image: "https://images.unsplash.com/photo-1591254674198-a316f1cf8531?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "Kivy", "Spotipy", "Moviepy"],
    category: "Application Development"
  },
  {
    title: "Railway Reservation System",
    period: "Apr 2023 – May 2023",
    role: "Python Developer",
    type: "Individual Project",
    description: "Created a command-line system for managing railway reservations.",
    achievements: [
      "Designed and implemented a MySQL database system to manage railway reservations",
      "Developed a command-line interface for user interaction and ensured data accuracy",
      "Managed data integration and implemented error handling mechanisms"
    ],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Python", "MySQL", "CLI Development"],
    category: "Database Systems"
  },
  {
    title: "Road Line Detection",
    period: "Apr 2023 – May 2023",
    role: "Python Developer",
    type: "Individual Project",
    description: "Implemented computer vision techniques to detect road lines in images and videos.",
    achievements: [
      "Developed a road line detection system using OpenCV and computer vision techniques",
      "Implemented Canny Edge Detection and Hough Transform algorithms",
      "Enhanced detection accuracy through noise handling and performance optimization"
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
    period: "Sep 2022 – Present",
    responsibilities: [
      "Formed a community to support and connect Turkish SUNY students, got over 50 registrations in the first month",
      "Received a Certificate of Appreciation from the President of ITU in recognition of founding and successfully leading the community",
      "Hosted over 10 events including zoom events bridging SUNY students and alumni worldwide to share post-graduation career insights",
      "Actively mentoring more than 10 students and planning accommodations, and transportations for the newcomers"
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