'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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

const FeaturedProject = ({
  align,
  name,
  description,
  tasks,
  img,
  tags,
  liveUrl,
  githubUrl,
}: FeaturedProjectProps) => {
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
              <FiGithub size={18} />
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
              <FiExternalLink size={18} />
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
