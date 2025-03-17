import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Password Generator',
      url: 'https://github.com/Somanath2314/passwordGenerator',
      repo: 'https://github.com/Somanath2314/passwordGenerator',
      img: 'https://raw.githubusercontent.com/Somanath2314/passwordGenerator/refs/heads/main/images/img1.png',
      year: 2023,
      tags: ['React', 'Hooks'],
    },
    {
      id: getId(),
      name: 'Weather Overview',
      url: 'https://github.com/Somanath2314/Weather-Overview',
      repo: 'https://github.com/Somanath2314/Weather-Overview',
      img: 'https://github.com/user-attachments/assets/864d07da-f400-4574-bed8-3f25ed5b6310',
      year: 2023,
      tags: ['React', 'OpenWeather API'],
    },
    {
      id: getId(),
      name: 'Skill Project (Flutter)',
      url: 'https://github.com/Somanath-123/skill',
      repo: 'https://github.com/Somanath-123/skill',
      // Replace the below with your actual screenshot if you have a direct image URL:
      img: "https://github.com/user-attachments/assets/5a696bab-a8f1-4b52-a56e-9872619e5616",

      year: 2022,
      tags: ['Flutter', 'Dart'],
    },
    {
      id: getId(),
      name: 'Meals App (Flutter)',
      url: 'https://github.com/Somanath2314/Meals',
      repo: 'https://github.com/Somanath2314/Meals',
      img: "https://github.com/user-attachments/assets/1f76da64-285d-462f-b2ee-96e086f17eeb",

      year: 2022,
      tags: ['Flutter', 'Dart'],
    },
    {
      id: getId(),
      name: 'Expense Tracker (Flutter)',
      url: 'https://github.com/Somanath2314/expenseTracker',
      repo: 'https://github.com/Somanath2314/expenseTracker',
      img: "https://github.com/user-attachments/assets/16bbdacb-8823-4269-afe1-d4cb81b5d002",

      year: 2022,
      tags: ['Flutter', 'Dart'],
    },
    {
      id: getId(),
      name: 'Drum Kit',
      url: 'https://github.com/Somanath2314/DrumKit',
      repo: 'https://github.com/Somanath2314/DrumKit',
      img: "https://github.com/user-attachments/assets/2a81f021-b726-40c2-b094-e07ad32b25f2",

      year: 2022,
      tags: ['JavaScript', 'HTML', 'CSS'],
    },
  ],
};
