import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Front Flow',
      description: 'E-commerce API Platform providing streamlined access to product data via RESTful APIs.',
      tasks:
        '• Built a full-stack web application with Node.js and MongoDB.\n' +
        '• Reduced dev time by 20% through efficient API architecture & documentation.\n' +
        '• Implemented user authentication, data validation, and error handling.',
      url: 'https://github.com/Somanath2314/front-flow', // or wherever the repo/demo is
      img: '/projectImages/frontflow/image.png', // placeholder – replace if you have a real image
      tags: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      liveUrl: 'https://front-flow-frontend-v1.vercel.app/',
      githubUrl: 'https://github.com/Somanath2314/Ecommerce-product-details',
    },
    {
      id: getId(),
      name: 'Edu-Streamliners',
      description:
        'A streamlined educational management platform for modern schools.',
      tasks:
        '• Dashboard analytics, attendance tracking, timetable management, role-based access.\n' +
        '• Built with MERN stack (MongoDB, Express.js, React, Node.js).',
      url: 'https://hackathon-frontend-lime.vercel.app/',
      img: '/projectImages/edustreamliners/image.png', // placeholder – replace if you have a real image
      // placeholder
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: 'https://hackathon-frontend-lime.vercel.app/',
      githubUrl: 'https://github.com/Visheshpgowda/Hackthon',
    },
    {
      id: getId(),
      name: 'Arogya Vahini (Chronic Disease Prediction System)',
      description:
        'ML-powered prediction for asthma, diabetes, stroke, and heart disease risks.',
      tasks:
        '• Multi-disease prediction using ensemble learning models.\n' +
        '• Built with React, Flask, XGBoost, and Neural Networks.\n' +
        '• User-friendly interface for quick diagnosis.',
      url: 'https://disease-prediction-app.vercel.app/',
      img: '/projectImages/arogya/image.png', // placeholder – replace if you have a real image
      // placeholder
      tags: ['React', 'Flask', 'XGBoost', 'Neural Networks'],
      liveUrl: 'https://disease-prediction-app.vercel.app/',
      githubUrl: 'https://github.com/Somanath2314/disease-prediction-app',
    },
    {
      id: getId(),
      name: 'Vehicle Parking Spot Booking Web App',
      description:
        'Smart parking solution that digitizes campus parking management.',
      tasks:
        '• Real-time spot availability, QR code validation, booking system, admin analytics.\n' +
        '• Built with Node.js, Express.js, MongoDB Atlas, and JWT.',
      url: 'https://github.com/Visheshpgowda/ParkingslotsProject',
      img: '/projectImages/parking/image.png', // placeholder – replace if you have a real image
      // placeholder
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Visheshpgowda/ParkingslotsProject',
    },
  ],
};

export default featuredProjectsSection;