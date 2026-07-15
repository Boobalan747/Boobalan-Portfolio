import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Infocard from "../ui/Infocard";
import { about } from "../../data/about";

function About() {
  return (
    <section
     id="about"
      className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
  >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="About Me"
          subtitle="A quick introduction about who I am."
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400"
        >
          I'm passionate about creating modern web applications,
          learning new technologies, and improving my development
          skills every day.

          
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {about.map((item) => (
            <Infocard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;