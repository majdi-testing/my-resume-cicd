
const Skills = () => {
  

  const skills = [
  {
    title: "Next.js",
    gradient: "from-gray-700 to-gray-900",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 180 180" fill="none">
        <mask id="mask" height="180" width="180">
          <rect fill="white" height="180" width="180" />
        </mask>
        <g mask="url(#mask)">
          <circle cx="90" cy="90" r="90" fill="white" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
            fill="url(#nextjs-logo-gradient)"
          />
          <rect fill="url(#nextjs-logo-gradient)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient id="nextjs-logo-gradient">
            <stop stopColor="#4ade80" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "React.js",
    gradient: "from-blue-400 to-cyan-500",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="-11.5 -10.23174 23 20.46348" fill="#61dafb">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    title: "JavaScript",
    gradient: "from-yellow-400 to-yellow-600",
    icon: (
      <div className="w-16 h-16 mb-4 rounded bg-yellow-400 flex items-center justify-center text-3xl font-bold text-gray-900">
        JS
      </div>
    ),
  },
  {
    title: "Cloud Computing",
    subtitle: "(AWS & Azure)",
    gradient: "from-orange-400 to-blue-500",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
          fill="url(#cloud-gradient)"
        />
        <defs>
          <linearGradient id="cloud-gradient">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="50%" stopColor="#0078D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Tailwind CSS",
    gradient: "from-cyan-400 to-blue-500",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 54 33" fill="none">
                  <g clipPath="url(#prefix__clip0)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
    ),
  },
  {
    title: "Node.js",
    gradient: "from-green-500 to-green-700",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 256 289" fill="#539E43">
                  <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-61.218c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.326 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.021-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z" />
                </svg>
    ),
  },
  {
    title: "MongoDB",
    gradient: "from-green-600 to-green-800",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 32 32" fill="#4DB33D">
                  <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" />
                  <path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" />
                </svg>
    ),
  },
  {
    title: "Git & GitHub",
    gradient: "from-purple-500 to-purple-700",
    icon: (
      <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-4.609-2.807-5.624-5.479-5.921z" />
                </svg>
    ),
  },
];

  return (
    <section id="skills" className="py-24 px-6 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-green-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-light">
          Here are some of the technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity ${
    skill.gradient
  }`}></div>

              <div className="relative bg-[#0f172a] border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center min-h-[180px]">
                {skill.icon}
                <h3 className="text-xl font-bold text-center text-white">
                  {skill.title}
                </h3>
                {skill.subtitle && (
                  <p className="text-sm text-gray-400 mt-1">{skill.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;