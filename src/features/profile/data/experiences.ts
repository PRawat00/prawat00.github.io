import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "flx-ai",
    companyName: "FLX AI",
    companyLogo: "/images/companies/flx-ai.png",
    positions: [
      {
        id: "flx-ai-data-science-intern",
        title: "Data Science Intern",
        employmentPeriod: {
          start: "06.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Cut financial analysis time from days to hours by engineering an autonomous agent that synthesizes 500+ pages of SEC filings (10-K, 8-K) to generate instant answers
- Engineered an OCR pipeline (90% accuracy on financial tables) using Docling that implemented section-based chunking while preserving and linking citation metadata to enable precise source attribution
- Engineered a RAG pipeline (FastAPI/pgvector) with a ColBERT v2 re-ranker, cutting latency by 75% by implementing the PLAID search engine and dynamic batching`,
        skills: [
          "LangGraph",
          "FastAPI",
          "ColBERT v2",
          "PostgreSQL",
          "pgvector",
          "Docker",
          "Docling",
          "OCR",
          "PLAID",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "uor-circ",
    companyName: "Center for Integrated Research Computing, UoR",
    companyLogo: "/images/companies/uor-circ.svg",
    positions: [
      {
        id: "uor-circ-data-scientist",
        title: "Data Scientist",
        employmentPeriod: {
          start: "02.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Engineered ML-powered support ticket intelligence system analyzing 200K+ tickets with automated triage across system administrators, computational scientists, and management, reducing manual workload by 60%
- Built production-grade multimodal RAG system integrating SQL databases, documentation and real-time cluster data using LangGraph, FastAPI, and Docker, serving 1000+ users for job scheduling, resource optimization, and troubleshooting
- Deployed comprehensive CI/CD and MLOps infrastructure for RAG chatbot with automated testing, model deployment, performance monitoring, and version control, achieving 99.5% uptime while supporting continuous feature releases and model updates`,
        skills: [
          "LangGraph",
          "FastAPI",
          "Docker",
          "RAG Systems",
          "Vector Databases",
          "SQL",
          "CI/CD",
          "MLOps",
          "HPC Systems",
          "Agentic AI",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "greene-career",
    companyName: "Greene Career Center, UoR",
    companyLogo: "/images/companies/greene-career.jpeg",
    positions: [
      {
        id: "greene-career-data-analyst",
        title: "Data Analyst",
        employmentPeriod: {
          start: "10.2024",
          end: "05.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Conducted comparative statistical analysis (Chi-square, two-sided Z tests) to evaluate how varying levels of student engagement in courses, events, appointments and internships affect post-graduate outcomes
- Set up an ETL pipeline integrated with web scraping (Selenium), boosting the volume of actionable post-graduate outcome data available for analysis and reporting by 35%
- Revamped Tableau dashboards with current data and developed department-specific reports for departmental decision-making`,
        skills: [
          "Statistical Analysis",
          "Chi-square Testing",
          "Selenium",
          "ETL Pipeline",
          "Tableau",
          "Data Visualization",
          "Python",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "insignia",
    companyName: "Insignia Consultancy",
    companyLogo: "/images/companies/insignia.jpeg",
    positions: [
      {
        id: "insignia-data-science-intern",
        title: "Data Science Intern",
        employmentPeriod: {
          start: "01.2023",
          end: "03.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Built a health analytics platform using Django and MongoDB to collect SSOT data and generate accurate summaries using a RAG approach (LLaMA + FactCC) for data driven decision-making
- Constructed an NLP pipeline with spaCy and LSA to extract and distill key health trends from diverse articles
- Implemented an adaptive web scraper for real-time extraction from multiple webpages, increasing data availability by 60% and reducing manual errors by 75%`,
        skills: [
          "Django",
          "MongoDB",
          "LLaMA",
          "FactCC",
          "RAG Systems",
          "spaCy",
          "NLP",
          "Web Scraping",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
