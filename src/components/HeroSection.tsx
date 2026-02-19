import profileAvatar from "@/assets/profile-avatar.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[95vh] flex flex-col md:flex-row items-center px-6 md:px-12 py-20 max-w-[1200px] mx-auto gap-10 md:gap-16 z-[1]"
  >
    {/* Left */}
    <div className="flex-1">
      <div className="inline-flex items-center gap-2 bg-blush border border-blush-2 rounded-full px-5 py-2 text-xs font-bold text-rose-dark tracking-wider mb-7 animate-fade-down">
        <span className="w-2 h-2 bg-sage rounded-full animate-pulse-dot" />
        Available for New Opportunities
      </div>
       <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-black leading-[1.05] text-warm-brown mb-3 animate-fade-up">
        Hello, I'm
        <br />
        <span className="text-rose italic">Asemahle</span>
      </h1>
      <p className="font-serif-body text-lg italic text-mauve mb-7 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        HR Professional · Labour Relations · Logistics
      </p>
      <p className="text-[15px] text-text-mid max-w-[520px] leading-[1.9] mb-11 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Passionate about people, process, and positive change. Based in Johannesburg 🌍 with advanced HR qualifications and hands-on industry experience.
      </p>
      <div className="flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full no-underline font-extrabold text-[13px] tracking-wide bg-gradient-to-br from-rose to-rose-dark text-primary-foreground shadow-rose transition-all hover:-translate-y-1 hover:shadow-card-hover"
        >
          🌸 View My Journey
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full no-underline font-extrabold text-[13px] tracking-wide bg-transparent text-mauve border-2 border-mauve-light transition-all hover:bg-blush hover:border-rose hover:text-rose-dark hover:-translate-y-1"
        >
          💌 Get In Touch
        </a>
      </div>
    </div>

    {/* Right — Profile Card */}
    <div className="flex-shrink-0 w-full max-w-[360px] animate-fade-left">
      <div className="bg-card/90 rounded-[32px] p-10 shadow-card-hover border border-rose/15 text-center relative overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[180px] h-[180px] bg-[radial-gradient(circle,_hsla(14,68%,62%,0.15),_transparent)] rounded-full" />
        <div className="absolute -bottom-[40px] -left-[40px] w-[140px] h-[140px] bg-[radial-gradient(circle,_hsla(130,20%,60%,0.12),_transparent)] rounded-full" />

        <div className="w-[110px] h-[110px] bg-gradient-to-br from-blush to-mauve-light rounded-full mx-auto mb-5 flex items-center justify-center shadow-rose border-4 border-card overflow-hidden">
          <img src={profileAvatar} alt="Asemahle Kupiso" className="w-full h-full object-cover" />
        </div>
        <div className="font-display text-[22px] font-bold text-warm-brown mb-1.5">Asemahle Kupiso</div>
        <div className="text-[11px] text-text-light tracking-wider uppercase font-bold mb-6">HR Professional & Labour Relations</div>

        <div className="flex flex-col gap-2.5 text-left relative z-[1]">
          <InfoRow icon="📍" text="Bramley, Johannesburg, 2092" />
          <InfoRow icon="📞" text="071 964 3937" />
          <InfoRow icon="✉️" text="asemahlekupiso@gmail.com" />
          <InfoRow icon="🎓" text="PG Diploma in Higher Education" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-5 relative z-[1]">
          <QuickStat num="3+" label="Years Exp" />
          <QuickStat num="4" label="Qualifications" />
          <QuickStat num="2" label="Sectors" />
          <QuickStat num="3" label="Awards" />
        </div>
      </div>
    </div>
  </section>
);

const InfoRow = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-start gap-3 text-[13px] text-text-mid bg-cream px-3.5 py-2.5 rounded-xl">
    <span className="text-base flex-shrink-0">{icon}</span>
    <span>{text}</span>
  </div>
);

const QuickStat = ({ num, label }: { num: string; label: string }) => (
  <div className="bg-cream rounded-xl py-3.5 px-2.5 text-center">
    <div className="font-display text-[28px] font-black text-rose leading-none">{num}</div>
    <div className="text-[10px] text-text-light font-bold tracking-wider uppercase mt-1">{label}</div>
  </div>
);

export default HeroSection;
