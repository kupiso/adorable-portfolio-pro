import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CERTIFICATIONS = [
  {
    icon: "🛡️",
    title: "Workplace Violence Prevention",
    org: "FedEx",
    date: "September 2024",
    image: "/certificates/cert-workplace-violence.jpg",
  },
  {
    icon: "⭐",
    title: "Bravo Zulu Award",
    org: "FedEx Express",
    date: "February 2025",
    image: "/certificates/cert-bravo-zulu.jpg",
  },
  {
    icon: "🔒",
    title: "Information Security Essentials",
    org: "FedEx",
    date: "October 2024",
    image: "/certificates/cert-info-security.jpg",
  },
  {
    icon: "📚",
    title: "Transcend Realise Work Readiness",
    org: "Transcend Advisory",
    date: "March 2024",
    image: "/certificates/cert-transcend.jpg",
  },
  {
    icon: "🎓",
    title: "FETC: Generic Management (NQF 4)",
    org: "The Learning Organisation",
    date: "May 2024 – April 2025",
    image: "/certificates/cert-fetc.jpg",
  },
];

const CertificationsSection = () => {
  const [viewingImage, setViewingImage] = useState<string | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-card/90 rounded-2xl shadow-card border border-rose/10 relative overflow-hidden transition-shadow hover:shadow-card-hover group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-mauve" />
              
              {/* Certificate thumbnail */}
              <div
                className="relative w-full h-48 overflow-hidden cursor-pointer bg-cream"
                onClick={() => setViewingImage(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-warm-brown/0 group-hover:bg-warm-brown/10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 rounded-full px-4 py-2 text-[12px] font-bold text-rose-dark shadow-card">
                    👁️ Click to View
                  </span>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[28px] block mb-2">{cert.icon}</span>
                <div className="font-display text-[15px] font-bold text-warm-brown mb-1 leading-snug">
                  {cert.title}
                </div>
                <div className="text-[12px] text-text-light font-bold mb-0.5">{cert.org}</div>
                <div className="text-[11px] text-text-light mb-3">{cert.date}</div>
                <button
                  onClick={() => setViewingImage(cert.image)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold bg-blush text-rose-dark border border-blush-2 transition-all hover:bg-rose hover:text-primary-foreground cursor-pointer"
                >
                  👁️ View Full Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {viewingImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-warm-brown/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setViewingImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl shadow-card-hover w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-rose/10">
                <h3 className="font-display text-lg font-bold text-warm-brown">Certificate Viewer</h3>
                <button
                  onClick={() => setViewingImage(null)}
                  className="w-9 h-9 rounded-full bg-blush text-rose-dark font-bold text-lg flex items-center justify-center border-none cursor-pointer transition-all hover:bg-rose hover:text-primary-foreground"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-cream">
                <img
                  src={viewingImage}
                  alt="Certificate"
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-card"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
