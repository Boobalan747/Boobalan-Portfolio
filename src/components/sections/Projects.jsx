import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
  id="projects"
  className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Projects"
          subtitle="Some projects I've built while learning and improving my skills."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;