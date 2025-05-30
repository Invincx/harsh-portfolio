export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Mechatronics',
    skills: [
      { name: 'Mechanical Design and Prototyping', proficiency: 95 },
      { name: 'Sensor Integration and Calibration', proficiency: 95 },
    ]
  },
  {
    name: 'Robotics',
    skills: [
      { name: 'Industrial Robots and Control Systems', proficiency: 90 },
    ]
  },
  {
    name: 'Programming',
    skills: [
      { name: 'Embedded C Programming (Arduino)', proficiency: 90 },
      { name: 'Python for Robotics and Automation', proficiency: 85 },
      { name: 'MATLAB for Simulation and Control', proficiency: 80 },
      { name: 'Raspberry Pi and Jetson Nano Development', proficiency: 85 },
    ]
  },
  {
    name: 'Circuit Design',
    skills: [
      { name: 'PCB Design using Eagle and Altium', proficiency: 95 },
      { name: 'Fine Soldering and Component Integration', proficiency: 95 },
      { name: 'Circuit Prototyping and Testing', proficiency: 95 },
    ]
  },
  {
    name: 'CAD/CAM and Mechanical Design',
    skills: [
      { name: 'Fusion 360, CATIA, SolidWorks', proficiency: 95 },
      { name: '3D Printing and Rapid Prototyping', proficiency: 95 },
      { name: 'Mechanical Design for Robotic Systems', proficiency: 95 },
    ]
  }
];