import { motion } from "framer-motion";

const TECHNICAL = [
  "📋 Labour Relations", "👥 Human Resources", "📝 Microsoft Word", "📊 Microsoft Excel",
  "📽️ PowerPoint", "🗄️ Access / Database", "📞 Office Admin", "📦 Logistics Support",
];

const SOFT = [
  "🤝 Team Building", "💬 Communication", "🔍 Problem-Solving", "🧠 Critical Thinking",
  "⏱️ Time Management", "🌱 Adaptability", "🎯 Attention to Detail", "💪 Works Under Pressure",
];

const SkillsSection = () => (
  <section id="skills" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-[1]">
    <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
      ✨ Skills
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
      What I <em className="text-rose italic">Bring</em>
    </h2>
    <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
      A blend of technical ability and people-first soft skills.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="font-display text-[22px] font-bold text-warm-brown mb-5">💻 Technical Skills</h3>
        <div className="flex flex-wrap gap-2.5">
          {TECHNICAL.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -3, scale: 1.03 }}
              className="inline-flex items-center gap-1.5 bg-card border-2 border-blush-2 rounded-full px-4 py-2.5 text-[13px] font-extrabold text-mauve shadow-sm cursor-default transition-colors hover:bg-blush hover:border-rose hover:text-rose-dark"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-[22px] font-bold text-warm-brown mb-5">💖 Soft Skills</h3>
        <div className="flex flex-wrap gap-2.5">
          {SOFT.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -3, scale: 1.03 }}
              className="inline-flex items-center gap-1.5 bg-card border-2 border-sage/40 rounded-full px-4 py-2.5 text-[13px] font-extrabold text-accent-foreground shadow-sm cursor-default transition-colors hover:bg-sage-light hover:border-sage"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
