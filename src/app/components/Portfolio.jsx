// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github, Globe } from "lucide-react";

const Portfolio = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true,
  // });

  const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with payment integration and admin dashboard",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",

  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with real-time updates",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard for social media management and insights",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",
  },
  {
    title: "Weather Forecast App",
    desc: "Real-time weather updates with beautiful UI and geolocation",
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",
  },
  {
    title: "Portfolio Builder",
    desc: "Create stunning portfolios with drag and drop interface",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",
  },
  {
    title: "Fitness Tracking App",
    desc: "Track workouts, nutrition, and progress with AI insights",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    viewproject:"NA",
    sourcecode:"",
  },
];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Latest <span className="text-green-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-light">
          Check out some of my recent work and projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>

              <div className="relative bg-[#1e293b] rounded-2xl overflow-hidden border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 hover:scale-105">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed font-light">
                    {project.desc}
                  </p>

                  <div className="flex gap-4 pt-4">
                      <button
                        size="sm"
                        className="flex-1 rounded-md h-8 bg-green-400 hover:bg-green-500 text-[#0f172a] font-semibold text-sm px-3 transition-all duration-300 hover:scale-105"
                      >
                        View Project
                      </button>
                      <button
                        
                        className="flex-1 border border-green-400 text-green-400 hover:bg-green-400 h-8  rounded-md text-sm hover:text-[#0f172a] px-3 font-semibold transition-all duration-300 bg-transparent"
                      >
                        Source Code
                      </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;