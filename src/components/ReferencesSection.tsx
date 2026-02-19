import { motion } from "framer-motion";

const REFS = [
  {
    avatar: "👩🏽",
    name: "Miss Nolitha Bhizana",
    role: "Labour Relations Officer",
    org: "Department of Education",
    tel: "078 037 6156 / 065 955 4302",
  },
  {
    avatar: "👨🏽",
    name: "Mr Nashly Naidoo",
    role: "Operations Manager",
    org: "FedEx Express",
    tel: "084 402 2345",
  },
  {
    avatar: "👩🏿",
    name: "Thandeka Mdoda",
    role: "Labour Relations Officer",
    org: "Department of Education",
    tel: "082 262 5190",
  },
];

const ReferencesSection = () => (
  <section
    id="references"
    className="relative z-[1]"
    style={{ background: "linear-gradient(160deg, hsla(16,70%,87%,0.2), hsl(28,60%,97%))" }}
  >
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
        📋 References
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
        Professional <em className="text-rose italic">References</em>
      </h2>
      <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
        Available upon request to speak to my work and character.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {REFS.map((ref, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-card/90 rounded-lg p-9 shadow-card border border-rose/12 relative overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            <div className="absolute -bottom-2.5 right-5 font-display text-[120px] text-blush leading-none pointer-events-none">"</div>
            <div className="w-[52px] h-[52px] bg-gradient-to-br from-blush-2 to-mauve-light rounded-full flex items-center justify-center text-[22px] mb-3.5 shadow-md">
              {ref.avatar}
            </div>
            <div className="font-display text-lg font-bold text-warm-brown mb-1">{ref.name}</div>
            <div className="font-serif-body italic text-[13px] text-mauve mb-0.5">{ref.role}</div>
            <div className="text-[11px] text-text-light font-bold tracking-wider uppercase mb-4">{ref.org}</div>
            <a
              href={`tel:${ref.tel.split("/")[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 bg-cream border border-blush-2 rounded-full px-3.5 py-1.5 text-xs font-bold text-rose-dark no-underline relative z-[1] hover:bg-blush transition-colors"
            >
              📞 {ref.tel}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
