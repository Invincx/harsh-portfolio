export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  description: string;
  courses: string[];
  gpa?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export const educationData: Education[] = [
  {
    degree: 'Master of Science, Mechatronics and Robotics (Recipient of Merit-based scholarship)',
    university: 'New York University',
    location: 'New York, USA',
    period: '',
    description: '',
    courses: [
      'Robot Localization and Navigation',
      'Robot Perception',
      'Rehabilitation Robotics',
      'Advanced Mechatronics',
      'Mathematics for Robotics',
      'Kinematics and Dynamics'
    ],
    gpa: ''
  },
  {
    degree: 'Bachelor of Technology, Electronics Engineering',
    university: 'MIT - Academy of Engineering',
    location: 'Pune, India',
    period: 'Jun 2022',
    description: '',
    courses: [
      'Analog & Digital Electronics',
      'Digital Signal Processing',
      'Computer Networks',
      'Embedded Systems'
    ],
    gpa: ''
  }
];

export const experienceData: Experience[] = [
  {
    title: 'Manufacturing Engineer',
    company: 'I-Hub AWaDH, IIT Ropar',
    location: 'India',
    period: '2023',
    description: 'At I-Hub AWaDH, I played a key role in enhancing production efficiency and automation. I engineered custom mechatronic systems, integrating IoT components and applied control theory to improve production efficiency by 45%. I led the in-house production of sensor boards, microcontroller units (MCUs), and Grove Shields, using predictive modeling to ensure quality control. Additionally, I directed the automation of PCB assembly lines, achieving 80% automation, which significantly improved the production workflow and enabled robust system designs for both vacuum and atmospheric environments. Left to join NYU.',
    achievements: [
      'Designed and engineered custom mechatronic systems, integrating IoT components to enhance production efficiency by 45% using control theory and automation.',
      'Supervised in-house production of 15+ sensor boards, microcontroller units (MCUs), and Grove Shields, ensuring high-quality standards through predictive modeling techniques.',
      'Managed the development of 100% PCB schematics, overseeing the end-to-end production of key electronic components.',
      'Directed the automation of PCB assembly lines, achieving 80% process automation and streamlining workflows, suitable for both vacuum and atmospheric environments.'
    ]
  },
  {
    title: 'Research Engineer – R&D',
    company: 'Indian Institute of Technology',
    location: 'India',
    period: '2022 – 2023',
    description: 'At IIT Ropar\'s R&D division, I led the electronics development for two patented projects: an invasive biomedical sensor and a hydrogen fuel cell controller. My role focused on designing, simulating, and validating control systems for high-precision instrumentation, incorporating real-time data acquisition and signal conditioning. I conducted extensive circuit simulations in MATLAB/Simulink to model system behavior and optimize performance. In the biomedical sensor project, I developed internal circuitry for bio-signal measurement under stringent design constraints. I also contributed to defining component specifications, PCB layout planning, and test validation strategies. My work was crucial in ensuring the devices met both regulatory and functional requirements.',
    achievements: [
      'Led the electronics development for patented medical device and hydrogen fuel cell projects, focusing on precision instrumentation through control theory applications.',
      'Designed and implemented internal circuitry for an invasive biomedical sensor, demonstrating expertise in electronics design, fine soldering, and component integration.',
      'Contributed to multiple research projects over 12 months, gaining proficiency in circuit simulations using MATLAB and Simulink, enhancing system accuracy and optimization.',
      'Supported interdisciplinary teams by integrating sensor modules and microcontroller systems, driving innovation in medical and energy-based applications.'
    ]
  },
  {
    title: 'Course Teaching Assistant for Interactive Medical Robotics',
    company: 'New York University',
    location: 'New York, USA',
    period: '',
    description: 'As a Teaching Assistant for the graduate-level course *Interactive Medical Robotics* at NYU, I support instruction in the various topics of the course, such as the development and control of robotic systems used in surgical and rehabilitation applications. My responsibilities include mentoring students on topics such as haptic feedback, teleoperation, and force-sensing integration in medical robotics. I also contribute to grading technical assignments and project reviews, ensuring a strong understanding of the subject.',
    achievements: []
  }
];