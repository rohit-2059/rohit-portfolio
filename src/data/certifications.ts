export type Certification = {
  title: string;
  date: string;
  image: string;
  verifyUrl: string;
  tag?: string;
  itemType?: "Certification" | "Training";
  skillsGained?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Oracle Generative AI",
    date: "2025",
    image: "/oracle.png",
    verifyUrl: "https://drive.google.com/file/d/1kKOjiDqgg0PdXsJX3XS3Fo_hV2M03fk8/view?usp=sharing",
    tag: "Oracle",
    itemType: "Certification",
    skillsGained: [
      "AI and ML fundamentals",
      "Generative AI concepts",
      "OCI AI services overview",
      "Responsible AI basics"
    ]
  },
  {
    title: "Cloud Computing",
    date: "2025",
    image: "/cloud.png",
    verifyUrl: "https://drive.google.com/file/d/194uOPT1fYcny9CmZvbBe9bXEKC8CPGyY/view?usp=sharing",
    tag: "NPTEL",
    itemType: "Certification",
    skillsGained: [
      "Cloud computing fundamentals",
      "Cloud services",
      "Resource and data management"
    ]
  },
  {
    title: "Full Stack (MERN) with Generative AI",
    date: "2025",
    image: "/mernW3.png",
    verifyUrl: "https://drive.google.com/file/d/1ADhT7nPhN0_KWEYvPGdqT1pHLw0DWanU/view?usp=sharing",
    tag: "W3grads",
    itemType: "Training",
    skillsGained: [
      "MERN stack development",
      "Generative AI integration",
      "Git and team collaboration"
    ]
  },
  {
    title: "Postman API Fundamentals Student Expert",
    date: "2025",
    image: "/postman.png",
    verifyUrl: "https://drive.google.com/file/d/1IC7_s4mwaQLVXnrO29v8WbK5c8IhlCnT/view?usp=sharing",
    tag: "Postman",
    itemType: "Certification",
    skillsGained: [
      "API fundamentals and REST concepts",
      "API testing using Postman",
      "Request handling (GET, POST, PUT, DELETE)",
      "API authorization and scripting basics",
      "Working with collections and variables"
    ]
  },
  {
    title: "Data Structures and Algorithms with C++",
    date: "2025",
    image: "/dsa.png",
    verifyUrl: "https://drive.google.com/file/d/1XYG-YwA-H2VRtjuC8RRX44cRCL_mVYTQ/view?usp=sharing",
    tag: "Splen Technologies",
    itemType: "Certification",
    skillsGained: [
      "DSA",
      "Problem-solving",
      "C++ programming",
      "Algorithmic thinking"
    ]
  },
  {
    title: "Fundamentals of Network Communication",
    date: "2024",
    image: "/cn.png",
    verifyUrl: "https://drive.google.com/file/d/1-S14OdOT3SLylo2yzMWWTy2GP3tlfX70/view?usp=sharing",
    tag: "Coursera",
    itemType: "Certification",
    skillsGained: [
      "Computer networking fundamentals",
      "OSI and TCP/IP models",
      "Network protocols and architecture"
    ]
  },
  {
    title: "Data Structures and Algorithm",
    date: "2024",
    image: "/lpudsa.png",
    verifyUrl: "https://drive.google.com/file/d/1azXL0UgnxKulZVkq_5wwOtu4WKMDwS-P/view?usp=sharing",
    tag: "LPU",
    itemType: "Certification",
    skillsGained: [
      "Data structures fundamentals",
      "Algorithm design and analysis",
      "Problem-solving and optimization",
      "C++/programming implementation",
      "Computational thinking"
    ]
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    date: "2024",
    image: "/ibm.png",
    verifyUrl: "https://drive.google.com/file/d/1yF6ohwtK9b8bAYxApgcmdb_0QMcDDnU2/view?usp=sharing",
    tag: "IBM",
    itemType: "Certification",
    skillsGained: [
      "Computer hardware fundamentals",
      "Operating systems basics",
      "Virtualization and IoT basics",
      "Data storage and system architecture"
    ]
  },
  {
    title: "Responsive Web Design",
    date: "2023",
    image: "/responsiveweb.png",
    verifyUrl: "https://drive.google.com/file/d/1D3gfTdQCQtUrRas4cphyIYJzT-kDUoWz/view?usp=sharing",
    tag: "freeCodeCamp",
    itemType: "Certification",
    skillsGained: [
      "HTML and CSS fundamentals",
      "Responsive web design principles",
      "Flexbox and CSS Grid",
      "Web accessibility basics",
      "Frontend project development"
    ]
  },
  {
    title: "Java Programming",
    date: "2025",
    image: "/lpujava.png",
    verifyUrl: "https://drive.google.com/file/d/1VYBnXZNaVYDlNArYVlkSfu2uHbAjyhFo/view?usp=sharing",
    tag: "LPU",
    itemType: "Certification",
    skillsGained: [
      "Java programming fundamentals",
      "Object-oriented programming (OOP)",
      "Control flow and data structures"
    ]
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    date: "2024",
    image: "/googleCN.png",
    verifyUrl: "https://drive.google.com/file/d/1GbESfuAo443y7bK6EGpXOmQcn7PIXgZp/view?usp=sharing",
    tag: "Google",
    itemType: "Certification",
    skillsGained: [
      "Computer networking fundamentals",
      "TCP/IP and OSI models",
      "Cloud and networking concepts"
    ]
  },
  {
    title: "PHP with Laravel for Beginners",
    date: "2026",
    image: "/laravel.png",
    verifyUrl: "https://drive.google.com/file/d/13iTh0kXyBzML0ifgtvoNNWPN8ZccixD_/view?usp=sharing",
    tag: "Udemy",
    itemType: "Certification",
    skillsGained: [
      "PHP and Laravel fundamentals",
      "MVC architecture and routing",
      "CRUD operations and database handling"
    ]
  },
  {
    title: "Graph Theory Programming Camp",
    date: "2025",
    image: "/algoGraph.png",
    verifyUrl: "https://drive.google.com/file/d/1k_fJIWsZz82a1gnP5IR-Cwb28TLNMrum/view?usp=sharing",
    tag: "AlgoUniversity",
    itemType: "Certification",
    skillsGained: [
      "Graph algorithms (BFS, DFS, Dijkstra)",
      "Problem-solving using graph theory"
    ]
  }
];

export const getSortedCertifications = (list: Certification[]) => {
  return [...list].sort((a, b) => {
    const yearA = Number.parseInt(a.date, 10);
    const yearB = Number.parseInt(b.date, 10);

    if (Number.isNaN(yearA) || Number.isNaN(yearB) || yearA === yearB) {
      return a.title.localeCompare(b.title);
    }

    return yearB - yearA;
  });
};
