'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeaturedProjectProps {
  align: 'left' | 'right';
  name: string;
  description: string;
  tasks?: string;
  img: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  align,
  name,
  description,
  tasks,
  img,
  tags,
  liveUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      className={`relative grid grid-cols-12 items-center gap-6 md:gap-12 rounded-xl bg-gray-900 p-6 shadow-lg ${align === 'right' ? '' : 'direction-rtl'
        }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Text Section */}
      <div className="col-span-12 text-center md:col-span-6 md:text-left lg:col-span-5 space-y-4">
        <p className="font-mono text-blue-400 text-sm uppercase tracking-wide">
          Featured Project
        </p>

        <h3 className="text-2xl font-bold text-white">{name}</h3>

        <div className="relative z-20 rounded-lg bg-gray-800 p-5 text-left shadow-xl md:p-6">
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Tasks */}
        {tasks && (
          <div className="text-gray-400 text-sm space-y-1">
            {tasks.split('\n').map((task, i) => (
              <p key={i}>• {task.trim()}</p>
            ))}
          </div>
        )}

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          {(tags ?? []).map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-4 flex gap-4 justify-center md:justify-start">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors flex items-center gap-2"
              aria-label={`GitHub link for ${name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>View Code</span>
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center gap-2"
              aria-label={`Live site link for ${name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>View Live</span>
            </Link>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`col-span-12 md:col-span-6 lg:col-span-7 ${align === 'right' ? 'md:order-1' : 'md:order-0'
          }`}
      >
        {liveUrl ? (
          <Link href={liveUrl} target="_blank" aria-label={`View ${name} project`}>
            <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg">
              <Image
                src={img}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedProject;