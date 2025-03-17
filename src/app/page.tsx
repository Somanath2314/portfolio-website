import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

// Dynamically import the FeaturedProjects container
// This ensures any "document" references won't run on the server
const FeaturedProjects = dynamic(() => import('@/containers/FeaturedProjects'), {
  ssr: false, // <--- Disables server-side rendering for FeaturedProjects
});

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* Now rendered client-side only, preventing "document is not defined" */}
        <FeaturedProjects />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
