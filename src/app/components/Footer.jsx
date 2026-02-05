import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
      }
      else {
  setVisible(false);
}
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border" ref={containerRef}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Logo */}
          <div
            className={`text-xl font-bold transition-all duration-500 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
            style={{ transitionDelay: visible ? "0s" : "0s" }}
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <div
                key={link.label}
                className={`transition-all duration-500 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-5 scale-90"
                }`}
                style={{
                  transitionDelay: visible ? `${0.2 + index * 0.1}s` : "0s",
                }}
              >
                <a
                  className="w-10 h-10 bg-transparent border-2 border-green-400 hover:bg-green-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-green-400 hover:text-[#0f172a]"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div
            className={`text-sm text-muted-foreground flex items-center transition-all duration-500 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
            style={{ transitionDelay: visible ? "0.4s" : "0s" }}
          >
            © {currentYear} Made by Md Khaleeque Akhtar
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className={`text-center mt-6 pt-6 border-t border-border transition-all duration-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: visible ? "0.6s" : "0s" }}
        >
          <p className="text-xs text-muted-foreground">
            Crafted with modern web technologies • Always learning, always growing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
