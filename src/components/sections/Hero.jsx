import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../../data/profile";
import profileImage from "../../assets/d5.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Blobs */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 md:flex-row">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-xl text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
            {profile.name}
          </h1>

          <TypeAnimation
            sequence={[
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "Java Learner",
              2000,
              "UI Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="mt-5 text-3xl font-semibold text-cyan-400"
          />

          <p className="mt-8 max-w-xl leading-8 text-slate-400">
            {profile.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 font-semibold shadow-lg transition hover:scale-105"
            >
              🚀 View Projects
            </Link>

            <a
              href="/BoobalanResume.pdf"
              download
              className="rounded-xl border border-cyan-400 px-8 py-4 font-semibold transition hover:bg-cyan-400 hover:text-slate-900"
            >
              📄 Download Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="mt-8 flex gap-6">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-4 text-2xl transition duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-slate-900"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-4 text-2xl transition duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-slate-900"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-slate-900 p-4 text-2xl transition duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-slate-900"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-center"
        >

          <div className="relative flex items-center justify-center">

            {/* Rotating Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1"
            >
              <div className="h-full w-full rounded-full bg-slate-950"></div>
            </motion.div>

            {/* Glow */}

            <div className="absolute h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

            {/* Profile Image */}

            <motion.img
              src={profileImage}
              alt="Boobalan"
              animate={{ y: [-10, 10, -10] }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                },
                scale: {
                  duration: 0.3,
                },
                rotate: {
                  duration: 0.3,
                },
              }}
              className="relative h-80 w-80 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-center text-slate-400"
        >
          <p className="mb-2 text-sm">
            Scroll Down
          </p>

          <div className="text-2xl">
            ↓
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;