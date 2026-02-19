import { motion } from "framer-motion";

const EDUCATION = [
  { emoji: "🏫", year: "2019", degree: "Grade 12 — Matric", inst: "Sangoni SSS" },
  { emoji: "👩🏾‍🎓", year: "2022", degree: "Diploma in Human Resource Management", inst: "Walter Sisulu University" },
  { emoji: "🎓", year: "2023", degree: "Advanced Diploma in HRM", inst: "Walter Sisulu University" },
  { emoji: "🏆", year: "2024", degree: "PG Diploma in Higher Education", inst: "Vaal University of Technology" },
];

const AWARDS = [
  { icon: "📜", title: "Realise Certificate", org: "Transcend · 2024" },
  { icon: "⭐", title: "FedEx Bravo Zulu Award", org: "FedEx Express · 2025" },
  { icon: "🎓", title: "SACE Certification", org: "SA Council for Educators · 2026" },
];

const EducationSection = () => (
  <section
    id="education"
    className="relative z-[1]"
    style={{ background: "linear-gradient(160deg, hsla(130,20%,60%,0.1) 0%, transparent 70%)" }}
  >
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
        📚 Education
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
        Academic <em className="text-rose italic">Foundation</em>
      </h2>
      <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
        One qualification at a time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-card/90 rounded-lg p-8 shadow-card border border-sage/20 text-center relative overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage to-sage-light" />
            <span className="text-[34px] block mb-3.5">{edu.emoji}</span>
            <span className="inline-block bg-sage-light text-accent-foreground rounded-full px-3.5 py-1 text-[11px] font-extrabold mb-3">{edu.year}</span>
            <div className="font-display text-[15px] font-bold text-warm-brown mb-2 leading-snug">{edu.degree}</div>
            <div className="text-[11px] text-text-light font-bold tracking-wider uppercase">{edu.inst}</div>
          </motion.div>
        ))}
      </div>

      {/* Awards */}
      <div className="mt-14">
        <div className="inline-flex items-center gap-1.5 bg-blush/80 text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
          🏅 Certifications & Awards
        </div>
        <h3 className="font-display text-[28px] font-bold text-warm-brown mb-6">
          Recognition & <em className="text-rose italic">Achievements</em>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {AWARDS.map((award, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-blush/60 to-cream/90 border border-blush-2 rounded-lg p-6 flex gap-4 items-start transition-shadow hover:shadow-card"
            >
              <span className="text-[30px]">{award.icon}</span>
              <div>
                <div className="font-display font-bold text-[15px] text-warm-brown mb-1">{award.title}</div>
                <div className="text-xs text-text-light font-bold">{award.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
