import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/web.json',
        dark: '/lotties/web.json',
      },
      points: [
        'Building full-stack web apps using MERN STACK',
        'Creating RESTful APIs using Express and MongoDB',
        'Deploying production-grade projects on Vercel',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'mongodb', icon: 'logos:mongodb' },
      ],
    },
    {
      id: getId(),
      title: 'cloud & microservices',
      lottie: {
        light: '/lotties/cloud.json',
        dark: '/lotties/cloud.json',
      },
      points: [
        'Learning cloud deployment using AWS and Docker',
        'Understanding Kubernetes for container orchestration',
        'Working on microservices-based architecture for better scalability',
      ],
      softwareSkills: [
        { name: 'aws', icon: 'logos:aws' },
        { name: 'docker', icon: 'logos:docker' },
        { name: 'kubernetes', icon: 'logos:kubernetes' },
        { name: 'spring boot', icon: 'logos:spring' },
      ],
    },
    {
      id: getId(),
      title: 'machine learning',
      lottie: {
        light: '/lotties/ml.json',
        dark: '/lotties/ml.json',
      },
      points: [
        'Understanding the fundamentals of AI, ML, and deep learning',
        'Exploring supervised and unsupervised learning techniques',
        'Building models using Python libraries like TensorFlow and Scikit-learn',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'numpy', icon: 'logos:numpy' },
        { name: 'pandas', icon: 'logos:pandas' },
      ],
    },
  ],
};
