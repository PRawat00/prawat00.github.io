import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "realtime-tweet-sentiment",
    title: "Real-Time Tweet Sentiment Analysis Pipeline",
    period: {
      start: "01.2025",
      end: "03.2025",
    },
    link: "https://github.com/PRawat00",
    skills: [
      "Apache Spark Streaming",
      "Delta Lake",
      "Hugging Face Transformers",
      "MLflow",
      "Databricks",
      "Grafana",
      "Data Quality Validation",
      "Medallion Architecture",
      "Auto-scaling",
      "Real-time Processing",
    ],
    description: `Comprehensive real-time data pipeline for analyzing tweet sentiment at scale, processing 50K+ tweets per hour through Bronze, Silver, Gold, and Application layers with 99.5% uptime. Deployed MLflow-packaged Hugging Face transformer achieving 92% accuracy with sub-200ms inference latency. Implemented auto-scaling Databricks clusters with optimized partitioning strategies, reducing query response times by 65% and enabling real-time aggregations across 1M+ tweet mentions. Engineered comprehensive monitoring system with Grafana dashboards and automated alerting for sentiment anomalies.`,
    logo: "/images/projects/realtime-tweet-sentiment.svg",
    isExpanded: false,
  },
  {
    id: "steam-insights",
    title: "Steam Insights (Gaming Market Analysis & Forecasting)",
    period: {
      start: "08.2024",
      end: "12.2024",
    },
    link: "https://github.com/PRawat00",
    skills: [
      "Apache Airflow",
      "Databricks Spark",
      "Kafka",
      "XGBoost",
      "Random Forest",
      "ARIMA",
      "Prophet",
      "Python",
    ],
    description: `Comprehensive gaming market analysis and forecasting system processing 8M+ data points from 140K+ games. Built ETL pipeline with Apache Airflow, Databricks Spark, and Kafka. Developed ML models (XGBoost, Random Forest) for review analysis and pricing forecasts. Implemented time series forecasting (ARIMA, Prophet) achieving 85% accuracy in genre demand predictions and reliable sales forecasting.`,
    logo: "/images/projects/steam-insights.svg",
    isExpanded: true,
  },

  // Temporarily commented out projects - can be uncommented when needed
  /*
  {
    id: "finrag3",
    title: "FinRAG3 - Agentic Financial Document AI",
    period: {
      start: "02.2025",
    },
    link: "https://github.com/PRawat00",
    skills: [
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "ColBERT v2",
      "FastAPI",
      "Docker",
      "GPU Computing",
    ],
    description: `6-phase agentic AI system for automated investment due diligence processing SEC filings (10-K, 10-Q) and fund prospectuses. Features custom parsing algorithms with 95% accuracy, multi-GPU optimization, and enterprise-grade MLOps pipeline. Reduces financial document analysis time from hours to 5 minutes.`,
    logo: "/images/projects/finrag3.svg",
    isExpanded: false,
  },
  {
    id: "hpc-chatbot",
    title: "HPC Documentation Assistant",
    period: {
      start: "02.2025",
    },
    link: "https://github.com/PRawat00",
    skills: [
      "RAG Systems",
      "Vector Databases",
      "FastAPI",
      "Docker",
      "HPC Systems",
      "Agentic AI",
    ],
    description: `RAG-based chatbot for High Performance Computing documentation automation. Features agentic AI for dynamic data scraping, vector database management for HPC queries, and automated user onboarding system for university research computing infrastructure.`,
    logo: "/images/projects/hpc-chatbot.svg",
    isExpanded: false,
  },
  {
    id: "health-analytics",
    title: "Health Analytics Platform",
    period: {
      start: "01.2023",
      end: "03.2023",
    },
    link: "https://github.com/PRawat00",
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
    description: `End-to-end health analytics platform using Django and MongoDB for SSOT data collection. Implemented RAG approach with LLaMA and FactCC for accurate health summaries. Built NLP pipeline with spaCy and LSA for health trend extraction. Achieved 60% increase in data availability and 75% reduction in manual errors through adaptive web scraping.`,
    logo: "/images/projects/health-analytics.svg",
    isExpanded: false,
  },
  */
];
