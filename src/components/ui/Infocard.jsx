import { motion } from "framer-motion";

function Infocard({ icon, title, description }) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
    >
      <Icon className="text-5xl text-cyan-400 transition duration-300 group-hover:rotate-12 group-hover:scale-110" />

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default Infocard;
