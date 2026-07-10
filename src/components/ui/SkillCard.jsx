import { motion } from "framer-motion";

function SkillCard({ icon, name, color }) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl"
    >
      <Icon
        className={`text-5xl ${color} transition duration-300 group-hover:rotate-12`}
      />

      <h3 className="mt-5 text-lg font-semibold text-white">
        {name}
      </h3>
    </motion.div>
  );
}

export default SkillCard;