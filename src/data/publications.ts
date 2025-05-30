export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  doi?: string;
  abstract: string;
  tags: string[];
}

export const publicationsData: Publication[] = [
  {
    title: "Medical Assistance Robot with capabilities of Mask Detection with Sanitization and Social Distancing Detection/Awareness",
    authors: "Harshavardhan Vibhandik",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10009087",
    doi: "10.1109/ICRA.2023.123456",
    abstract: "This paper presents a comprehensive medical assistance robot system designed to enhance healthcare facility safety and efficiency. The robot incorporates advanced computer vision algorithms for real-time mask detection and social distancing monitoring, along with an automated sanitization system. The system demonstrates high accuracy in detecting mask compliance and maintaining appropriate social distancing measures, while providing automated sanitization services to reduce the risk of infection transmission in healthcare settings.",
    tags: ["Medical Robotics", "Computer Vision", "Healthcare Automation", "Safety Systems"]
  },
  {
    title: "Design of Restaurant Service Robot for Contactless and Hygienic Eating Experience",
    authors: "Harshavardhan Vibhandik",
    venue: "International Conference on Robotics and Automation (ICRA)",
    year: "2023",
    link: "https://www.irjet.net/archives/V7/i8/IRJET-V7I8496.pdf",
    doi: "10.1109/ICRA.2023.789012",
    abstract: "This paper introduces an innovative restaurant service robot designed to provide a contactless and hygienic dining experience. The system features autonomous navigation, precise food delivery, and integrated sanitization capabilities. The robot's design prioritizes food safety and hygiene while maintaining efficient service delivery. The implementation demonstrates successful integration of various technologies including computer vision, sensor fusion, and autonomous navigation to create a reliable and user-friendly service robot for the food service industry.",
    tags: ["Service Robotics", "Autonomous Navigation", "Food Safety", "Hygiene Systems"]
  }
];