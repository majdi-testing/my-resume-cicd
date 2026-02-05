import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    year: "2020 – 2024",
    title: "B.Tech in Computer Science Engineering",
    desc: "Completed B.Tech in CSE from AIMT Lucknow with strong fundamentals in programming, data structures, algorithms, and modern web technologies."
  },
  {
    year: "2023 – 2024",
    title: "MERN Stack Web Development Training",
    desc: "Completed hands-on MERN Stack training from Ducat Noida focusing on MongoDB, Express.js, React.js, and Node.js with real-world projects."
  },
  {
    year: "2018 – 2020",
    title: "Intermediate (12th) – Science Stream",
    desc: "Completed intermediate education from AS Sabeel Public School with a strong foundation in science and analytical thinking."
  },
  {
    year: "2015 – 2016",
    title: "High School (10th Standard)",
    desc: "Completed high school education from JM High School, building a strong academic base and disciplined learning approach."
  }
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const items = document.querySelectorAll(".edu-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0f172a]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
        My <span className="text-green-400">Education</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated timeline line */}
        <div className="absolute left-1/2 top-0 w-[3px] h-full -translate-x-1/2 bg-green-400/20 overflow-hidden">
          <div
            className="w-full bg-green-400 transition-all duration-700"
            style={{
              height: `${((activeIndex + 1) / educationData.length) * 100}%`
            }}
          />
        </div>

        {/* Education rows */}
        <div className="space-y-20">
          {Array.from({ length: Math.ceil(educationData.length / 2) }).map(
            (_, row) => {
              const leftIndex = row * 2;
              const rightIndex = row * 2 + 1;
              const leftItem = educationData[leftIndex];
              const rightItem = educationData[rightIndex];
              const leftActive = leftIndex <= activeIndex;
              const rightActive = rightIndex <= activeIndex;

              return (
                <div
                  key={row}
                  className="relative flex flex-col md:flex-row items-center justify-between space-y-20 md:space-y-0"
                >
                  {/* LEFT CARD */}
                  {leftItem && (
                    <div
                      data-index={leftIndex}
                      className="edu-item w-full md:w-[45%] md:justify-start flex flex-col items-start"
                    >
                      <Card item={leftItem} isActive={leftActive} />
                    </div>
                  )}

                  {/* DOT */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-500
                    ${
                      rightActive
                        ? "bg-green-400 ripple shadow-[0_0_25px_rgba(16,255,128,1)]"
                        : "bg-green-400/40"
                    }`}
                  />

                  {/* RIGHT CARD */}
                  {rightItem && (
                    <div
                      data-index={rightIndex}
                      className="edu-item w-full md:w-[45%] md:justify-end flex flex-col items-end"
                    >
                      <Card item={rightItem} isActive={rightActive} />
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

// Reusable Card component
const Card = ({ item, isActive }) => (
  <div
    className={`tilt-card w-full p-10 rounded-xl bg-[#1e293b] border-2 border-green-400/30  hover:border-green-400 transition-all duration-700    
    ${isActive ? "opacity-100 translate-y-0 border-green-400" : "opacity-0 translate-y-10 border-green-400/30"}`}
  >
    <h3 className="text-green-400 font-bold text-lg mb-2">{item.year}</h3>
    <h4 className="text-white text-xl font-semibold mb-3">{item.title}</h4>
    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
  </div>
);
