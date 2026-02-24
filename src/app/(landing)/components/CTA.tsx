// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, UserPlus } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py-20 dark:bg-background relative overflow-hidden">
//       {/* Background Subtle Glow - Reduced Size */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container px-6 mx-auto max-w-4xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="relative rounded-[2rem] border border-white/[0.03] bg-[#0A0C14]/40 backdrop-blur-sm p-10 md:p-16 text-center overflow-hidden shadow-2xl"
//         >
//           {/* Subtle Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

//           <div className="relative z-10">
//             {/* Title - Reduced from 6xl to 4xl/5xl to balance with Hero */}
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
//               Ready to Start Your <br />
//               <span className="text-primary">DSA Journey?</span>
//             </h2>

//             {/* Description - Made more compact */}
//             <p className="max-w-lg mx-auto text-gray-400 text-sm md:text-base mb-10 leading-relaxed">
//               Join thousands of students learning data structures and
//               algorithms. Track your progress and improve your problem-solving
//               skills today.
//             </p>

//             {/* <div className="flex justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="h-12 px-8 rounded-full font-bold text-base shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 bg-primary text-primary-foreground"
//               >
//                 <Link href="/auth/sign-up" className="flex items-center gap-2">
//                   Create Free Account <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div> */}
//             {/* Ultra-Premium Glass Button */}
//             <div className="flex justify-center">
//               <Link href="/auth/sign-up" className="group/btn relative">
//                 {/* Subtle Outer Glow */}
//                 <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition duration-500" />

//                 <button className="relative flex items-center gap-3 px-8 h-14 bg-[#0A0C14] border border-white/10 hover:border-primary/50 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-2xl overflow-hidden">
//                   {/* Sliding Shine Effect */}
//                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform" />
//                   GET STARTED FOR FREE
//                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
//                 </button>
//               </Link>
//             </div>

//             {/* Minimal Trust Indicator */}
//             <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-[11px] font-bold uppercase tracking-widest">
//               <UserPlus className="w-3 h-3 text-primary/50" />
//               <span>Free forever for early users</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Zap } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-5xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative rounded-[2.5rem] border border-white/[0.05] bg-card/20 backdrop-blur-sm p-12 md:p-20 text-center overflow-hidden group"
//         >
//           {/* Subtle Background Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

//           <div className="relative z-10">
//             {/* Minimal Badge */}
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
//               <Zap className="w-3 h-3 text-primary" />
//               Join the Elite
//             </div>

//             {/* Title - Restored your title with my premium styling */}
//             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 leading-[1] italic uppercase">
//               Ready to Start Your <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-white/50 not-italic uppercase">
//                 DSA Journey?
//               </span>
//             </h2>

//             <p className="max-w-xl mx-auto text-muted-foreground/50 text-sm md:text-base mb-12 font-light leading-relaxed tracking-wide">
//               Track your progress and improve your problem-solving skills today.
//               Access 80+ challenges curated for high-performance learning.
//             </p>

//             {/* Ultra-Premium Glass Link */}
//             <div className="flex justify-center">
//               <Link
//                 href="/auth/sign-up"
//                 className="group/btn relative flex items-center gap-3 px-8 h-14 bg-[#0A0C14] border border-white/10 hover:border-primary/50 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-2xl overflow-hidden"
//               >
//                 <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition duration-500 -z-10" />
//                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
//                 Create Free Account
//                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
//               </Link>
//             </div>

//             {/* Social Proof Line */}
//             <div className="mt-12 flex items-center justify-center gap-4">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="w-6 h-6 rounded-full border-2 border-[#0A0C14] bg-muted/20"
//                   />
//                 ))}
//               </div>
//               <p className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest">
//                 80+ problems solved today
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <style jsx global>{`
//         @keyframes shimmer {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] border border-black/[0.05] dark:border-white/[0.05] bg-slate-50/50 dark:bg-card/20 backdrop-blur-sm p-12 md:p-20 text-center overflow-hidden group shadow-sm dark:shadow-none"
        >
          {/* Subtle Background Grid - Adjusted for Light/Dark */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative z-10">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] text-slate-500 dark:text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <Zap className="w-3 h-3 text-primary" />
              Join the Elite
            </div>

            {/* Title - Fixed for Light/Dark Visibility */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1] italic uppercase">
              Ready to Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/50 not-italic uppercase">
                DSA Journey?
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-slate-500 dark:text-muted-foreground/50 text-sm md:text-base mb-12 font-medium dark:font-light leading-relaxed tracking-wide">
              Track your progress and improve your problem-solving skills today.
              Access 80+ challenges curated for high-performance learning.
            </p>

            {/* Button - Dark Background on both modes for contrast */}
            <div className="flex justify-center">
              <Link
                href="/auth/sign-up"
                className="group/btn relative flex items-center gap-3 px-8 h-14 bg-slate-900 dark:bg-[#0A0C14] border border-white/10 hover:border-primary/50 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-2xl overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition duration-500 -z-10" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                Create Free Account
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
              </Link>
            </div>

            {/* Social Proof Line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white dark:border-[#0A0C14] bg-slate-200 dark:bg-muted/20"
                  />
                ))}
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-muted-foreground/30 uppercase tracking-widest">
                80+ problems solved today
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
