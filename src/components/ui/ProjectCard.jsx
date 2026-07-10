import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
    >
      {/* Placeholder Image */}
      <div className="flex h-52 items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-500">
        <h3 className="px-4 text-center text-2xl font-bold leading-tight text-white">
      {title}
      </h3>
      </div>

      <div className="p-6">
        <p className="leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={github}
            className="flex items-center gap-2 text-white hover:text-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={live}
            className="flex items-center gap-2 text-white hover:text-cyan-400"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;