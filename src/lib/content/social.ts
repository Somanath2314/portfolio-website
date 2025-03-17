import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'simple-icons:leetcode', // ✅ Added LeetCode icon
      url: socialLinks.leetcode,     // ✅ Add LeetCode URL in socialLinks object
    },
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    }, {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    // {
    //   icon: 'mdi:instagram',
    //   url: socialLinks.instagram,
    // },

    // {
    //   icon: 'lucide:twitter',
    //   url: socialLinks.twitter,
    // },

    // {
    //   icon: 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
  ],
};
