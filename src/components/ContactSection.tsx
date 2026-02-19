const CONTACTS = [
  { icon: "📞", label: "Primary Phone", value: "071 964 3937", href: "tel:0719643937" },
  { icon: "📱", label: "Secondary Phone", value: "078 411 4449", href: "tel:0784114449" },
  { icon: "✉️", label: "Email Address", value: "asemahlekupiso@gmail.com", href: "mailto:asemahlekupiso@gmail.com" },
  { icon: "📍", label: "Location", value: "Bramley, Johannesburg, 2092", href: null },
];

const ContactSection = () => (
  <section id="contact" className="bg-gradient-to-br from-rose to-mauve relative overflow-hidden z-[1]">
    <div className="absolute -top-5 -right-5 text-[120px] opacity-[0.06] leading-none pointer-events-none select-none">
      🌸💕✨🌺💖
    </div>
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-[1]">
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground leading-[1.1] mb-5">
          Let's Work
          <br />
          Together 💌
        </h2>
        <p className="text-primary-foreground/80 font-serif-body italic text-[17px] leading-[1.8]">
          I'm always open to exciting new opportunities, collaborations, and conversations. Don't hesitate to reach out — I'd love to connect!
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full no-underline font-extrabold text-[13px] bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 transition-all hover:bg-primary-foreground/30 hover:-translate-y-1"
        >
          ↑ Back to Top
        </a>
      </div>

      <div className="flex flex-col gap-3.5">
        {CONTACTS.map((c, i) => {
          const Tag = c.href ? "a" : "div";
          return (
            <Tag
              key={i}
              {...(c.href ? { href: c.href } : {})}
              className={`bg-primary-foreground/15 backdrop-blur-lg border border-primary-foreground/25 rounded-xl px-6 py-4 flex items-center gap-4 text-primary-foreground no-underline text-sm font-bold transition-all hover:bg-primary-foreground/25 hover:translate-x-1.5 ${!c.href ? "cursor-default" : ""}`}
            >
              <div className="w-[42px] h-[42px] bg-primary-foreground/20 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <div className="text-[10px] opacity-70 tracking-wider uppercase mb-0.5">{c.label}</div>
                <div>{c.value}</div>
              </div>
            </Tag>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactSection;
