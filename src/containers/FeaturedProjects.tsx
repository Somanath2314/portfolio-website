'use client';

import featuredProjectsSection from '@/lib/content/featured-projects';
import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';
import { getSectionAnimation } from '@/styles/animations';

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation}>
      <div className="mb-12 text-center lg:text-left">
        <h2 className="heading-secondary text-3xl font-bold capitalize text-white mb-2">
          {featuredProjectsSection.title}
        </h2>
        <p className="font-mono text-blue-400 capitalize text-sm">
          featured projects
        </p>
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-24">
        {featuredProjectsSection.projects.map((project, i) => (
          <FeaturedProject
            key={project.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...project}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
