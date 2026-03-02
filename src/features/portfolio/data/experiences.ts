import type { Experience } from "@/features/portfolio/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "uor-circ",
    companyName: "Center for Integrated Research Computing, UoR",
    companyLogo: "/images/companies/uor-circ.svg",
    positions: [
      {
        id: "uor-circ-ml-engineer-ft",
        title: "Machine Learning Engineer",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Full-time",
        icon: "education",
        description: `- Built agentic RAG system with hybrid search and context reranking, integrating multi-source knowledge (SQL databases, documentation, cluster metrics) using dynamic tool-calling and LangGraph orchestration, deployed via FastAPI and Docker, serving 1000+ users for HPC job scheduling, resource optimization, and troubleshooting with LangFuse monitoring
- Deployed self-hosted LLM via vLLM and FastAPI for automated support ticket summaries and resolution suggestions using RAG retrieval from vector database of 200K+ tickets anonymized for compliance, reducing support response time by 40%
- Built multi-task BERT classifier deployed via FastAPI with JWT authentication for ticket categorization across 4 teams and 4 priority levels (85% precision, 83% recall on 200K+ tickets), providing classification layer for LLM summarization and resolution workflow
- Designed evaluation framework with 1000 curated query-resolution pairs, measuring retrieval quality (precision@k, MRR) and generation quality (RAGAS faithfulness, answer relevancy) using self-hosted LLM-as-judge for automated, reproducible scoring
- Configured GitLab CI/CD pipelines with Prometheus/Grafana monitoring and comprehensive automated testing, enabling reliable continuous deployment of ML and RAG systems with 99.5% uptime and automated rollback capabilities`,
        skills: [
          "LangGraph",
          "FastAPI",
          "Docker",
          "RAG Systems",
          "Vector Databases",
          "SQL",
          "vLLM",
          "BERT",
          "JWT",
          "LangFuse",
          "GitLab CI",
          "Prometheus",
          "Grafana",
          "HPC Systems",
          "Agentic AI",
        ],
        isExpanded: true,
      },
      {
        id: "uor-circ-ml-engineer-pt",
        title: "Machine Learning Engineer",
        employmentPeriod: {
          start: "03.2025",
          end: "12.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Built agentic RAG system with hybrid search and context reranking, integrating multi-source knowledge (SQL databases, documentation, cluster metrics) using dynamic tool-calling and LangGraph orchestration, deployed via FastAPI and Docker, serving 1000+ users for HPC job scheduling, resource optimization, and troubleshooting with LangFuse monitoring
- Deployed self-hosted LLM via vLLM and FastAPI for automated support ticket summaries and resolution suggestions using RAG retrieval from vector database of 200K+ tickets anonymized for compliance, reducing support response time by 40%
- Built multi-task BERT classifier deployed via FastAPI with JWT authentication for ticket categorization across 4 teams and 4 priority levels (85% precision, 83% recall on 200K+ tickets), providing classification layer for LLM summarization and resolution workflow
- Designed evaluation framework with 1000 curated query-resolution pairs, measuring retrieval quality (precision@k, MRR) and generation quality (RAGAS faithfulness, answer relevancy) using self-hosted LLM-as-judge for automated, reproducible scoring
- Configured GitLab CI/CD pipelines with Prometheus/Grafana monitoring and comprehensive automated testing, enabling reliable continuous deployment of ML and RAG systems with 99.5% uptime and automated rollback capabilities`,
        skills: [
          "LangGraph",
          "FastAPI",
          "Docker",
          "RAG Systems",
          "Vector Databases",
          "SQL",
          "vLLM",
          "BERT",
          "JWT",
          "LangFuse",
          "GitLab CI",
          "Prometheus",
          "Grafana",
          "HPC Systems",
          "Agentic AI",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
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
        description: `- Built agentic RAG chatbot for financial document analysis, automating fund manager due diligence with 112-question questionnaires on SEC filings (10-K, 10-Q), achieving 70-75% accuracy compared to human analyst answers
- Set up ETL pipeline using Docling OCR to process scanned financial documents and extract structured data from complex financial tables for downstream RAG retrieval
- Designed section-aware chunking strategy with citation metadata linking, preserving document structure and enabling accurate source attribution for all generated responses
- Deployed hybrid retrieval (semantic + lexical) with LangGraph agent orchestration, reducing query latency by 75% through dynamic batching and optimized concurrent processing`,
        skills: [
          "LangGraph",
          "FastAPI",
          "pgvector",
          "PostgreSQL",
          "Docker",
          "Docling",
          "OCR",
          "RAG Systems",
          "Agentic AI",
          "ETL",
          "Hybrid Retrieval",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "k-labs-uor",
    companyName: "K-Labs: Continual Learning Lab, UoR",
    companyLogo: "/images/companies/uor-circ.svg",
    positions: [
      {
        id: "k-labs-ml-research",
        title: "ML Research Assistant",
        employmentPeriod: {
          start: "09.2024",
          end: "01.2025",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Engineered and benchmarked Vision Transformer (ViT) and CNN models for domain generalization, implementing architectural modifications to enhance cross-domain performance
- Reduced model training time by approximately 50% through Distributed Data Parallel (DDP) and Automatic Mixed Precision (AMP) implementation for multi-GPU training in PyTorch
- Implemented experiment tracking with Weights & Biases to analyze regularization strategies and their effects on model learning, presenting comparative results to research team`,
        skills: [
          "PyTorch",
          "Vision Transformers",
          "CNNs",
          "DDP",
          "AMP",
          "Multi-GPU Training",
          "Weights & Biases",
          "Domain Generalization",
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
