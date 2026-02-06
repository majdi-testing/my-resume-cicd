import { useEffect, useRef, useState } from "react";

const About = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // agar element viewport ke andar hai
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
      } else {
        setVisible(false); // viewport se bahar → animation reset
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // load par bhi check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 flex items-center justify-center min-h-screen bg-[#1e293b]" ref={containerRef}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold text-foreground transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 "
              }`}
            >
              About <span className="text-green-500">Me</span>
            </h2>

            <h3
              className={`text-2xl md:text-3xl font-bold text-primary transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Cloud / DevOps Engineer & Web Developer!*
            </h3>

            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              I am a front-end developer specializing in building modern, responsive, and high-performance web interfaces using Next.js, React, and Tailwind CSS. I focus on writing clean, maintainable code and creating efficient front-end architectures that deliver smooth user experiences.

Alongside front-end development, I have a solid understanding of cloud fundamentals across AWS and Azure, including core services such as EC2, S3, and IAM. I am also familiar with DevOps concepts like Git-based workflows, CI/CD pipelines, Docker fundamentals, and modern deployment processes, which helps me understand how applications move from development to production.

I enjoy working at the intersection of front-end development and modern infrastructure, continuously improving my skills to build scalable, reliable, and production-ready web applications.
            </p>

            <div
              className={`pt-4 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <button className="bg-green-400 hover:bg-green-500 text-[#0f172a] px-8 py-3 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/50">
                Read More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-60 h-60 bg-green-500/10 rounded-full flex items-center justify-center border-4 border-green-500 shadow-[0_0_30px_10px_rgba(16,255,128,0.8)]">
              <div className="text-8xl font-bold text-green-400 animate-pulse">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
