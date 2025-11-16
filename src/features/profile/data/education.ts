import type { Education } from "../types/education";

export const EDUCATION: Education[] = [
  {
    id: "ms-data-science",
    degree: "Master of Science",
    field: "Data Science",
    institution: "University of Rochester",
    location: "Rochester, New York",
    startDate: "2024-08",
    endDate: "2025-12",
    gpa: "3.83/4.00",
    coursework: [
      "Machine Learning",
      "Computational Statistics",
      "Data Science at Scale",
      "End-to-End Deep Learning",
    ],
    honors: [],
  },
  {
    id: "bs-computer-science",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Graphic Era Hill University",
    location: "Dehradun, India",
    startDate: "2020-07",
    endDate: "2024-07",
    gpa: "3.4/4.0",
    coursework: [
      "Machine Learning",
      "Data Structures and Algorithm",
      "Deep Learning",
      "Object Oriented Programming",
    ],
    honors: [],
  },
];
