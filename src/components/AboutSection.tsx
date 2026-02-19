import { motion } from "framer-motion";

const VALUES = [
  { icon: "🌱", label: "Growth Mindset" },
  { icon: "💪", label: "Resilience" },
  { icon: "🤝", label: "Integrity" },
  { icon: "🌺", label: "Compassion" },
  { icon: "✨", label: "Excellence" },
  { icon: "💖", label: "Empathy" },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative z-[1] border-t border-b border-rose/10"
    style={{ background: "linear-gradient(160deg, hsla(16,70%,87%,0.35) 0%, transparent 60%)" }}
  >
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
        🌸 About Me
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
        Get to Know <em className="text-rose italic">Asemahle</em>
      </h2>
      <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
        A glimpse into who I am, what drives me, and what I believe in.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <p className="font-serif-body text-[17px] leading-[2] text-text-mid">
            I am a passionate, dedicated, and hardworking young professional from the Eastern Cape, now based in Johannesburg. With a foundation in Human Resource Management, advanced qualifications in Higher Education, and hands-on experience in Labour Relations and Logistics, I bring a unique blend of academic excellence and practical skill.
          </p>
          <p className="font-serif-body text-[17px] leading-[2] text-text-mid mt-4">
            My ultimate goal is to contribute to the TVET sector, helping shape the next generation of professionals through quality education and mentorship.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mt-7">
            {VALUES.map((v) => (
              <motion.div
                key={v.label}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 bg-card border border-blush-2 rounded-full px-4 py-2.5 text-xs font-extrabold text-mauve shadow-sm"
              >
                <span>{v.icon}</span> {v.label}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MiniCard emoji="🎓" title="Post-Graduate Qualified" sub="Advanced Diploma + PG Diploma in HRM & Higher Education" />
          <MiniCard emoji="🏛️" title="Government & Corporate" sub="Experience across the Department of Education and FedEx Express" borderColor="border-sage/20" />
          <MiniCard emoji="🌺" title="TVET Sector Aspiration" sub="Passionate about teaching in the Technical and Vocational Education sector" borderColor="border-mauve-light/20" />
        </div>
      </div>
    </div>
  </section>
);

const MiniCard = ({ emoji, title, sub, borderColor = "border-rose/10" }: { emoji: string; title: string; sub: string; borderColor?: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`bg-card rounded-lg p-7 shadow-card border ${borderColor}`}
  >
    <div className="text-[30px]">{emoji}</div>
    <div className="font-display text-[17px] font-bold text-warm-brown mt-2 mb-1.5">{title}</div>
    <div className="text-[13px] text-text-light">{sub}</div>
  </motion.div>
);

export default AboutSection;
