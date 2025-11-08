import { LuBrain } from "react-icons/lu";
import { LuCode } from "react-icons/lu";
import { LuTerminal } from "react-icons/lu";
import { LuSquareTerminal } from "react-icons/lu";
import { LuCloud } from "react-icons/lu";
import { LuClipboard } from "react-icons/lu";
import { LuSquareCode } from "react-icons/lu";

// Activities
import act1 from "../assets/images/activity1.png";
import act2 from "../assets/images/activity2.png";

// Projects
import P1 from "../assets/images/project1alt.png";
import P2 from "../assets/images/project2alt.png";
import P3 from "../assets/images/project3alt.png";
import P4 from "../assets/images/project4.jpeg";
import P5 from "../assets/images/project5.webp";
import P6 from "../assets/images/project6.jpeg";
import P7 from "../assets/images/project7.jpeg";
import P8 from "../assets/images/project8.jpeg";
import P9 from "../assets/images/project9.jpeg";
import P10 from "../assets/images/project10.jpeg";
import P11 from "../assets/images/project11.jpeg";

// Certifications
import cert1 from "../assets/images/dataAnalytics.png";
import cert2 from "../assets/images/dataEngineer.png";
import cert3 from "../assets/images/solutionsArchitect.png";
import cert4 from "../assets/images/aiPractitioner.png";
import svgCert from "../assets/images/svgCertificate.svg";

// PROFILE
export const PROFILE = [
  {
    name: "Aditi Patil Raman",
    place: "United States",
    tag1: "Data Engineer",
    tag2: "AI/ML & GenAI Enthusiast",
    tag3: "3x AWS Certified",
    tagline: "Exploring Data, Intelligence, and Scalable Cloud Solutions",
  },
];

// SOCIALS
export const SOCIAL_LINKS = [
  {
    github: "https://github.com/aditirpatil11",
    linkedin: "https://www.linkedin.com/in/aditi-patil-raman-452199248/",
  },
];

// NAVBAR_LINKS - For Navbar Only
export const NAVBAR_LINKS = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/skills" },
  { name: "Experience", link: "/experience" },
  { name: "Certifications", link: "/certifications" },
  { name: "Publications", link: "/publications" },
];

// NAVIGATION LINKS - For Mobile Nav & Footer
export const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/skills" },
  { name: "Experience", link: "/experience" },
  { name: "Certifications", link: "/certifications" },
  { name: "Publications", link: "/publications" },
  { name: "Contact", link: "/contact" },
];

// SKILLS
export const SKILLS = [
  {
    logo: LuBrain,
    name: "AI & Machine Learning",
    skills: [
      "Regression & Classification Models",
      "Ensemble Methods",
      "Random Forest, XGBoost",
      "Neural Networks",
      "TensorFlow, PyTorch, LSTM",
      "NLP & LLMs",
      "LangChain, OpenAI API, RAG",
      "Prompt Engineering",
      "Time Series Forecasting",
      "Feature Engineering",
      "Model Evaluation",
      "PyCaret",
      "SHAP",
    ],
  },
  {
    logo: LuCode,
    name: "Programming & Scripting",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "R Programming",
    ],
  },
  {
    logo: LuTerminal,
    name: "Data Engineering & Warehousing",
    skills: [
      "ETL Pipelines",
      "Data Cleaning & Transformation",
      "Data Modeling",
      "Snowflake",
      "PostgreSQL",
    ],
  },
  {
    logo: LuSquareTerminal,
    name: "Big Data & Streaming",
    skills: ["Apache Kafka", "Hadoop", "Spark", "AWS EMR"],
  },
  {
    logo: LuCloud,
    name: "Cloud Platforms & Services",
    skills: [
      "AWS",
      "Redshift",
      "Glue",
      "S3",
      "EC2",
      "Lambda",
      "Athena",
      "IAM",
      "CloudWatch",
      "CloudFormation",
      "Google Cloud Platform",
    ],
  },
  {
    logo: LuClipboard,
    name: "Visualization & Reporting",
    skills: [
      "Tableau",
      "Power BI",
      "Looker Studio",
      "Amazon QuickSight",
      "Streamlit",
    ],
  },
  {
    logo: LuSquareCode,
    name: "Tools & Frameworks",
    skills: [
      "Flask",
      "FAISS",
      "Hugging Face",
      "DBT",
      "Apache Airflow",
      "Jupyter Notebook",
      "Git/GitHub",
      "Docker",
    ],
  },
];

