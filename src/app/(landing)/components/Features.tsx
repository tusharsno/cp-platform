// "use client";

// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   Code,
//   LineChart,
//   Zap,
//   ChevronRight,
//   ShieldCheck,
// } from "lucide-react";

// const features = [
//   {
//     title: "Topic-wise Learning",
//     desc: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
//     icon: BookOpen,
//     className: "md:col-span-2",
//     color: "from-blue-500 to-cyan-400",
//     beamColor: "via-blue-500",
//   },
//   {
//     title: "Interactive Coding",
//     desc: "Write and submit code directly in the browser with instant feedback and an optimized online judge.",
//     icon: Code,
//     className: "md:row-span-2 justify-center", // Added justify-center for layout
//     color: "from-purple-500 to-pink-500",
//     beamColor: "via-purple-500",
//   },
//   {
//     title: "Track Progress",
//     desc: "Detailed statistics and real-time heatmaps for your journey.",
//     icon: LineChart,
//     className: "",
//     color: "from-emerald-500 to-teal-400",
//     beamColor: "via-emerald-500",
//   },
//   {
//     title: "Skill Progression",
//     desc: "Earn elite badges and certifications as you level up your skills.",
//     icon: Zap,
//     className: "",
//     color: "from-yellow-500 to-orange-400",
//     beamColor: "via-yellow-500",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-7xl">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-primary/20 bg-black/[0.03] dark:bg-primary/10 text-slate-500 dark:text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
//           >
//             <ShieldCheck className="w-3 h-3" />
//             The Ecosystem
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase text-slate-900 dark:text-white leading-tight">
//             Everything You Need <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/50 not-italic uppercase">
//               To Excel
//             </span>
//           </h2>

//           <p className="text-slate-500 dark:text-muted-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed font-medium dark:font-light">
//             A high-performance environment designed to master algorithms and
//             dominate technical interviews.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className={`group relative rounded-[2rem] border border-black/[0.06] dark:border-white/[0.08] bg-slate-50/50 dark:bg-card/50 backdrop-blur-sm p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-card/80 shadow-sm dark:shadow-none ${f.className}`}
//             >
//               {/* Top Section */}
//               <div className="relative z-10 flex items-start justify-between mb-auto">
//                 <div
//                   className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${f.color} p-[1px]`}
//                 >
//                   <div className="w-full h-full rounded-[11px] bg-white dark:bg-background flex items-center justify-center transition-colors group-hover:bg-transparent">
//                     <f.icon className="w-6 h-6 text-slate-800 dark:text-white group-hover:text-white transition-colors duration-500" />
//                   </div>
//                 </div>
//                 <ChevronRight className="w-5 h-5 text-slate-300 dark:text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
//               </div>

//               {/* Text Content */}
//               <div className="relative z-10 mt-4">
//                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 italic uppercase tracking-tight group-hover:text-primary transition-colors">
//                   {f.title}
//                 </h3>
//                 <p className="text-slate-500 dark:text-muted-foreground/50 text-sm leading-relaxed max-w-[280px] font-medium dark:font-light">
//                   {f.desc}
//                 </p>
//               </div>

//               {/* Background Glows */}
//               <div
//                 className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${f.color} blur-[60px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700`}
//               />

//               {/* Bottom Decorative Beam */}
//               <div
//                 className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${f.beamColor} to-transparent`}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  LineChart,
  Zap,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Topic-wise Learning",
    desc: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
    icon: BookOpen,
    className: "md:col-span-2",
    color: "from-blue-500 to-cyan-400",
    beamColor: "via-blue-500",
  },
  {
    title: "Interactive Coding",
    desc: "Write and submit code directly in the browser with instant feedback and an optimized online judge system.",
    icon: Code,
    className: "md:row-span-2",
    color: "from-purple-500 to-pink-500",
    beamColor: "via-purple-500",
    isTall: true, // Marker for tall card styling
  },
  {
    title: "Track Progress",
    desc: "Detailed statistics and real-time heatmaps for your journey.",
    icon: LineChart,
    className: "",
    color: "from-emerald-500 to-teal-400",
    beamColor: "via-emerald-500",
  },
  {
    title: "Skill Progression",
    desc: "Earn elite badges and certifications as you level up your skills.",
    icon: Zap,
    className: "",
    color: "from-yellow-500 to-orange-400",
    beamColor: "via-yellow-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-primary/20 bg-black/[0.03] dark:bg-primary/10 text-slate-500 dark:text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            The Ecosystem
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase text-slate-900 dark:text-white leading-[0.9]">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/50 not-italic uppercase">
              To Excel
            </span>
          </h2>

          <p className="text-slate-500 dark:text-muted-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed font-medium dark:font-light mt-4">
            A high-performance environment designed to master algorithms and
            dominate technical interviews.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] border border-black/[0.08] dark:border-white/[0.08] bg-slate-50/50 dark:bg-card/40 backdrop-blur-sm p-10 flex flex-col overflow-hidden transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-card/60 shadow-sm dark:shadow-none ${f.className}`}
            >
              {/* Dynamic Spacing based on Card Height */}
              <div
                className={`relative z-10 flex flex-col h-full ${f.isTall ? "justify-between" : "justify-between"}`}
              >
                {/* Icon & Arrow Row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${f.color} p-[1px] shadow-lg shadow-black/5`}
                  >
                    <div className="w-full h-full rounded-[15px] bg-white dark:bg-slate-950 flex items-center justify-center transition-colors group-hover:bg-transparent">
                      <f.icon className="w-7 h-7 text-slate-800 dark:text-white group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center bg-white/50 dark:bg-white/5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Text Content Area */}
                <div className={`${f.isTall ? "mb-4" : ""}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 italic uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-slate-500 dark:text-muted-foreground/60 text-sm md:text-base leading-relaxed max-w-[320px] font-medium dark:font-light">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div
                className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${f.color} blur-[80px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-[0.15] transition-opacity duration-1000`}
              />

              {/* Interactive Beam */}
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 bg-gradient-to-r from-transparent ${f.beamColor} to-transparent`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
