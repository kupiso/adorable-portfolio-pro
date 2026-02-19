import { useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-8 right-8 w-[52px] h-[52px] bg-gradient-to-br from-rose to-mauve rounded-full flex items-center justify-center text-xl shadow-rose no-underline z-[500] transition-all hover:-translate-y-1 hover:scale-110 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      title="Back to top"
    >
      🌸
    </a>
  );
};

export default BackToTop;