// PROFESSIONAL SUMMARY
export const PRO_SUMMARY = [
  {
    id: 1,
    line: "I'm Aditi Patil Raman, a Data Engineer and AI/ML Enthusiast passionate about exploring how data, intelligence, and cloud technologies can come together to build scalable and impactful systems. My work focuses on transforming raw data into meaningful insights through machine learning, data engineering, and GenAI-driven applications.",
  },
  {
    id: 2,
    line: "At UNC Charlotte, I designed and automated ETL workflows using AWS Glue and Redshift, developed SQL data models, and created Tableau dashboards that delivered actionable insights to academic departments. During my time at Bharat Electronics Limited, I enhanced data reliability and efficiency by implementing Python-based transformations and SQL automation for fault analysis.",
  },
  {
    id: 3,
    line: "I've also built projects like PredictWise, an AI-powered retail forecasting system using PySpark, XGBoost, and LSTM, and GenQuery, an LLM-based SQL interpreter using LangChain, FAISS, and GPT-4 , blending my interests in AI innovation and data architecture.",
  },
  {
    id: 4,
    line: "Curious by nature, I'm always learning and experimenting with new technologies that connect data engineering, AI, and cloud ecosystems. Beyond my professional pursuits, I love dancing and exploring new places, which inspire creativity and balance in my journey of continuous growth.",
  },
];

// EDUCATION
export const EDUCATION = [
  {
    id: 1,
    study: "Master of Science",
    major: "Information Technology",
    uni: "University of North Carolina Charlotte",
    timeline: "Aug 2023 - May 2025",
    coursework:
      "Business Intelligence and Analytics, Knowledge Based Systems, Applied databases, Artificial Intelligence.",
    gradeType: "GPA",
    grade: "3.8/4.0",
  },
  {
    id: 2,
    study: "Bachelor of Engineering",
    major: "Computer Science",
    uni: "Visvesvaraya Technological University",
    timeline: "Jul 2019 - Jun 2023",
    coursework:
      "Database Management Systems, Big Data Analytics, Data Mining, Visual Analytics, Machine Learning.",
    gradeType: "CGPA",
    grade: "8.5/10",
  },
];

// ACTIVITIES
export const ACTIVITIES = [
  {
    id: 1,
    imgSrc: act1,
    title: "Rotaract Club",
    designation: "Program Co-Ordinator",
    timeline: "Jan 2021 - April 2023",
    content:
      "During my undergraduate studies, I actively contributed to community service projects, organizing blood donation camps and essential distribution drives. I designed impactful posters using Figma to raise awareness and boost participation for these initiatives. Additionally, I secured resources, recruited and managed volunteers, and ensured the smooth execution of events from set-up to completion. I was responsible for managing timelines, budgets, and resources, resulting in successful and meaningful outcomes. By effectively communicating project goals to club members and volunteers, I fostered strong engagement and collaboration throughout these initiatives.",
  },
  {
    id: 2,
    imgSrc: act2,
    title: "Yuva Spark - NGO",
    designation: "Educational Technology Implementation Volunteer",
    timeline: "Oct 2022 - April 2023",
    content:
      "As an Educational Technology Implementation Volunteer, I contributed to the introduction of interactive Smart Class technology in rural schools, creating modern learning environments for underprivileged students. I conducted training workshops to equip instructors with the skills to effectively use Smart Class tools, while also collaborating with them on course materials and lesson plans. Additionally, I worked closely with NGOs to develop tailored digital content that aligned with the unique needs of rural students, enhancing their overall learning experience through educational technology integration.",
  },
];

