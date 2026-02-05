export default function EducationSection() {
  return (
    // Education Section 
      <section id="education" className="py-24 px-6 bg-[#0f172a] fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-green-400">Education</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#1e293b] border-2 border-green-400/30 rounded-2xl p-10 hover:border-green-400 transition-all duration-300">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">2020 – 2024</h3>
<h4 className="text-xl font-semibold text-white mb-4">
  B.Tech in Computer Science Engineering
</h4>
<p className="text-gray-400 leading-relaxed font-light">
  Completed Bachelor of Technology in Computer Science Engineering from
  AIMT Lucknow. Developed strong fundamentals in programming, data structures,
  algorithms, and modern web technologies.
</p>

                  </div>
                </div>
              </div>
            </div>

            {/* Education Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#1e293b] border-2 border-green-400/30 rounded-2xl p-10 hover:border-green-400 transition-all duration-300">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">2023 – 2024</h3>
<h4 className="text-xl font-semibold text-white mb-4">
  MERN Stack Web Development Training
</h4>
<p className="text-gray-400 leading-relaxed font-light">
  Completed hands-on MERN Stack Web Development training from Ducat Noida,
  focusing on MongoDB, Express.js, React.js, and Node.js. Built full-stack
  applications and worked on real-world projects.
</p>

                  </div>
                </div>
              </div>
            </div>

            {/* Education Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#1e293b] border-2 border-green-400/30 rounded-2xl p-10 hover:border-green-400 transition-all duration-300">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">2018 – 2020</h3>
<h4 className="text-xl font-semibold text-white mb-4">
  Intermediate (12th) – Science Stream
</h4>
<p className="text-gray-400 leading-relaxed font-light">
  Completed intermediate education from AS Sabeel Public School with a focus
  on science subjects, strengthening problem-solving and analytical skills.
</p>

                  </div>
                </div>
              </div>
            </div>

            {/* Education Card 4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#1e293b] border-2 border-green-400/30 rounded-2xl p-10 hover:border-green-400 transition-all duration-300">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">2015 – 2016</h3>
<h4 className="text-xl font-semibold text-white mb-4">
  High School (10th Standard)
</h4>
<p className="text-gray-400 leading-relaxed font-light">
  Completed high school education from JM High School, developing a strong
  academic foundation and disciplined learning approach.
</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
