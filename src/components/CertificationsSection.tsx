import { motion } from "framer-motion";
import { useState } from "react";

const CERTIFICATIONS = [
  {
    icon: "🛡️",
    title: "Workplace Violence Prevention",
    org: "FedEx",
    date: "September 2024",
    file: "/certificates/certificate-1.pdf",
  },
  {
    icon: "⭐",
    title: "Bravo Zulu Award",
    org: "FedEx Express",
    date: "February 2025",
    file: "/certificates/certificate-2.pdf",
  },
  {
    icon: "🔒",
    title: "Information Security Essentials",
    org: "FedEx",
    date: "October 2024",
    file: "/certificates/certificate-3.pdf",
  },
  {
    icon: "📚",
    title: "Transcend Realise Work Readiness",
    org: "Transcend Advisory",
    date: "March 2024",
    file: "/certificates/certificate-2.pdf",
  },
  {
    icon: "🎓",
    title: "FETC: Generic Management (NQF 4)",
    org: "The Learning Organisation",
    date: "May 2024 – April 2025",
    file: "/certificates/certificate-4.pdf",
  },
];

const CertificationsSection = () => {
  const [viewingPdf, setViewingPdf] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="relative z-[1]"
      style={{ background: "linear-gradient(160deg, hsla(16,70%,87%,0.2) 0%, transparent 70%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
        <div className="inline-flex items-center gap-1.5 bg-blush text-rose-dark rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase mb-4">
          📜 Certifications
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-warm-brown leading-tight mb-4">
          My <em className="text-rose italic">Certifications</em>
        </h2>
        <p className="font-serif-body italic text-[17px] text-text-light mb-14 max-w-[560px]">
          Professional development milestones and achievements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-card/90 rounded-lg p-7 shadow-card border border-rose/10 relative overflow-hidden transition-shadow hover:shadow-card-hover"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-mauve" />
              <span className="text-[34px] block mb-3">{cert.icon}</span>
              <div className="font-display text-[16px] font-bold text-warm-brown mb-1.5 leading-snug">
                {cert.title}
              </div>
              <div className="text-[12px] text-text-light font-bold mb-1">{cert.org}</div>
              <div className="text-[11px] text-text-light mb-4">{cert.date}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewingPdf(cert.file)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold bg-blush text-rose-dark border border-blush-2 transition-all hover:bg-rose hover:text-primary-foreground cursor-pointer"
                >
                  👁️ View
                </button>
                <a
                  href={cert.file}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold bg-transparent text-mauve border border-mauve-light no-underline transition-all hover:bg-blush hover:text-rose-dark"
                >
                  ⬇️ Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {viewingPdf && (
        <div
          className="fixed inset-0 z-[200] bg-warm-brown/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setViewingPdf(null)}
        >
          <div
            className="bg-card rounded-2xl shadow-card-hover w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-rose/10">
              <h3 className="font-display text-lg font-bold text-warm-brown">Certificate Viewer</h3>
              <div className="flex gap-2">
                <a
                  href={viewingPdf}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold bg-blush text-rose-dark border border-blush-2 no-underline transition-all hover:bg-rose hover:text-primary-foreground"
                >
                  ⬇️ Download
                </a>
                <button
                  onClick={() => setViewingPdf(null)}
                  className="w-9 h-9 rounded-full bg-blush text-rose-dark font-bold text-lg flex items-center justify-center border-none cursor-pointer transition-all hover:bg-rose hover:text-primary-foreground"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={viewingPdf}
              className="flex-1 w-full border-none"
              title="Certificate PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