// FEATURED PROJECTS
export const FEATURED_PROJECTS = [
  {
    id: 3,
    featured: true,
    imgSrc: P3,
    name: "Health Insurance Cost Prediction",
    desc: "Developed a predictive ML model to estimate individual medical insurance charges using demographic and lifestyle data such as age, BMI, smoking status, and region. Implemented data preprocessing with one-hot encoding, performed exploratory data analysis (EDA) to identify key drivers, and compared Linear vs Polynomial Regression models. Achieved an R² improvement from 0.78 to 0.86 and reduced MAE from 4284 to 2599 by applying feature optimization and non-linear transformations.",
    techstack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "Google Colab",
      "Regression Analysis",
      "Data Visualization",
    ],
    githublink:
      "https://github.com/aditirpatil11/Health-Insurance-Cost-Prediction",
    // livedemo: "",
  },
  {
    id: 5,
    featured: true,
    imgSrc: P5,
    name: "Real-Time Event Streaming Pipeline for E-Commerce",
    desc: "Built a real-time event processing pipeline using Apache Kafka and AWS services to track and analyze customer interactions on an e-commerce platform. Python simulated user events streamed through Kafka running on EC2 and processed via AWS Lambda. AWS Glue cataloged structured data stored in S3, and Athena queries provided analytical insights on customer behavior and product trends.",
    techstack: [
      "Apache Kafka",
      "Python",
      "AWS EC2",
      "AWS Lambda",
      "AWS Glue",
      "Amazon S3",
      "AWS Athena",
      "Real-Time Data Processing",
      "Cloud Computing",
    ],
    // githublink: "",
    // livedemo: "",
  },
  {
    id: 4,
    featured: true,
    imgSrc: P4,
    name: "Predictive Employee Turnover Analysis",
    desc: "Implemented a data pipeline in Google BigQuery for analyzing employee turnover and predicting attrition risks. Connected Google Colab to BigQuery for data manipulation and model training. Used PyCaret's AutoML capabilities to train a Random Forest classifier, identifying employees most likely to leave. Results were visualized in Looker Studio dashboards, providing insights into turnover trends and retention strategies. ",
    techstack: [
      "Google BigQuery",
      "Python (Colab)",
      "PyCaret",
      "Random Forest Classifier",
      "Looker Studio",
      "SQL",
      "Data Visualization",
      "Predictive Analytics",
    ],
    githublink:
      "https://github.com/aditirpatil11/Predictive-Employee-Turnover-Analysis",
    livedemo:
      "https://lookerstudio.google.com/u/0/reporting/7ffc1bcd-2646-48ef-ab05-d7690e2e9c4d/page/QXJ8D?s=tBJizqacXv0",
  },
  {
    id: 2,
    featured: true,
    imgSrc: P2,
    name: "PredictWise - AI Sales Forecasting",
    desc: "PredictWise is an AI-driven project that predicts daily store sales using Machine Learning (XGBoost) and Deep Learning (LSTM) models. It integrates historical sales, promotions, and seasonality data to forecast future performance, assisting in retail demand planning and revenue optimization. The pipeline combines PySpark preprocessing, feature engineering, and model evaluation within a unified workflow. A Streamlit dashboard allows users to visualize predictions and upload their own data for forecasting, achieving strong accuracy improvements over traditional models.",
    techstack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "XGBoost",
      "PySpark",
      "Streamlit",
      "Matplotlib",
      "Joblib",
      "Google Colab",
      "Machine Learning",
      "Deep Learning",
      "Time Series Forecasting",
    ],
    githublink: "https://github.com/aditirpatil11/PredictWise-AI-SalesForecast",
    // livedemo: "",
  },
  {
    id: 1,
    featured: true,
    imgSrc: P1,
    name: "GenQuery - LLM-Based SQL Interpreter",
    desc: "GenQuery is an intelligent LLM-powered SQL assistant that allows users to query databases in plain English. It leverages Retrieval-Augmented Generation (RAG) with OpenAI and LLaMA-3 models through LangChain, combined with FAISS and Hugging Face embeddings, to generate accurate and context-aware SQL queries. The project features a lightweight Flask-based web interface for local deployment, enabling seamless querying, visualization, and testing without external cloud dependencies. Using an IMDb dataset subset, GenQuery demonstrates how LLMs can interpret intent, retrieve relevant data through FAISS, and return human-like insights instantly.",
    techstack: [
      "Python",
      "Flask",
      "LangChain",
      "OpenAI GPT",
      "LLaMA-3",
      "FAISS",
      "Hugging Face",
      "Sentence Transformers",
      "RAG Pipeline",
      "SQLite",
      "HTML",
      "CSS",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Data Retrieval",
    ],
    githublink: "https://github.com/aditirpatil11/GenQuery",
    // livedemo: "",
  },
];

