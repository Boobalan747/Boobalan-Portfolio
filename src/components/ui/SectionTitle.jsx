function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;