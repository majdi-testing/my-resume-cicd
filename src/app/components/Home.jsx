import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useRef,useState,useEffect } from "react";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Web_Developer_Resume.pdf';
    link.click();
  };

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
        setVisible(true);
      } else {
        setVisible(false); // reset on scroll out
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

<section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pt-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div
          className={`space-y-6 transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
            <div className="space-y-2">
              <p className="text-white text-xl font-light tracking-wide">Hello, It's me</p>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">Md Khaleeque Akhtar</h1>
              <div className="flex flex-col items-baseline gap-3 text-2xl md:text-3xl font-light">
                <span className="text-white">And I'm a</span>
                <span className="font-bold flex flex-col text-green-400 animate-pulse">Cloud / DevOps Engineer &  Web Developer</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed ">
              I specialize in front-end development using Next.js, React, and Tailwind CSS, and have an understanding of AWS and Azure cloud fundamentals (EC2, S3, IAM), along with DevOps concepts including Git, CI/CD pipelines, Docker basics,Jenkins and deployment processes.

            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              
              <a
                href="mailto:mdmajdi05@gmail.com"
                target="_blank"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-green-500 hover:text-black transition-all duration-300 shadow-green-400/50 shadow-lg hover:shadow-glow hover:shadow-lg hover:shadow-green-400/50  hover:scale-120 hover:border-0"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/majdi05/"
                target="_blank"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-green-500 hover:text-black transition-all duration-300 shadow-green-400/50 shadow-lg hover:shadow-glow hover:shadow-lg hover:shadow-green-400/50  hover:scale-120 hover:border-0"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mdmajdi05"
                target="_blank"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-green-500 hover:text-black transition-all duration-300 shadow-green-400/50 shadow-lg hover:shadow-glow hover:shadow-lg hover:shadow-green-400/50  hover:scale-120 hover:border-0"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_1px_rgba(16,255,128,0.8)] hover:shadow-[0_0_30px_10px_rgba(16,255,128,0.8)] ">
              <a 
              href="/majdi-updated-resume.pdf"
  download="majdi_Web_Developer_Resume.pdf">
                Download CV
              </a>
            </button>
          </div>

          {/* Profile Image */}
          <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
            <div className="relative">
              <div className="w-30 h-60 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <svg className="w-32 h-32 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Animated ring */}
              <div className="absolute inset-2 rounded-full border-2 border-green-400 animate-pulse"></div>
              {/* Animated border ring */}
              <div
                className="absolute inset-2 rounded-full border-4 border-green-400/30 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>


              {/* PURE CSS FLOAT (Framer Motion feel) */}
<div className="absolute -top-6 -right-6 w-12 h-12 bg-green-500 rounded-full float-slow shadow-glow"></div>

<div className="absolute -bottom-6 -left-6 w-8 h-8 bg-green-500 rounded-full float-slow-delay shadow-glow"></div>

            </div>


            
          </div>
          
    
          
        </div>
        
      </section>
      </>

  );
};

export default Home;