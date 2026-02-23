import { motion } from "framer-motion";

const TECHNICAL = [
  { name: "Labour Relations", icon: "📋", level: 90 },
  { name: "Human Resources", icon: "👥", level: 92 },
  { name: "Microsoft Word", icon: "📝", level: 95 },
  { name: "Microsoft Excel", icon: "📊", level: 88 },
  { name: "PowerPoint", icon: "📽️", level: 90 },
  { name: "Database Management", icon: "🗄️", level: 80 },
  { name: "Office Administration", icon: "📞", level: 93 },
  { name: "Logistics Support", icon: "📦", level: 85 },
];

const SOFT = [
  { name: "Team Building", icon: "🤝", level: 95 },
  { name: "Communication", icon: "💬", level: 92 },
  { name: "Problem-Solving", icon: "🔍", level: 88 },
  { name: "Critical Thinking", icon: "🧠", level: 90 },
  { name: "Time Management", icon: "⏱️", level: 87 },
  { name: "Adaptability", icon: "🌱", level: 93 },
  { name: "Attention to Detail", icon: "🎯", level: 91 },
  { name: "Works Under Pressure", icon: "💪", level: 89 },
];

const SkillBar = ({ skill, index, color }: { skill: typeof TECHNICAL[0]; index: number; color: "rose" | "sage" }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-[13px] font-bold text-warm-brown">
        {skill.icon} {skill.name}
      </span>
      <span className="text-[11px] font-extrabold text-text-light">{skill.level}%</span>
    </div>
    <div className="w-full h-2.5 bg-cream rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
        className={`h-full rounded-full ${
          color === "rose"
            ? "bg-gradient-to-r from-rose to-rose-dark"
            : "bg-gradient-to-r from-sage to-sage-light"
        }`}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-[1]">
    <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
      ✨ Skills
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
      What I <em className="text-rose italic">Bring</em>
    </h2>
    <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
      Technical expertise paired with strong interpersonal abilities.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card/90 rounded-2xl p-8 shadow-card border border-rose/10"
      >
        <h3 className="font-display text-[22px] font-bold text-warm-brown mb-6">💻 Technical Skills</h3>
        {TECHNICAL.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} color="rose" />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-card/90 rounded-2xl p-8 shadow-card border border-sage/20"
      >
        <h3 className="font-display text-[22px] font-bold text-warm-brown mb-6">💖 Soft Skills</h3>
        {SOFT.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} color="sage" />
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