// ALL PROJECTS
export const PROJECTS = [
  {
    category: "AI/ML",
    id: 1,
    featured: true,
    imgSrc: P1,
    name: "GenQuery - LLM-Based SQL Interpreter",
    desc: "GenQuery is an intelligent LLM-powered SQL assistant that allows users to query databases in plain English. It leverages Retrieval-Augmented Generation (RAG) with OpenAI and LLaMA-3 models through LangChain, combined with FAISS and Hugging Face embeddings, to generate accurate and context-aware SQL queries. The project features a lightweight Flask-based web interface for local deployment, enabling seamless querying, visualization, and testing without external cloud dependencies. Using an IMDb dataset subset, GenQuery demonstrates how LLMs can interpret intent, retrieve relevant data through FAISS, and return human-like insights instantly.",
    techstack: [
      "Python",
      "Flask",
      "LangChain",
      "OpenAI GPT",
      "LLaMA-3",
      "FAISS",
      "Hugging Face",
      "Sentence Transformers",
      "RAG Pipeline",
      "SQLite",
      "HTML",
      "CSS",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Data Retrieval",
    ],
    githublink: "https://github.com/aditirpatil11/GenQuery",
    // livedemo: "",
  },
  {
    category: "AI/ML",
    id: 2,
    featured: true,
    imgSrc: P2,
    name: "PredictWise - AI Sales Forecasting",
    desc: "PredictWise is an AI-driven project that predicts daily store sales using Machine Learning (XGBoost) and Deep Learning (LSTM) models. It integrates historical sales, promotions, and seasonality data to forecast future performance, assisting in retail demand planning and revenue optimization. The pipeline combines PySpark preprocessing, feature engineering, and model evaluation within a unified workflow. A Streamlit dashboard allows users to visualize predictions and upload their own data for forecasting, achieving strong accuracy improvements over traditional models.",
    techstack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "XGBoost",
      "PySpark",
      "Streamlit",
      "Matplotlib",
      "Joblib",
      "Google Colab",
      "Machine Learning",
      "Deep Learning",
      "Time Series Forecasting",
    ],
    githublink: "https://github.com/aditirpatil11/PredictWise-AI-SalesForecast",
    // livedemo: "",
  },
  {
    category: "AI/ML",
    id: 3,
    featured: true,
    imgSrc: P3,
    name: "Health Insurance Cost Prediction",
    desc: "Developed a predictive ML model to estimate individual medical insurance charges using demographic and lifestyle data such as age, BMI, smoking status, and region. Implemented data preprocessing with one-hot encoding, performed exploratory data analysis (EDA) to identify key drivers, and compared Linear vs Polynomial Regression models. Achieved an R² improvement from 0.78 to 0.86 and reduced MAE from 4284 to 2599 by applying feature optimization and non-linear transformations.",
    techstack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "Google Colab",
      "Regression Analysis",
      "Data Visualization",
    ],
    githublink:
      "https://github.com/aditirpatil11/Health-Insurance-Cost-Prediction",
    // livedemo: "",
  },
  {
    category: "AI/ML",
    id: 4,
    featured: true,
    imgSrc: P4,
    name: "Predictive Employee Turnover Analysis",
    desc: "Implemented a data pipeline in Google BigQuery for analyzing employee turnover and predicting attrition risks. Connected Google Colab to BigQuery for data manipulation and model training. Used PyCaret's AutoML capabilities to train a Random Forest classifier, identifying employees most likely to leave. Results were visualized in Looker Studio dashboards, providing insights into turnover trends and retention strategies. ",
    techstack: [
      "Google BigQuery",
      "Python (Colab)",
      "PyCaret",
      "Random Forest Classifier",
      "Looker Studio",
      "SQL",
      "Data Visualization",
      "Predictive Analytics",
    ],
    githublink:
      "https://github.com/aditirpatil11/Predictive-Employee-Turnover-Analysis",
    livedemo:
      "https://lookerstudio.google.com/u/0/reporting/7ffc1bcd-2646-48ef-ab05-d7690e2e9c4d/page/QXJ8D?s=tBJizqacXv0",
  },
  {
    category: "AI/ML",
    id: 5,
    featured: true,
    imgSrc: P5,
    name: "Real-Time Event Streaming Pipeline for E-Commerce",
    desc: "Built a real-time event processing pipeline using Apache Kafka and AWS services to track and analyze customer interactions on an e-commerce platform. Python simulated user events streamed through Kafka running on EC2 and processed via AWS Lambda. AWS Glue cataloged structured data stored in S3, and Athena queries provided analytical insights on customer behavior and product trends.",
    techstack: [
      "Apache Kafka",
      "Python",
      "AWS EC2",
      "AWS Lambda",
      "AWS Glue",
      "Amazon S3",
      "AWS Athena",
      "Real-Time Data Processing",
      "Cloud Computing",
    ],
    // githublink: "",
    // livedemo: "",
  },
  {
    category: "Data Eng & Visualization",
    id: 6,
    featured: false,
    imgSrc: P6,
    name: "Financial Loan Assessment",
    desc: "Created a Tableau dashboard to analyze and assess loan performance. Data was cleaned and transformed in MS SQL Server, where KPIs like loan amount, interest rate, and debt-to-income ratio were calculated. The dashboard visualizes trends and classifies loans as “Performing” or “Non-Performing,” enabling stakeholders to identify risk areas and improve lending strategies.",
    techstack: [
      "Tableau",
      "SQL",
      "Microsoft SQL Server",
      "SQL Server Management Studio",
      "Data Cleaning",
      "Data Visualization",
    ],
    githublink: "https://github.com/aditirpatil11/Financial-Loan-Assessment",
    livedemo:
      "https://public.tableau.com/app/profile/aditi.patil.raman2773/viz/FinancialLoanAssessment/SummaryDashboard",
  },
  {
    category: "Data Eng & Visualization",
    id: 7,
    featured: false,
    imgSrc: P7,
    name: "Real Estate Management Dashboard",
    desc: "Developed an interactive Power BI dashboard for analyzing real estate data, including property distribution, build year trends, and pricing by bedroom count. Integrated geospatial visualization and DAX-based KPIs to provide actionable insights into property performance. Published to Power BI Service for web and mobile access, enhancing decision-making in property management.",
    techstack: [
      "Power BI",
      "DAX",
      "Data Analysis",
      "Data Modeling",
      "Visualization Design",
      "Performance Optimization",
    ],
    githublink: "https://github.com/aditirpatil11/Real-Estate-Management",
    livedemo:
      "https://app.powerbi.com/links/XSzpNUBOr1?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare&bookmarkGuid=bf858f2d-2c45-42a9-9914-84450d27287a",
  },
  {
    category: "Data Eng & Visualization",
    id: 8,
    featured: false,
    imgSrc: P8,
    name: "Analysis of COVID-19 in India",
    desc: "Built an interactive Tableau dashboard to visualize COVID-19 data across India by integrating six CSV datasets from Kaggle. Combined state-level, vaccination, and testing data to highlight key statistics and regional patterns. Designed multiple visualization types, including bar, line, and donut charts, to uncover correlations and enhance data interpretation.",
    techstack: [
      "Tableau",
      "Data Integration",
      "Data Cleaning",
      "Data Transformation",
      "Data Visualization",
    ],
    githublink: "https://github.com/aditirpatil11/Analysis-of-Covid19-in-India",
    livedemo:
      "https://public.tableau.com/app/profile/aditi.patil.raman2773/viz/Covid-19dashboard_17249218927630/Covid-19",
  },
  {
    category: "Data Eng & Visualization",
    id: 9,
    featured: false,
    imgSrc: P9,
    name: "Ideal Customer Profile Insights",
    desc: "Developed an interactive Power BI dashboard that analyzes customer behavior using the Four P's marketing model (Product, Price, Place, Promotion). Processed and visualized demographic and transactional data to identify customer segments based on education, marital status, and purchase behavior. The dashboard supports strategic decision-making by revealing key patterns in customer profiles. ",
    techstack: [
      "Power BI",
      "Data Analysis",
      "Data Transformation",
      "DAX",
      "Marketing Analytics",
      "Visualization",
    ],
    githublink:
      "https://github.com/aditirpatil11/Ideal-Customer-Profile-Insights",
    livedemo:
      "https://app.powerbi.com/links/CNVcFLVA_1?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare",
  },
  {
    category: "Data Eng & Visualization",
    id: 10,
    featured: false,
    imgSrc: P10,
    name: "Zomato Restaurant Analysis",
    desc: "Conducted an end-to-end analysis of Zomato restaurant data using Power BI. Cleaned and modeled the dataset to extract key insights such as the number of restaurants by country and city, ratings distribution, and average pricing trends. Developed an interactive dashboard to visualize global restaurant performance, aiding in data-driven business insights.  ",
    techstack: [
      "Power BI",
      "Data Transformation",
      "Data Modeling",
      "Data Visualization",
    ],
    githublink: "https://github.com/aditirpatil11/Zomato-Restaurant-Analysis",
    livedemo:
      "https://app.powerbi.com/links/31AHqdKF1J?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare",
  },
  {
    category: "Data Eng & Visualization",
    id: 11,
    featured: false,
    imgSrc: P11,
    name: "Video Game Sales Analysis",
    desc: "Designed an interactive Tableau dashboard to visualize video game sales data with over 70,000 entries. Created dynamic parameters for zone-based sales comparison and filters for temporal analysis. The dashboard highlights top-performing games, publishers, and platforms, offering a clear overview of trends and market leaders.",
    techstack: [
      "Tableau",
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Parameter Controls",
    ],
    githublink:
      "https://github.com/aditirpatil11/Video-Games-Sales-Analysis.git",
    livedemo:
      "https://public.tableau.com/app/profile/aditi.patil.raman2773/viz/Video-Game-Sales_17250388043890/Video-Game-Sales",
  },
];

