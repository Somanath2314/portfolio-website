'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is <strong>Somanath Mikali</strong>, a pre-final-year ISE/IT student at{' '}
            <Link
              href="https://www.bmsce.ac.in/"
              target="_blank"
              className="text-accent"
            >
              BMS College of Engineering
            </Link>
            .<br /> I'm a full-stack developer with a strong passion for scaling applications. In my free time, I explore investment strategies, watch <em>Shark Tank</em>, and brainstorm new ideas.
          </p>
          <p>
            I am also an <strong>upcoming intern</strong> at a global leader in CDN —{' '}
            <Link
              href="https://www.akamai.com/"
              target="_blank"
              className="text-accent"
            >
              Akamai Technologies
            </Link>
            .
          </p>
          <p>
            My current focus is on learning <strong>Spring Boot</strong>, <strong>AWS</strong>, and <strong>Microservices</strong> to enhance my backend development skills.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
