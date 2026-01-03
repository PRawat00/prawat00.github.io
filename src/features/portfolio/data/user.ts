import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Priyanshu",
  lastName: "Rawat",
  displayName: "Priyanshu Rawat",
  username: "prwt",
  gender: "male",
  pronouns: "he/him",
  bio: "Data Scientist specializing in RAG systems, agentic AI, and production ML infrastructure",
  flipSentences: [
    "Building production RAG systems with LangGraph",
    "Engineering MLOps pipelines and CI/CD infrastructure",
    "Optimizing LLMs with LoRA and quantization",
    "Developing HPC-integrated AI chatbots",
    "Creating real-time threat intelligence systems",
  ],
  address: "New York",
  timeZone: "America/New_York",
  phoneNumber: "KzEgKDU4NSktMjMwLTIwMjY=", // E.164 format, base64 encoded
  email: "cHJ3dDE1MDdAZ21haWwuY29t", // base64 encoded
  website: "prwt.dev",
  otherWebsites: [
    "https://linkedin.com/in/prwt",
    "https://github.com/PRawat00",
    "https://twitter.com/prwt_dev",
    "https://medium.com/@prwt",
  ],
  jobTitle: "Data Scientist & ML Engineer",
  jobs: [
    {
      title: "Data Scientist",
      company: "CIRC, UofR",
      website: "https://www.circ.rochester.edu",
    },
  ],
  about: `
Data Scientist and ML Engineer specializing in production-grade RAG systems, agentic AI, and MLOps infrastructure. Currently at University of Rochester's Center for Integrated Research Computing, building multimodal RAG systems and ML-powered intelligence platforms serving 1000+ researchers.

Expertise in LLM optimization (LoRA/QLoRA fine-tuning, quantization, vLLM), vector databases (pgvector, ChromaDB, Pinecone), and production ML deployment (Docker, Kubernetes, CI/CD). Strong foundation in PyTorch, big data technologies (Spark, Kafka, Airflow), and cloud platforms (AWS).

Recent projects include a [cybersecurity threat intelligence system](https://github.com/PRawat00) with fine-tuned LLMs achieving 3x throughput improvements, and a [Wegmans capstone project](https://github.com/PRawat00) predicting gluten sensitivity across 5.6M transactions with optimized business ROI.

Let's connect and collaborate on cutting-edge AI solutions!
  `,
  avatar: "/images/avatars/priyanshu-rawat.jpeg",
  ogImage: "/images/og/placeholder-og.svg",
  namePronunciationUrl: "/audio/priyanshu-rawat-pronunciation.mp3",
  keywords:
    "Priyanshu Rawat, data science, machine learning, RAG systems, agentic AI, MLOps, LLM optimization, LoRA, quantization, vLLM, LangGraph, PyTorch, TensorFlow, AWS, vector databases, pgvector, ChromaDB, XGBoost, CI/CD, Kafka, Airflow",
  dateCreated: "2025-01-15", // YYYY-MM-DD
};
