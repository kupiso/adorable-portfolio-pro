const ObjectiveSection = () => (
  <section id="objective" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-[1]">
    <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
      🌟 Objective
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-8">
      My <em className="text-rose italic">Professional</em> Objective
    </h2>

    <div className="bg-card/90 rounded-lg p-10 md:p-12 shadow-card border border-rose/15 max-w-[860px] relative overflow-hidden">
      <div className="absolute -top-5 -left-5 text-[100px] opacity-[0.06] font-display leading-none">"</div>
      <p className="font-serif-body text-lg italic leading-[2] text-text-mid relative z-[1]">
        I am an <strong className="text-warm-brown not-italic">HR professional</strong> with an{" "}
        <strong className="text-warm-brown not-italic">Honours-level qualification in Lecturing</strong> (Post Graduate Diploma in Higher Education), with practical experience in{" "}
        <strong className="text-warm-brown not-italic">Logistics</strong> and as an{" "}
        <strong className="text-warm-brown not-italic">Assistant Labour Relations Officer</strong>. I aspire to teach in the{" "}
        <strong className="text-warm-brown not-italic">Technical and Vocational Education and Training (TVET)</strong> sector, leveraging my diverse background to inspire and equip the next generation of professionals.
      </p>
      <div className="flex gap-3 flex-wrap mt-7 relative z-[1]">
        <span className="inline-flex items-center gap-2 bg-blush rounded-full px-4 py-2 text-xs font-extrabold text-rose-dark">🎓 HR Professional</span>
        <span className="inline-flex items-center gap-2 bg-sage/20 rounded-full px-4 py-2 text-xs font-extrabold text-accent-foreground">🏛️ TVET Aspirant</span>
        <span className="inline-flex items-center gap-2 bg-mauve-light/20 rounded-full px-4 py-2 text-xs font-extrabold text-mauve">📦 Logistics Experience</span>
      </div>
    </div>
  </section>
);

export default ObjectiveSection;
