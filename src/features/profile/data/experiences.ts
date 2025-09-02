import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "flx-ai",
    companyName: "FLX AI",
    companyLogo: "/images/companies/flx-ai.png",
    positions: [
      {
        id: "flx-ai-data-scientist",
        title: "Data Scientist",
        employmentPeriod: {
          start: "05.2024",
          end: "07.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Architected FinRAG3, a 6-phase agentic AI system using LangGraph orchestration for automated investment due diligence, processing SEC filings (10-K, 10-Q) and fund prospectuses with custom parsing algorithms achieving 95% accuracy in regulatory data extraction and reducing analysis time from hours to 5 minutes
- Developed domain-specific parsers for complex financial documents including SEC reports, fund prospectuses, and regulatory filings, implementing intelligent chunking strategies for risk factors, MD&A sections, and fee tables while achieving 5-10x processing speed improvements
- Built production RAG infrastructure handling 500+ page financial documents with multi-GPU optimization, ChromaDB vector storage, and comprehensive A/B testing framework, achieving >90% accuracy on investment questionnaire automation
- Deployed enterprise-grade MLOps pipeline using Docker, Kubernetes, and Flask-based monitoring dashboard, achieving 95% system reliability improvement while enabling real-time financial document analysis`,
        skills: [
          "LangChain",
          "FastAPI",
          "ColBERT v2",
          "PostgreSQL",
          "Docker",
          "GPU Computing",
          "ChromaDB",
          "LangGraph",
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
        description: `- Developing RAG-based chatbot for HPC documentation to automate user query resolution and reduce onboarding complexity for researchers
- Building agentic AI systems for dynamic data scraping and vector database management for HPC queries
- Creating automated user onboarding system and error troubleshooting automation for university HPC clusters`,
        skills: [
          "LangChain",
          "FastAPI",
          "Docker",
          "RAG Systems",
          "Vector Databases",
          "HPC Systems",
          "Agentic AI",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "k-labs",
    companyName: "K-Labs: Continual Learning Lab, University of Rochester",
    companyLogo: "/images/companies/k-labs.svg",
    positions: [
      {
        id: "k-labs-ml-research",
        title: "ML Research Assistant",
        employmentPeriod: {
          start: "09.2024",
          end: "01.2025",
        },
        employmentType: "Part-time",
        icon: "idea",
        description: `- Developed cross-modal object recognition system using Vision Transformers and CNNs for continual learning research
- Implemented distributed training pipeline with PyTorch DDP and Automatic Mixed Precision, achieving 50% reduction in training time
- Conducted statistical analysis of neural network activations to improve model interpretability and understanding of shape-based visual features`,
        skills: [
          "PyTorch",
          "Vision Transformers",
          "CNN",
          "Distributed Training",
          "Mixed Precision",
          "Computer Vision",
          "Statistical Analysis",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
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
