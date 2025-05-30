export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  paper?: string;
  problemStatement: string;
  methodology: string;
  results: string;
  challenges?: string;
  futureWork?: string;
}

export const projectsData: Project[] = [
  {
    id: 'wrist-exoskeleton',
    title: 'Robotic Wrist Rehabilitation Exoskeleton',
    summary: 'Novel wrist exoskeleton for motor rehabilitation with improved motion accuracy and reduced friction',
    description: 'This research focused on creating a lightweight, modular, and mechanically optimized exoskeleton to support wrist rehabilitation for patients with neurological and musculoskeletal disorders. The project emphasized replicating natural wrist kinematics, reducing friction, and improving patient comfort through innovative design choices and material selection.',
    thumbnail: '/images/open-wrist-1.png',
    images: [
      '/images/open-wrist-1.png',
      '/images/open-wrist-2.png',
      '/images/open-wrist-3.png',
      '/images/open-wrist-4.png',
      '/images/open-wrist-5.png',
      '/images/open-wrist-6.png'
    ],
    technologies: ['Fine Soldering', 'Python', 'Raspberry Pi', 'Mechanical Assembly', 'Gear-driven Systems'],
    github: '',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'Current rehabilitation devices face limitations in motion accuracy, friction reduction, and mechanical complexity, which can hinder effective rehabilitation and patient comfort. The need for a more anatomically accurate, lightweight, and mechanically optimized solution is crucial for improving patient outcomes and therapy effectiveness.',
    methodology: 'Developed a comprehensive rehabilitation system integrating fine soldering techniques for precise sensor integration, Python-based control algorithms for movement tracking, and Raspberry Pi for real-time data processing. Implemented mechanical assembly with gear-driven systems for smooth motion control across multiple degrees of freedom. The system combines EMG sensors for muscle activity monitoring with force sensors for movement feedback, creating an integrated solution for both assistive and rehabilitative purposes.',
    results: 'The exoskeleton achieved an extended range of motion (ROM) across all key wrist joint movements, significantly surpassing typical physiological limits. It reached ±175° in flexion/extension (FE), ±190° in pronation/supination (PS), and ±90° in radial/ulnar (RU) deviation, compared to normal ROMs of ±80°–90° for FE and PS, and ±15°–25° for RU. This expanded ROM enables the device to accommodate users with restricted joint mobility, making it suitable for both assistive and rehabilitative purposes, especially in cases requiring gradual mobilization. Sensor and EMG data further validated the system\'s effectiveness. FE movement produced 5.1 N of force with a ROM of ±86° and an EMG signal of 2.2 V, indicating strong user intent and mechanical response. RU deviation yielded 3.7 N of force at ±24° ROM with 1.82 V EMG. PS movement reached ±178° with the highest EMG signal at 2.5 V, showing excellent rotational tracking. The gripping force output was 20.5 N, accompanied by a 2.44 V EMG signal, highlighting the device\'s capability for functional tasks. Overall, the exoskeleton demonstrated high responsiveness, extended mobility support, and reliable muscle-actuated control, making it a promising solution for upper limb rehabilitation and functional assistance.'
  },
  {
    id: 'maze-navigation',
    title: 'Advanced Visual Navigation for Autonomous Maze Exploration',
    summary: 'Computer vision-based navigation system enabling mobile robots to explore and efficiently navigate mazes using ORB features and VLAD descriptors',
    description: 'This project, developed as part of the Embodied AI Challenge, focuses on building a robust navigation framework where the robot identifies key features of its environment, creates a compact representation of visual data, and determines optimal movement strategies to reach a target. The system leverages ORB (Oriented FAST and Rotated BRIEF) for feature detection and VLAD (Vector of Locally Aggregated Descriptors) for compact descriptor aggregation, making it computationally efficient and scalable to real-world applications.',
    thumbnail: '',
    images: [],
    technologies: ['Python', 'OpenCV', 'NumPy', 'Scikit-learn', 'Pygame', 'ORB', 'VLAD', 'BallTree'],
    github: '',
    demo: 'https://youtube.com',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'Autonomous maze navigation requires efficient and accurate visual processing to enable robots to explore complex environments, identify their position, and make real-time decisions. Traditional navigation systems often struggle with computational efficiency, descriptor drift, and handling dead ends in maze environments. The challenge was to develop a system that could accurately localize targets and make real-time decisions while maintaining computational efficiency.',
    methodology: 'The system implements a comprehensive two-phase approach: 1) Exploration Phase: Captures images through the robot\'s onboard camera and extracts ORB features from each image. Groups descriptors into clusters using K-means clustering to create a visual vocabulary. Computes VLAD descriptors by calculating residuals between descriptors and cluster centers, normalizing them for compact representation. 2) Navigation Phase: Dynamically computes VLAD descriptors of the current view and compares them to the pre-computed exploration dataset using BallTree search for efficient nearest-neighbor matching. Movement decisions are validated using homography checks to ensure correct path selection and reduce errors. The system also includes specific solutions for handling dead ends and reducing descriptor drift.',
    results: 'Successfully implemented a robust navigation system with the following outcomes: 1) Achieved efficient target localization in test mazes, reaching targets in under 2 minutes by leveraging efficient descriptor matching and path planning. 2) Demonstrated reliable navigation with minimal computational load and fewer errors. 3) Reduced descriptor drift by 20% compared to traditional systems through homography-based validation. 4) Successfully handled dead ends and complex maze configurations. The system provides a foundation for future autonomous navigation in complex environments, with potential for adaptation to dynamic environments and integration with deep learning models. Future improvements include adapting the system for dynamic environments with moving obstacles, introducing deep learning models for robust feature extraction, and optimizing for low-computation platforms.'
  },
  {
    id: 'autonomous-drone',
    title: 'Localization and Navigation Using Extended Kalman Filter',
    summary: 'Robust localization and navigation framework for Micro Aerial Vehicles (MAVs) using Extended Kalman Filter for state estimation',
    description: 'Developed a comprehensive EKF-based sensor fusion system for autonomous MAVs, combining high-frequency IMU data with reliable Vicon measurements to accurately track position, velocity, and orientation while compensating for sensor noise and packet loss. The system implements a dynamic EKF that uses body-frame acceleration and angular velocity for state prediction, followed by updates from position and velocity measurements.',
    thumbnail: '',
    images: [],
    technologies: ['MATLAB', 'Extended Kalman Filter', 'IMU', 'Vicon', 'Sensor Fusion', 'State Estimation'],
    github: '',
    demo: 'https://youtube.com',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'Localization and navigation are crucial for autonomous MAVs, requiring accurate state estimation in noisy and dynamic environments. The challenge was to develop a robust system that could fuse asynchronous IMU and Vicon data while handling sensor noise and packet loss to maintain reliable state estimation.',
    methodology: 'The project implemented a comprehensive two-part approach: 1) Prediction Step: Propagated state variables (position, velocity, orientation) using IMU-derived acceleration and angular velocity, updating the covariance matrix to account for uncertainty. 2) Update Step: Incorporated Vicon position and orientation measurements (Part 1) and velocity data (Part 2) to correct state estimates. The system used Kalman gain to balance trust between predictions and measurements, with visualization tools to compare EKF outputs against Vicon ground truth. Key solutions included noise model integration, covariance adjustments for sensor noise, and handling asynchronous updates with varying latencies.',
    results: 'Successfully implemented a robust localization and navigation framework with the following outcomes: 1) Achieved accurate tracking of MAV position and velocity across different datasets and motion profiles. 2) Minimized error margins for positional estimates through optimized Kalman gain and robust sensor fusion. 3) Demonstrated minimal deviation between EKF estimates and ground truth in visualization plots. 4) Maintained near real-time performance through optimized MATLAB implementation. The system provides a reliable foundation for autonomous navigation, with potential for future improvements including visual odometry integration, SLAM implementation, and testing across diverse scenarios.'
  },
  {
    id: 'robotic-arm',
    title: 'Vision-Based Pose and Velocity Estimation for Quadrotor Navigation',
    summary: 'Vision-based system for accurate 3D pose and velocity estimation of Nano+ quadrotor using AprilTag markers and optical flow',
    description: 'Developed a comprehensive vision-based localization system that leverages AprilTag markers for pose estimation and optical flow for motion estimation. The system implements robust outlier rejection using RANSAC to enhance estimation accuracy, making it suitable for autonomous robotic navigation and control in dynamic environments.',
    thumbnail: '',
    images: [],
    technologies: ['MATLAB', 'AprilTag', 'Optical Flow', 'RANSAC', 'Homography', 'Computer Vision'],
    github: '',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'Vision-based localization and velocity estimation for drones operating in dynamic environments presents significant challenges. The system needs to accurately track the quadrotor\'s position and velocity while handling noise and outliers in camera-based observations.',
    methodology: 'The project implemented a two-part approach: 1) Pose Estimation: Detected AprilTag corners in camera images, computed homography matrices to relate image coordinates to world coordinates, and decomposed homography to estimate 3D pose. Transformed pose estimates from camera frame to robot frame using calibration data. 2) Velocity Estimation: Tracked sparse corner points between consecutive frames using optical flow, computed pixel displacements into velocity estimates, and applied RANSAC for outlier rejection. The system included visualization tools to compare estimates with Vicon ground truth, providing insights into translational and rotational errors.',
    results: 'Successfully implemented a robust vision-based estimation system with the following outcomes: 1) Achieved high accuracy in pose estimation through AprilTag markers and robust homography-based transformations. 2) Demonstrated reliable velocity estimation with minimal errors, validated against Vicon ground truth. 3) Improved robustness against noisy data through RANSAC-based outlier rejection. 4) Successfully handled real-world variability through tuned EKF models and optical flow algorithms. The system provides a foundation for autonomous UAV navigation, with potential for future improvements including real-time video stream processing, SLAM capabilities, and advanced noise-robust estimation techniques.'
  },
  {
    id: 'swarm-robots',
    title: 'Robust Sensor Fusion Using Unscented Kalman Filter (UKF)',
    summary: 'Robust sensor fusion framework using UKF for precise state estimation in dynamic environments',
    description: 'Designed and implemented a comprehensive sensor fusion system using the Unscented Kalman Filter to integrate noisy and asynchronous sensor data, including orientation, pose, and velocity measurements. The system provides accurate and reliable state estimates for autonomous robotics and navigation applications, handling non-linear dynamics through the Unscented Transform.',
    thumbnail: '',
    images: [],
    technologies: ['MATLAB', 'Unscented Kalman Filter', 'Sensor Fusion', 'IMU', 'State Estimation', 'Non-linear Dynamics'],
    github: '',
    demo: 'https://youtube.com',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'State estimation is critical for autonomous robots and vehicles operating in real-world environments with sensor noise and inconsistencies. The challenge was to develop a robust system that could accurately predict and refine system states using noisy and asynchronous sensor data while handling non-linear dynamics.',
    methodology: 'The project implemented a comprehensive two-part approach: 1) Prediction Step: Predicted system state by propagating through a non-linear process model using IMU inputs, updating the covariance matrix using the Unscented Transform. 2) Update Step: Refined predicted state using Kalman gain and sensor measurements (pose, orientation, velocity). The system used the Unscented Transform to generate sigma points for propagating non-linear dynamics, maintaining estimation accuracy in complex systems. Key solutions included noise model integration, covariance adjustments, and a modular architecture for sensor integration.',
    results: 'Successfully implemented a robust sensor fusion framework with the following outcomes: 1) Achieved positional accuracy within ±0.1 meters and orientation error <1 degree in most scenarios. 2) Effectively handled sensor noise and asynchronous updates, ensuring stable state estimation. 3) Demonstrated reliable performance in dynamic conditions through the Unscented Transform. 4) Created a flexible modular design adaptable to various sensor fusion tasks. The system provides a foundation for autonomous robotics, with potential for future improvements including visual SLAM integration, multi-sensor fusion with LIDAR and GPS, and real-time optimization for UAV applications.'
  },
  {
    id: 'restaurant-service-robot',
    title: 'Restaurant Service Robot – Contactless and Hygienic Food Delivery',
    summary: 'Autonomous robot for contactless food and beverage delivery in restaurants, improving efficiency and hygiene.',
    description: 'Developed a restaurant service robot designed to autonomously deliver food and beverages from the kitchen to dining tables, ensuring a contactless and hygienic dining experience. The robot addresses congestion issues, improves efficiency during peak hours, and enhances customer satisfaction by offering a seamless and automated service.',
    thumbnail: '/images/restro-1.png',
    images: [
      '/images/restro-1.png',
      '/images/restro-2.png',
      '/images/restro-3.png',
      '/images/restro-4.png',
      '/images/restro-5.png',
      '/images/restro.png'
    ],
    technologies: ['Arduino Mega', 'Ultrasonic Sensors', 'L298N Motor Driver', 'IR Sensors', 'Android Studio', 'Arduino IDE', 'Mechanical CAD'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Restaurants need efficient, hygienic, and contactless food delivery solutions to improve customer experience and reduce reliance on human wait staff, especially during peak hours and in the context of health and safety concerns.',
    methodology: '1) Mechanical Design: Compact, stable structure with industrial-grade aluminum, motor-driven wheels, and glass-covered food trays. 2) Electrical Design: Line-following with IR sensors, obstacle detection with ultrasonic sensors, LEDs for feedback, and automatic charging. 3) User Interface: Mobile app for menu browsing, ordering, and payment, with QR code access at tables. 4) Navigation and Control: Keypad interface for chefs, pre-defined paths, and autonomous navigation to tables.',
    results: 'Reduced waiting time during peak hours by automating food delivery. Improved customer satisfaction with contactless, efficient service. Ensured food safety with hygienic, compartmentalized design.',
    challenges: '1) Handling congestion: Optimized pathfinding logic. 2) Obstacle clearance: Integrated buzzers and sensors for detection and warning. 3) Maintaining food hygiene: Designed easy-to-clean, protected compartments.',
    futureWork: '1) SLAM-based navigation for dynamic pathfinding. 2) Voice command integration. 3) Enhanced app features like table reservation and live order tracking.'
  },
  {
    id: 'unmanned-aerial-vehicle',
    title: 'Unmanned Aerial Vehicle – Wireless Remote-Controlled Quadrotor for Payload Delivery',
    summary: 'Wireless remote-controlled quadcopter for precise payload delivery using QR-code-based navigation and image processing.',
    description: 'Designed and developed a wireless remote-controlled flying quadcopter capable of carrying and dropping payloads, specifically first-aid kits, through an obstacle course. The system uses QR-code-based navigation for precise payload delivery and image processing for target identification, enhancing efficiency and accuracy in emergency response scenarios.',
    thumbnail: '/images/aerial-1.png',
    images: [
      '/images/aerial-1.png',
      '/images/aerial-2.png',
      '/images/aerial-3.png',
      '/images/aerial-4.jpg',
      '/images/aerial-5.jpg',
      '/images/aerial.png'
    ],
    technologies: ['Mamba F4 Flight Controller', 'EMAX 2650 KV Motors', 'LiPo Battery', 'VTx Camera', 'Python', 'OpenCV', 'Cleanflight', 'Betaflight', 'Servo-controlled Drop System'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Emergency response scenarios require fast, accurate, and reliable delivery of essential supplies to inaccessible or disaster-hit areas. The challenge was to design a quadcopter capable of carrying and dropping payloads with high speed and precision using image-based navigation.',
    methodology: '1) Hardware Design: Q210 carbon fiber frame, Mamba F4 stack with STM32F405, EMAX 2650 KV motors, 5045 propellers, and LiPo battery for high speed and stability. 2) Image Processing: VTx camera module with Python and OpenCV for QR code scanning and drop zone identification. 3) Payload Delivery: Servo-controlled cabinet for secure and accurate payload drops. 4) Navigation and Control: Wireless remote control, onboard processing, and sensor input for real-time adjustments.',
    results: 'Demonstrated accurate payload drops using QR code-based navigation. Achieved high speed (up to 200 km/h) and stability while carrying payloads. Provided a reliable solution for emergency first-aid delivery in complex environments.',
    challenges: '1) Obstacle navigation: Optimized frame and motor control for tight spaces. 2) Payload stability: Developed a lightweight, stable system for accurate drops. 3) Image processing speed: Fine-tuned QR code scanning for real-time detection.',
    futureWork: '1) Enhanced navigation with GPS and SLAM. 2) Multi-payload capability. 3) AI-based autonomous flight for self-navigation and delivery.'
  },
  {
    id: 'bike-to-bike-communication',
    title: 'Bike-to-Bike Offline Communication System',
    summary: 'Wireless ad-hoc communication system for bikers in remote areas using RF modules and BLE Bluetooth.',
    description: 'Developed a wireless ad-hoc communication system for bikers traveling in remote areas with intermittent or no GPRS/GSM connectivity. The system provides offline communication through RF modules and BLE Bluetooth, enhancing safety and connectivity during adventure rides.',
    thumbnail: '/images/bike-1.jpg',
    images: [
      '/images/bike-1.jpg',
      '/images/bike-2.png',
      '/images/bike-3.jpg',
      '/images/bike-4.jpg',
      '/images/bike-5.jpeg',
      '/images/bike-6.jpeg',
      '/images/bike-7.png'
    ],
    technologies: ['Arduino Nano', 'RN 1280 RF Module', 'HC-05 BLE Module', 'Neo 6-M GPS', 'Arduino IDE', 'MIT App Inventor', 'MACAW Protocol'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Bikers in remote regions often lack reliable cellular connectivity, making it difficult to communicate and share location data. The challenge was to develop an offline, self-healing communication network for real-time messaging and emergency alerts.',
    methodology: '1) System Architecture: Each biker acts as a node in an RF-based MANET, with a mobile app interface for message exchange. 2) Hardware: Arduino Nano, RN 1280 RF module, Neo 6-M GPS, and HC-05 BLE for connectivity. 3) Message Flow: App sends messages via BLE, microcontroller transmits via RF, and receiving node decrypts and displays messages.',
    results: 'Established reliable offline communication between bikers, enabling real-time message delivery and location sharing in areas without cellular networks. Enhanced safety and demonstrated system reliability during remote test rides.',
    challenges: '1) Network stability: Used MACAW protocol for dynamic topology. 2) Message prioritization: Implemented priority-based routing for emergency alerts. 3) Distraction reduction: Provided audio alerts for received messages.',
    futureWork: '1) Voice command integration. 2) Smart helmet integration for audio alerts. 3) Urban expansion as part of VANET for smart traffic management.'
  },
  {
    id: 'multi-terrain-robot',
    title: 'Multi-Terrain Robot – A Hybrid Ground and Aerial Robot',
    summary: 'Versatile robot that seamlessly transitions between ground and aerial navigation for exploration in complex environments',
    description: 'Developed a versatile Multi-Terrain Robot capable of both ground and aerial navigation, controlled by a Raspberry Pi and Arduino setup. The robot is designed for remote monitoring, data collection, and terrain navigation, making it ideal for challenging environments. It features dual-mode operation, modular design, efficient power management, and robust wireless communication for remote and autonomous operation.',
    thumbnail: '/images/multi-terrain-robot-1.png',
    images: [
      '/images/multi-terrain-robot-1.png',
      '/images/multi-terrain-robot-2.png'
    ],
    technologies: ['Raspberry Pi 5', 'Arduino', 'L298N Motor Driver', 'MPU-6050', 'Bluetooth', 'RF Module', 'FS-i6X Controller', 'LiPo Battery'],
    github: '',
    demo: 'https://youtube.com',
    paper: 'https://ieeexplore.ieee.org',
    problemStatement: 'Exploring and monitoring complex environments requires a robotic platform that can adapt to both ground and aerial terrains. The challenge was to design a robot that could seamlessly switch between these modes while maintaining stability, efficient power usage, and robust communication.',
    methodology: '1) Ground Mode Control: Raspberry Pi 5 manages ground navigation using precise motor control via L298N driver, with gyroscopes and accelerometers for stability and obstacle detection. 2) Aerial Mode Control: Arduino handles aerial movements and flight stability, using IMU sensors and remote commands from an FS-i6X controller. 3) Dual Control System: Integrated both systems with a toggle mechanism for seamless mode switching. 4) Power Optimization: Employed a high-capacity LiPo battery, voltage checker, and balanced charging for reliable long-duration operation.',
    results: 'Successfully demonstrated seamless transitions between ground and aerial modes, enabling efficient navigation in complex environments. The robot operated with minimal human intervention, showcased improved stability and energy efficiency, and proved adaptable for remote monitoring and data collection tasks.',
    challenges: '1) Power Management: Addressed high energy consumption during mode switching by optimizing power distribution and charging strategies. 2) Seamless Mode Switching: Fine-tuned communication between Raspberry Pi and Arduino for immediate transitions. 3) Obstacle Navigation: Used real-time MPU-6050 sensor data for effective obstacle detection and response.',
    futureWork: '1) Extended Battery Life: Explore additional power-saving techniques. 2) Autonomous Exploration: Incorporate vision-based navigation and SLAM. 3) Payload Customization: Enable modular payloads for extra sensors or cameras.'
  },
  {
    id: 'bio-medical-hydrogen-fuel-cell',
    title: 'Research and Documentation of Patented Bio-Medical Device and Hydrogen Fuel Cell Project',
    summary: 'Research, design, and documentation for an invasive biomedical device and hydrogen fuel cell project at IIT Ropar, focusing on electronics, prototyping, and multidisciplinary collaboration.',
    description: 'Conducted research, design, and documentation for an invasive biomedical device and a hydrogen fuel cell project at the R&D Department of the Indian Institute of Technology, Ropar. Led the electronic design and development, contributing to key aspects of both projects. Due to NDA constraints, detailed information is withheld until the completion of the patenting process. The project combined biomedical engineering principles with advanced electronics and mechanical design.',
    thumbnail: '',
    images: [],
    technologies: ['Circuit Design', 'Fine Soldering', 'Prototyping', 'Reverse Engineering', 'Multidisciplinary Collaboration'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Developing innovative biomedical and energy devices requires high-precision electronics, multidisciplinary collaboration, and strict confidentiality due to intellectual property and patenting requirements.',
    methodology: '1) Biomedical Device Development: Designed and developed an invasive biomedical device, including fine soldering and reverse engineering to refine internal circuitry. Documented the R&D process for patent submission. 2) Hydrogen Fuel Cell Project: Developed and tested electronic circuits for hydrogen fuel cells, integrated sensor-based monitoring systems, and optimized performance and safety. 3) Leadership: Led the electronics team, oversaw circuit design, prototype testing, and troubleshooting, and coordinated with cross-functional teams.',
    results: 'Successfully developed functional prototypes for both the biomedical device and hydrogen fuel cell project. Achieved high-precision circuit performance, optimized device reliability, and contributed to patent documentation. Enhanced multidisciplinary collaboration and project outcomes.',
    challenges: '1) Complex Circuit Requirements: Met high precision requirements through iterative design and testing. 2) Material Compatibility: Collaborated with materials team to select components meeting biomedical and fuel cell standards. 3) Confidentiality: Maintained strict confidentiality to protect intellectual property during patenting.'
  },
  {
    id: 'ashwath-medical-robot',
    title: 'Medical Service Robot – ASHWATH',
    summary: 'Autonomous medical service robot for hospitals, assisting with patient navigation, health checks, and digital record management.',
    description: 'Designed and developed ASHWATH, an autonomous medical service robot aimed at improving hospital efficiency by assisting patients and medical staff. ASHWATH helps with patient navigation, preliminary health checks, and digital medical record management while offering features like mask detection, social distancing monitoring, and drowsiness detection.',
    thumbnail: '/images/ashwath-1.png',
    images: [
      '/images/ashwath-1.png',
      '/images/ashwath-2.png',
      '/images/ashwath-3.png',
      '/images/ashwath-4.png',
      '/images/ashwath-5.png',
      '/images/ashwath-6.png',
      '/images/ashwath-7.jpg',
      '/images/ashwath-8.jpg',
      '/images/ashwath-9.png',
      '/images/ashwath-10.png',
      '/images/ashwath-11.png',
      '/images/ashwath-12.png'
    ],
    technologies: ['Raspberry Pi', 'Arduino Mega', 'L298N Motor Driver', 'Ultrasonic Sensors', 'LiPo Battery', 'Raspbian OS', 'Arduino IDE', 'OpenCV', 'AutoCAD Fusion 360'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Hospitals require efficient solutions to automate routine tasks, assist patients, and ensure safety through real-time health monitoring. The challenge was to design a robot that could autonomously navigate, interact with users, and manage medical data.',
    methodology: '1) Hardware Design: Developed a robust mechanical structure using CAD tools and 3D modeling, integrating Raspberry Pi, Arduino Mega, LiPo batteries, and sensors. 2) Software Design: Used Raspbian OS and Arduino IDE for control, implemented sensor data processing for mask detection, drowsiness monitoring, and navigation. 3) Functional Modules: Navigation using ultrasonic sensors, mask detection with image processing, drowsiness and social distancing monitoring, and a voice-command system for interaction.',
    results: 'Successfully reduced manual workload by automating routine hospital tasks. Improved patient experience through autonomous navigation and digital record management. Enhanced hospital safety with real-time health monitoring features.',
    challenges: '1) Navigating complex hospital layouts: Implemented real-time path planning and obstacle avoidance. 2) Power management: Optimized battery usage for extended operation. 3) User interaction: Developed a user-friendly voice-command system.',
    futureWork: '1) Advanced AI integration for diagnostics and health monitoring. 2) Facial recognition for automated medical record access. 3) Enhanced mobility for all-terrain healthcare use.'
  },
  {
    id: 'sehat-healthcare-robot',
    title: 'SEHAT Robot – Autonomous Healthcare Assistant for Hospitals',
    summary: 'Autonomous robot for health check-ups, medical record management, and patient navigation in hospitals.',
    description: 'Developed SEHAT, an autonomous robot designed for preliminary health check-ups, medical record management, and patient navigation within hospital premises. SEHAT enhances operational efficiency, reduces human errors, and improves the patient experience by automating key hospital services.',
    thumbnail: '/images/sehat-1.jpg',
    images: [
      '/images/sehat-1.jpg',
      '/images/sehat-2.jpg',
      '/images/sehat-3.jpg',
      '/images/sehat-4.jpg'
    ],
    technologies: ['Embedded System', 'Rechargeable Battery', 'Obstacle Detection Sensors', 'AI-based Symptom Analysis', 'Speech-to-Text', 'Cloud Storage', 'Autonomous Pathfinding'],
    github: '',
    demo: '',
    paper: '',
    problemStatement: 'Hospitals face inefficiencies such as long waiting times and lack of digital patient record management. The challenge was to develop an autonomous robot that could automate health check-ups, manage medical records, and guide patients efficiently.',
    methodology: '1) Core Components: Speech-to-text module for symptom logging, decentralized encrypted medical database, and navigation system with path planning and collision avoidance. 2) Hardware: Compact, stable structure with touch screens and 12-hour battery life. 3) Software: AI-powered data analysis, cloud-based database, and emoji-based patient interaction.',
    results: 'Reduced patient wait times, enhanced accuracy of patient records, and improved hospital efficiency by automating key services and reducing manual workload.',
    challenges: '1) Patient privacy: Used decentralized encrypted storage. 2) Navigation: Fine-tuned obstacle avoidance for crowded areas. 3) Human interaction: Designed intuitive speech interface.',
    futureWork: '1) Solar-powered operation. 2) AI-driven diagnosis. 3) Inter-hospital networking for comprehensive patient history.'
  }
];