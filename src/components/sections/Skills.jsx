import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section
  id="skills"
  className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
>
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use to build modern web applications."
        />

        {skills.map((category) => (
          <div key={category.category} className="mb-16">

            <h3 className="mb-8 text-3xl font-bold text-cyan-400">
              {category.category}
            </h3>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

              {category.items.map((skill) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                />
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;