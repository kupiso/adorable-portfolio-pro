import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    icon: "🏛️",
    gradient: "from-blush to-rose",
    dateColor: "text-rose-dark",
    date: "April 2022 — Present",
    role: "Assistant Labour Relations Officer",
    org: "Department of Education",
    orgColor: "text-mauve",
    duties: [
      "Provide high-level administrative support to the Labour Relations Office.",
      "Draft professional correspondence to members of the public and stakeholders.",
      "Handle Labour Relations telephone enquiries and route calls appropriately.",
      "Execute comprehensive office management and administrative operations.",
      "Manage all document control — photocopying, faxing, receiving and dispatching.",
    ],
  },
  {
    icon: "📦",
    gradient: "from-sage-light to-sage",
    dateColor: "text-sage",
    date: "August 2024 — Current",
    role: "Intern — Operation Support Agent",
    org: "FedEx Express (Logistics)",
    orgColor: "text-sage",
    duties: [
      "Email customers duty tax invoices accurately and timeously.",
      "Assist customers in tracking shipments and resolving queries end-to-end.",
      "Follow up via call on outstanding customs VAT and duties to release shipments.",
      "Update proof of payments on the internal logistics management system.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-[1]">
    <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
      💼 Work Experience
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
      My Career <em className="text-rose italic">Journey</em>
    </h2>
    <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
      Each role has shaped who I am today.
    </p>

    <div className="flex flex-col gap-6">
      {EXPERIENCES.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="bg-card/90 rounded-lg p-8 md:p-10 shadow-card border border-rose/10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 md:gap-8 items-start transition-shadow hover:shadow-card-hover hover:border-rose/30"
        >
          <div className={`w-16 h-16 rounded-[18px] bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-[28px] flex-shrink-0 shadow-md`}>
            {exp.icon}
          </div>
          <div>
            <div className={`text-[11px] tracking-widest uppercase font-extrabold mb-2 ${exp.dateColor}`}>
              {exp.date}
            </div>
            <div className="font-display text-[22px] font-bold text-warm-brown mb-1">{exp.role}</div>
            <div className={`font-serif-body italic text-[15px] ${exp.orgColor} mb-5`}>{exp.org}</div>
            <ul className="list-none flex flex-col gap-2">
              {exp.duties.map((duty, j) => (
                <li key={j} className="flex gap-2.5 text-sm text-text-mid leading-relaxed">
                  <span className="text-xs mt-0.5 flex-shrink-0">🌸</span>
                  {duty}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
