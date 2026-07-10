import SectionTitle from "../ui/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
  id="contact"
  className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
>
      <div className="mx-auto max-w-4xl">

        <SectionTitle
          title="Contact Me"
          subtitle="Let's build something amazing together."
        />

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 backdrop-blur-xl">

          <p className="text-center text-lg text-slate-400">
            Feel free to contact me through email or connect with me on GitHub and LinkedIn.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">

            <a
              href="mailto:boobalanvb2003@gmail.com"
              className="flex items-center gap-3 text-xl hover:text-cyan-400"
            >
              <FaEnvelope />
              boobalanvb2003@gmail.com
            </a>

            <a
              href="https://github.com/Boobalan747"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-xl hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/boobalan11"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-xl hover:text-cyan-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;