// EXPERIENCE
export const EXPERIENCE = [
  {
    designation: "Graduate Assistant - Data Engineer",
    companyName: "UNC Charlotte",
    place: "Charlotte, NC",
    timeline: "Oct 2023 - May 2025",
    desc: [
      "Engineered ETL pipelines using AWS Glue and S3, processing ~10,000 JSONs and automating schema cataloguing, reducing manual prep by 30%.",
      "Implemented data validation checks and schema governance frameworks in AWS Glue/Redshift, ensuring data accuracy across 15+ departments.",
      "Partnered with academic advisors to define KPIs, validate key metrics, and refine data models, enhancing the reliability of academic reporting.",
      "Optimized Amazon Redshift schemas with distribution and sort keys, improving query performance and enabling faster cross-department analytics.",
      "Constructed advanced SQL (CTEs, window functions) to extract and aggregate student, course, and grade data for multi-department dashboards.",
      "Designed and deployed interactive Tableau dashboards integrating Redshift/PostgreSQL and Banner system data, transforming raw datasets into actionable insights and reducing manual tracking by 25%.",
    ],
    techstack: [
      "SQL",
      "PostgreSQL database",
      "AWS Glue",
      "Amazon S3",
      "Amazon Redshift",
      "Tableau",
    ],
  },
  {
    designation: "Data Engineer",
    companyName: "Bharath Electronics Limited",
    place: "Bangalore, India",
    timeline: "Jun 2022 - Dec 2022",
    desc: [
      "Executed data transformation in Python (Pandas), performing data preprocessing, aligning schemas and filters to improve data consistency by 25%.",
      "Exported cleaned datasets to MySQL using SQLAlchemy for efficient fault detection and advanced component-level analysis.",
      "Wrote complex SQL queries (JOINs, CTEs, CASE) to identify recurring faults, anomalies, and high-risk components across datasets.",
      "Built Tableau/Power BI dashboards visualizing fault trends, error patterns, and KPIs for actionable insights, reducing manual analysis time by 30%.",
    ],
    techstack: ["SQL", "Tableau", "Python(Pandas)", "Jupyter Notebook"],
  },
];

