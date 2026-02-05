import { useEffect, useState } from "react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918789569240?text=Hi, I found your website and want to connect 🙂",
      "_blank"
    );
  };

  // ⏱ Auto tooltip
  useEffect(() => {
    const t1 = setTimeout(() => {
      setShowTooltip(true);
      const t2 = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(t2);
    }, 3000);

    return () => clearTimeout(t1);
  }, []);


  //scroll to top

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 INLINE ANIMATIONS */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(10px) }
            to { opacity: 1; transform: translateX(0) }
          }

          @keyframes typing {
            0% { opacity: .2 }
            20% { opacity: 1 }
            100% { opacity: .2 }
          }
        `}
      </style>

      <div
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* 💬 TOOLTIP */}
        {showTooltip && (
          <div
            style={{ animation: "slideIn .3s ease-out" }}
            className="
              absolute right-16 top-1/2 -translate-y-1/2
              bg-[#0f172a] text-white text-sm
              px-4 py-2 rounded-xl
              shadow-xl border border-white/10
              whitespace-nowrap
            "
          >
            <div className="flex items-center gap-1">
              <span>Chat with me</span>
              <span className="flex ml-1">
                <span style={{ animation: "typing 1.4s infinite" }}>.</span>
                <span style={{ animation: "typing 1.4s infinite .2s" }}>.</span>
                <span style={{ animation: "typing 1.4s infinite .4s" }}>.</span>
              </span>
            </div>

            {/* Arrow */}
            <span
              className="absolute right-[-6px] top-1/2 -translate-y-1/2
              w-0 h-0 border-t-6 border-b-6 border-l-6
              border-t-transparent border-b-transparent border-l-[#0f172a]"
            />
          </div>
        )}

        {/* 🟢 PULSE */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping z-0" />


        {/* 🔴 UNREAD BADGE */}
        <span
          className="absolute -top-1 -right-1 z-20
          w-5 h-5 rounded-full
          bg-red-500 text-white text-xs font-bold
          flex items-center justify-center
          shadow-md animate-bounce"
        >
          1
        </span>

        {/* 📞 BUTTON */}
        <button
          onClick={openWhatsApp}
          aria-label="Chat on WhatsApp"
          className="
            relative z-10 w-14 h-14 rounded-full
            bg-green-500 hover:bg-green-600
            flex items-center justify-center
            shadow-xl shadow-green-500/50
            transition-all duration-300 hover:scale-110
          "
        >
          {/* WhatsApp Icon */}
          <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
            <path d="M16.04 2C8.29 2 2 8.29 2 16.04c0 2.83.75 5.59 2.17 8.03L2 30l6.1-2.09a14 14 0 0 0 7.94 2.42h.01c7.75 0 14.05-6.29 14.05-14.04C30.1 8.29 23.8 2 16.04 2Zm0 25.67a11.6 11.6 0 0 1-5.92-1.63l-.42-.25-3.62 1.24 1.2-3.52-.27-.44a11.63 11.63 0 1 1 9.03 4.6Zm6.39-8.71c-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.56-.18-.8.18-.24.35-.92 1.13-1.13 1.36-.21.24-.42.27-.77.09-.35-.18-1.48-.55-2.82-1.75-1.04-.93-1.74-2.08-1.94-2.43-.21-.35-.02-.54.16-.72.16-.16.35-.42.53-.63.18-.21.24-.35.35-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.92-1.09-2.63-.29-.7-.59-.61-.8-.62h-.68c-.24 0-.63.09-.96.45-.32.35-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.75.86.27 1.65.23 2.27.14.69-.1 2.06-.84 2.35-1.65.29-.8.29-1.49.21-1.65-.09-.16-.32-.24-.68-.42Z" />
          </svg>
        </button>
      </div>
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-gray-700 text-white shadow-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
        >
          ⬆
        </button>
      )}
    </>
  );
};

export default WhatsAppFloat;
