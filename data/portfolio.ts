export const profile = {
  name: "Niyati Sharma",
  monogram: "NS",
  role: "Statistician · Data Analyst",
  tagline: "Aspiring Data Scientist",
  location: "Bengaluru, India",
  email: "sharmaniyati1010@gmail.com",
  phone: "9599412618",
  linkedin: "https://linkedin.com/in/niya-sh",
  linkedinLabel: "linkedin/in/niya-sh",
};

export const stats = [
  { value: "8.42", label: "B.Sc CGPA · DU" },
  { value: "8.1", label: "M.Sc SGPA · Pondicherry" },
  { value: "4", label: "Analytical Projects" },
  { value: "10+", label: "Tools & Frameworks" },
];

export const education = [
  {
    degree: "M.Sc. Statistics",
    school: "Pondicherry University",
    period: "2024 – May 2026",
    result: "8.1 SGPA",
  },
  {
    degree: "B.Sc. (Hons.) Statistics",
    school: "Shaheed Rajguru College, University of Delhi",
    period: "2023",
    result: "8.42 CGPA",
  },
  {
    degree: "AISSCE — Science + Economics",
    school: "Rajkiya Pratibha Vikas Vidyalaya, Delhi",
    period: "2020",
    result: "93.5%",
  },
  {
    degree: "AISSE",
    school: "Rajkiya Pratibha Vikas Vidyalaya, Delhi",
    period: "2018",
    result: "91.8%",
  },
];

export const projects = [
  {
    no: "01",
    title: "Spatial & Predictive Analysis of Air Pollution",
    subtitle: "Case Study Report · Geospatial + ML",
    date: "April 2026",
    tags: ["Python", "GeoPandas", "XGBoost", "Spatial Statistics"],
    points: [
      "Analysed monthly AQI data (2015–2023) for 10 Indian cities using spatial statistics and time-series modelling.",
      "Applied Moran's I, LISA cluster analysis, and spatial lag modelling to map dependence and hotspots.",
      "Engineered lags, rolling means and seasonality; built hybrid XGBoost models for PM2.5 prediction.",
    ],
  },
  {
    no: "02",
    title: "Search Engine Analysis",
    subtitle: "End-to-end Data Analytics Pipeline",
    date: "Dec 2025",
    tags: ["Python", "Google Colab", "EDA", "Visualization"],
    points: [
      "Built an end-to-end search analytics pipeline to study keyword performance.",
      "Cleaned and standardised raw search data for downstream analysis and reporting.",
      "Surfaced high-performing keywords and emerging trends through statistics and visualisation.",
    ],
  },
  {
    no: "03",
    title: "Forecasting Stock Markets Using Markov Models",
    subtitle: "S&P 500 Transition Analysis",
    date: "Apr 2025",
    tags: ["R", "RStudio", "MarkovChain"],
    points: [
      "Modelled S&P 500 movements as Increase / Decrease / Same Markov states.",
      "Found momentum: P(Increase | Increase) ≈ 54.34%.",
      "Found recovery: P(Increase | Decrease) ≈ 50.17%.",
    ],
  },
  {
    no: "04",
    title: "Mental Health of Medical Students",
    subtitle: "Regression & Survey Analytics",
    date: "Nov 2024",
    tags: ["R", "RStudio", "Regression"],
    points: [
      "Analysed demographic, academic and psychological factors influencing mental health.",
      "Regression highlighted empathy, anxiety and depression effects.",
    ],
  },
];

export const experience = [
  {
    role: "Business Development Executive Intern",
    org: "LaunchED Global, Bengaluru",
    period: "July 2026 – Present",
    points: [
      "Counsel prospective students on career pathways through 1:1 consultations.",
      "Engage leads via outbound calls, diagnose learning needs, convert to enrolments.",
      "Build client relationships by communicating course benefits and resolving queries.",
    ],
  },
  {
    role: 'Training on "Official Statistics"',
    org: "National Statistical Systems Training Academy, Greater Noida",
    period: "29 Dec 2025 – 2 Jan 2026",
    points: [
      "Studied Official Statistics and the structure of the Ministry.",
      "Learned survey design, SDGs in national growth, and National Accounts statistics.",
    ],
  },
  {
    role: "AI & Decentralized Intern",
    org: "Blockseblock",
    period: "Aug – Sept 2025",
    points: [
      "Built a mini AI agent that automates Exploratory Data Analysis on any dataset.",
      "Contributed to modules in AI and decentralised applications.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "Python", "R", "SQL", "HTML"],
  },
  {
    title: "ML & Analysis",
    skills: ["TensorFlow", "Scikit-learn", "SPSS", "Microsoft Excel"],
  },
  {
    title: "Visualisation",
    skills: ["Tableau", "Power BI"],
  },
];

export const certifications = [
  { title: "McKinsey.org Forward Program", date: "Jan 2026" },
  { title: "BCG Data Science Job Simulation — Forage", date: "2025" },
  { title: "NPTEL: Marketing & Research Analysis, IIT Roorkee — 82%", date: "Dec 2025" },
];

export const leadership = [
  { title: "Class Representative, M.Sc. Statistics", date: "2024 – Apr 2026" },
  {
    title: "President, Student Council — Dept. of Statistics, SRCASW, DU",
    date: "2022 – 2023",
  },
];
