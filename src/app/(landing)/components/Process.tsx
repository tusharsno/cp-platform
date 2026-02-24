// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { BrainCircuit, Terminal, Code2, Rocket, Sparkles } from "lucide-react";

// const steps = [
//   {
//     title: "Choose a Topic",
//     description:
//       "Start with fundamentals like Arrays or jump into advanced DP.",
//     icon: BrainCircuit,
//     color: "from-blue-500 to-cyan-400",
//     beamColor: "via-blue-500",
//   },
//   {
//     title: "Master Concepts",
//     description:
//       "Read interview insights and conceptual overviews curated by experts.",
//     icon: Terminal,
//     color: "from-purple-500 to-pink-500",
//     beamColor: "via-purple-500",
//   },
//   {
//     title: "Solve Problems",
//     description: "Write and test your code in our high-performance workspace.",
//     icon: Code2,
//     color: "from-emerald-500 to-teal-400",
//     beamColor: "via-emerald-500",
//   },
//   {
//     title: "Track Progress",
//     description:
//       "Monitor stats and climb the roadmap as you solve 80+ challenges.",
//     icon: Rocket,
//     color: "from-orange-500 to-yellow-500",
//     beamColor: "via-orange-500",
//   },
// ];

// const Process = () => {
//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-7xl">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
//               <Sparkles className="w-3 h-3" />
//               The Ecosystem
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
//               Mastery in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//                 4 Simple Steps
//               </span>
//             </h2>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="group relative"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               {/* Card Body */}
//               <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-card/50 backdrop-blur-sm hover:border-white/20 hover:bg-card/80 transition-all duration-500 relative overflow-hidden">
//                 {/* 1. Icon Container with Glow (Restored) */}
//                 <div
//                   className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-gradient-to-br ${step.color} p-[1px]`}
//                 >
//                   <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center">
//                     <step.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   {/* Background Glow Effect */}
//                   <div
//                     className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
//                   />
//                 </div>

//                 {/* 2. Text Content */}
//                 <div className="space-y-3 relative z-10">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs font-mono text-muted-foreground opacity-50 italic">
//                       0{index + 1}.
//                     </span>
//                     <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors italic">
//                       {step.title}
//                     </h3>
//                   </div>
//                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* 3. Bottom Decorative Beam (Restored) */}
//                 <div
//                   className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${step.beamColor} to-transparent`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Terminal,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Choose a Topic",
    description:
      "Start with fundamentals like Arrays or jump into advanced DP.",
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-400",
    beamColor: "via-blue-500",
    link: "/topics", // তোমার টপিকস পেজ
  },
  {
    title: "Master Concepts",
    description:
      "Read interview insights and conceptual overviews curated by experts.",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    beamColor: "via-purple-500",
    link: "/roadmap", // তোমার রোডম্যাপ পেজ
  },
  {
    title: "Solve Problems",
    description: "Write and test your code in our high-performance workspace.",
    icon: Code2,
    color: "from-emerald-500 to-teal-400",
    beamColor: "via-emerald-500",
    link: "/problems", // তোমার প্রবলেম লিস্ট পেজ
  },
  {
    title: "Track Progress",
    description:
      "Monitor stats and climb the roadmap as you solve 80+ challenges.",
    icon: Rocket,
    color: "from-orange-500 to-yellow-500",
    beamColor: "via-orange-500",
    link: "/profile", // ইউজার প্রোফাইল বা ড্যাশবোর্ড
  },
];

const Process = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-background">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Removed Sparkles Logo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Step-by-Step Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 italic">
              How it{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase not-italic">
                Works
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={step.link}>
                <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-card/50 backdrop-blur-sm hover:border-white/20 hover:bg-card/80 transition-all duration-500 relative overflow-hidden cursor-pointer">
                  {/* Icon Container with Glow */}
                  <div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-gradient-to-br ${step.color} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div
                      className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground opacity-50 italic">
                        0{index + 1}.
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors italic">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>

                    {/* Learn More link appearance */}
                    <div className="pt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Bottom Decorative Beam */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${step.beamColor} to-transparent`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
