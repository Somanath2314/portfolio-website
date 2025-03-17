import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Somanath Mikali.',
  tagline: 'I create web-apps that solve the real life problems.',
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building web applications using MERN STACK, previously worked on flutter for building mobile apps",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
