import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">

        <h2 className="text-2xl font-bold">
          Boobalan
        </h2>

        <p className="text-center text-slate-400">
          React Developer • Java Learner • UI Enthusiast
        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="transition hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Boobalan. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;