const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "References", href: "#references" },
];

const CONTACT_LINKS = [
  { label: "071 964 3937", href: "tel:0719643937" },
  { label: "078 411 4449", href: "tel:0784114449" },
  { label: "Send Email", href: "mailto:asemahlekupiso@gmail.com" },
  { label: "Get In Touch", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-warm-brown text-primary-foreground/80 relative z-[1]">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] bg-gradient-to-br from-rose to-mauve rounded-full flex items-center justify-center text-lg">
            🌸
          </div>
          <div>
            <div className="font-display text-xl font-bold text-blush">Asemahle Kupiso</div>
            <div className="text-[10px] tracking-wider text-primary-foreground/40 uppercase font-semibold">HR Professional</div>
          </div>
        </div>
        <p className="font-serif-body italic text-primary-foreground/50 mt-4 text-sm leading-[1.8]">
          Dedicated HR professional passionate about people, process, and positive change. Durban, South Africa 🇿🇦
        </p>
      </div>

      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 font-extrabold mb-4">Navigation</h4>
        <ul className="list-none space-y-2.5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="no-underline text-primary-foreground/65 text-sm font-semibold hover:text-blush transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 font-extrabold mb-4">Contact</h4>
        <ul className="list-none space-y-2.5">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="no-underline text-primary-foreground/65 text-sm font-semibold hover:text-blush transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/[0.08] max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/35">
      <div>© 2026 Asemahle Kupiso. All rights reserved.</div>
      <div className="text-rose">Made with 🌸 & 💕</div>
      <div>Durban, South Africa 🇿🇦</div>
    </div>
  </footer>
);

export default Footer;