//CERTIFICATIONS
export const CERTIFICATIONS = [
  {
    id: 1,
    imgSrc: svgCert,
    certificate: "Machine Learning Specialization",
    issuedBy: "Stanford University & DeepLearning.AI",
    issuedOn: "Oct 2025",
    // link: ""
  },
  {
    id: 1,
    imgSrc: cert4,
    certificate: "AWS Certified AI Practitioner",
    issuedBy: "Amazon Web Services",
    issuedOn: "Feb 2025",
    link: "https://www.credly.com/badges/f13ffad9-84ff-4269-b299-3abdaea222fd",
  },
  {
    id: 2,
    imgSrc: cert3,
    certificate: "AWS Certified Solutions Architect - Associate",
    issuedBy: "Amazon Web Services",
    issuedOn: "Feb 2025",
    link: "https://www.credly.com/badges/19623052-d0c4-4cff-a253-ef1a2871a0d7/public_url",
  },
  {
    id: 1,
    imgSrc: cert2,
    certificate: "AWS Certified Data Engineer - Associate",
    issuedBy: "Amazon Web Services",
    issuedOn: "Jul 2024",
    link: "https://www.credly.com/badges/1dbd6528-a156-425c-85b1-c10347ed1cee",
  },
  {
    id: 1,
    imgSrc: cert1,
    certificate: "Google Data Analytics Professional Certificate",
    issuedBy: "Coursera",
    issuedOn: "Feb 2024",
    link: "https://www.credly.com/badges/cb19bc9c-b042-4e2f-80ba-78527e1d49c6/print",
  },
];

// PUBLICATIONS
export const PUBLICATIONS = [
  {
    id: 1,
    paper: "Smart Parking for Urban Cities Using IoT and Edge AI",
    doi: "10.17148/IJARCCE.2023.12468",
    timeline: "April 2023",
    journal:
      "The International Journal of Advanced Research in Computer and Communication Engineering",
    link: "https://www.researchgate.net/publication/370130779_Smart_Parking_for_Urban_Cities_Using_IoT_and_Edge_AI",
  },
];
