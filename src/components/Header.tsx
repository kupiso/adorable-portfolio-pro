import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "References", href: "#references" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-background/95 backdrop-blur-lg border-b border-rose/20 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] bg-gradient-to-br from-rose to-mauve rounded-full flex items-center justify-center text-lg shadow-rose">
            🌸
          </div>
          <div>
            <div className="font-display text-xl font-bold text-mauve leading-none">Asemahle</div>
            <div className="text-[10px] tracking-wider text-text-light uppercase font-semibold">HR Professional</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex list-none gap-1 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="no-underline px-4 py-2 rounded-full font-bold text-[13px] text-text-mid transition-all hover:bg-blush hover:text-rose-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="ml-2 no-underline bg-gradient-to-br from-rose to-mauve text-primary-foreground px-5 py-2.5 rounded-full font-bold text-[13px] shadow-rose transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                Contact Me 💌
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 border-none bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-0.5 bg-mauve rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-mauve rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-mauve rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-rose/10 px-6 pb-6">
          <ul className="list-none flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block no-underline px-4 py-3 rounded-xl font-bold text-sm text-text-mid hover:bg-blush hover:text-rose-dark transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block no-underline text-center bg-gradient-to-br from-rose to-mauve text-primary-foreground px-5 py-3 rounded-full font-bold text-sm shadow-rose mt-2"
              >
                Contact Me 💌
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
