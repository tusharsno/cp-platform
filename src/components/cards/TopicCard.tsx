// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { CardContent } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import * as LucideIcons from "lucide-react";
// // // import { cn } from "@/lib/utils";
// // // import Link from "next/link";
// // // import { SpotlightCard } from "../animations/SpotlightCard";

// // // type IconName = keyof typeof LucideIcons;

// // // interface TopicCardProps {
// // //   id: string;
// // //   title: string;
// // //   description: string;
// // //   complexity: string;
// // //   iconName: string;
// // // }

// // // export default function TopicCard({
// // //   id,
// // //   title,
// // //   description,
// // //   complexity,
// // //   iconName,
// // // }: TopicCardProps) {
// // //   const Icon =
// // //     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
// // //     LucideIcons.HelpCircle;

// // //   // আপনার Problems Page-এর সেই এক্স্যাক্ট কালার প্যালেট
// // //   const getTheme = () => {
// // //     // Easy - Exact Emerald Match
// // //     if (complexity.includes("O(1)"))
// // //       return {
// // //         base: "emerald",
// // //         border: "border-emerald-500/30 group-hover:border-emerald-500",
// // //         glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
// // //         icon: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
// // //         badge: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5",
// // //         text: "text-emerald-500",
// // //       };

// // //     // Medium - Exact Amber Match
// // //     if (complexity.includes("O(log n)"))
// // //       return {
// // //         base: "amber",
// // //         border: "border-amber-500/30 group-hover:border-amber-500",
// // //         glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
// // //         icon: "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
// // //         badge: "text-amber-500 border-amber-500/30 bg-amber-500/5",
// // //         text: "text-amber-500",
// // //       };

// // //     // Hard - Exact Rose/Ruby Match
// // //     return {
// // //       base: "rose",
// // //       border: "border-rose-500/30 group-hover:border-rose-500",
// // //       glow: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]",
// // //       icon: "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white",
// // //       badge: "text-rose-500 border-rose-500/30 bg-rose-500/5",
// // //       text: "text-rose-500",
// // //     };
// // //   };

// // //   const theme = getTheme();

// // //   return (
// // //     <Link href={`/topics/${id}`} className="block h-full">
// // //       <motion.div
// // //         whileHover={{ y: -8 }}
// // //         transition={{ duration: 0.3 }}
// // //         className="h-full"
// // //       >
// // //         <SpotlightCard
// // //           className={cn(
// // //             "h-full bg-zinc-950/50 backdrop-blur-3xl transition-all duration-500 border",
// // //             theme.border,
// // //             theme.glow,
// // //           )}
// // //         >
// // //           <CardContent className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
// // //             <div>
// // //               <div className="flex items-start justify-between mb-8">
// // //                 {/* আইকন বক্স যা আপনার প্রবলেম পেজের কার্ডের মতো সলিড ফিল দেবে */}
// // //                 <div
// // //                   className={cn(
// // //                     "p-3.5 rounded-2xl transition-all duration-500",
// // //                     theme.icon,
// // //                   )}
// // //                 >
// // //                   <Icon className="h-6 w-6" />
// // //                 </div>

// // //                 <Badge
// // //                   variant="outline"
// // //                   className={cn(
// // //                     "font-mono text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-widest",
// // //                     theme.badge,
// // //                   )}
// // //                 >
// // //                   {complexity}
// // //                 </Badge>
// // //               </div>

// // //               <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-100 group-hover:text-white transition-colors">
// // //                 {title}
// // //               </h3>

// // //               <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
// // //                 {description}
// // //               </p>
// // //             </div>

// // //             {/* নিচের টেক্সট কালারটিও এখন প্রবলেম পেজের সাথে ম্যাচ করবে */}
// // //             <div
// // //               className={cn(
// // //                 "mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 opacity-60 group-hover:opacity-100",
// // //                 theme.text,
// // //               )}
// // //             >
// // //               View Challenge
// // //               <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
// // //             </div>
// // //           </CardContent>
// // //         </SpotlightCard>
// // //       </motion.div>
// // //     </Link>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { CardContent } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import * as LucideIcons from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import Link from "next/link";
// // import { SpotlightCard } from "../animations/SpotlightCard";

// // type IconName = keyof typeof LucideIcons;

// // interface TopicCardProps {
// //   id: string;
// //   title: string;
// //   description: string;
// //   complexity: string;
// //   iconName: string;
// // }

// // export default function TopicCard({
// //   id,
// //   title,
// //   description,
// //   complexity,
// //   iconName,
// // }: TopicCardProps) {
// //   const Icon =
// //     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
// //     LucideIcons.HelpCircle;

// //   const getTheme = () => {
// //     // Easy - Emerald
// //     if (complexity.includes("O(1)"))
// //       return {
// //         base: "emerald",
// //         border:
// //           "border-emerald-500/20 dark:border-emerald-500/30 group-hover:border-emerald-500",
// //         glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] dark:group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
// //         icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
// //         badge:
// //           "text-emerald-600 dark:text-emerald-500 border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/5",
// //         text: "text-emerald-600 dark:text-emerald-500",
// //       };

// //     // Medium - Amber
// //     if (complexity.includes("O(log n)"))
// //       return {
// //         base: "amber",
// //         border:
// //           "border-amber-500/20 dark:border-amber-500/30 group-hover:border-amber-500",
// //         glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] dark:group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
// //         icon: "bg-amber-500/10 text-amber-600 dark:text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
// //         badge:
// //           "text-amber-600 dark:text-amber-500 border-amber-500/20 dark:border-amber-500/30 bg-amber-500/5",
// //         text: "text-amber-600 dark:text-amber-500",
// //       };

// //     // Hard - Rose
// //     return {
// //       base: "rose",
// //       border:
// //         "border-rose-500/20 dark:border-rose-500/30 group-hover:border-rose-500",
// //       glow: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.15)] dark:group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]",
// //       icon: "bg-rose-500/10 text-rose-600 dark:text-rose-500 group-hover:bg-rose-500 group-hover:text-white",
// //       badge:
// //         "text-rose-600 dark:text-rose-500 border-rose-500/20 dark:border-rose-500/30 bg-rose-500/5",
// //       text: "text-rose-600 dark:text-rose-500",
// //     };
// //   };

// //   const theme = getTheme();

// //   return (
// //     <Link href={`/topics/${id}`} className="block h-full group">
// //       <motion.div
// //         whileHover={{ y: -8 }}
// //         transition={{ duration: 0.3 }}
// //         className="h-full"
// //       >
// //         <SpotlightCard
// //           className={cn(
// //             "h-full transition-all duration-500 border",
// //             "bg-white dark:bg-zinc-950/50 backdrop-blur-3xl", // Light mode এ white background
// //             theme.border,
// //             theme.glow,
// //           )}
// //         >
// //           <CardContent className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
// //             <div>
// //               <div className="flex items-start justify-between mb-8">
// //                 <div
// //                   className={cn(
// //                     "p-3.5 rounded-2xl transition-all duration-500",
// //                     theme.icon,
// //                   )}
// //                 >
// //                   <Icon className="h-6 w-6" />
// //                 </div>

// //                 <Badge
// //                   variant="outline"
// //                   className={cn(
// //                     "font-mono text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-widest",
// //                     theme.badge,
// //                   )}
// //                 >
// //                   {complexity}
// //                 </Badge>
// //               </div>

// //               <h3 className="text-xl font-bold tracking-tight mb-3 text-slate-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
// //                 {title}
// //               </h3>

// //               <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
// //                 {description}
// //               </p>
// //             </div>

// //             <div
// //               className={cn(
// //                 "mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 opacity-60 group-hover:opacity-100",
// //                 theme.text,
// //               )}
// //             >
// //               View Challenge
// //               <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
// //             </div>
// //           </CardContent>
// //         </SpotlightCard>
// //       </motion.div>
// //     </Link>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import * as LucideIcons from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { SpotlightCard } from "../animations/SpotlightCard";

// type IconName = keyof typeof LucideIcons;

// interface TopicCardProps {
//   id: string;
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string;
// }

// export default function TopicCard({
//   id,
//   title,
//   description,
//   complexity,
//   iconName,
// }: TopicCardProps) {
//   const Icon =
//     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
//     LucideIcons.HelpCircle;

//   // Unified Premium Cyan/Blue Theme (No more multi-colors)
//   const theme = {
//     border:
//       "border-white/[0.08] dark:border-white/[0.1] group-hover:border-cyan-500/50",
//     glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
//     icon: "bg-slate-800/50 text-slate-400 group-hover:bg-cyan-500 group-hover:text-black",
//     badge: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
//     text: "text-cyan-400",
//   };

//   return (
//     <Link href={`/topics/${id}`} className="block h-full group">
//       <motion.div
//         whileHover={{ y: -8 }}
//         transition={{ duration: 0.3 }}
//         className="h-full"
//       >
//         <SpotlightCard
//           className={cn(
//             "h-full transition-all duration-500 border relative overflow-hidden",
//             "bg-[#0a0a0a]/40 backdrop-blur-xl", // ব্যাকগ্রাউন্ডের সাথে ম্যাচ করার জন্য ডার্ক গ্লাস লুকে রাখা হয়েছে
//             theme.border,
//             theme.glow,
//           )}
//         >
//           {/* Subtle Inner Gradient for Premium Feel */}
//           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent pointer-events-none" />

//           <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
//             <div>
//               <div className="flex items-start justify-between mb-8">
//                 <div
//                   className={cn(
//                     "p-3.5 rounded-2xl transition-all duration-500 shadow-inner border border-white/5",
//                     theme.icon,
//                   )}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </div>

//                 <Badge
//                   variant="outline"
//                   className={cn(
//                     "font-mono text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-widest",
//                     theme.badge,
//                   )}
//                 >
//                   {complexity}
//                 </Badge>
//               </div>

//               <h3 className="text-xl font-bold tracking-tight mb-3 text-slate-100 group-hover:text-white transition-colors">
//                 {title}
//               </h3>

//               <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
//                 {description}
//               </p>
//             </div>

//             <div
//               className={cn(
//                 "mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 opacity-60 group-hover:opacity-100",
//                 theme.text,
//               )}
//             >
//               View Challenge
//               <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
//             </div>
//           </CardContent>
//         </SpotlightCard>
//       </motion.div>
//     </Link>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SpotlightCard } from "../animations/SpotlightCard";

type IconName = keyof typeof LucideIcons;

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
}

export default function TopicCard({
  id,
  title,
  description,
  complexity,
  iconName,
}: TopicCardProps) {
  const Icon =
    (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
    LucideIcons.HelpCircle;

  // Premium Subtle Cyan Theme
  const theme = {
    // বর্ডারের কালার আরও কমিয়ে আনা হয়েছে
    border:
      "border-white/[0.05] dark:border-white/[0.08] group-hover:border-cyan-500/30",
    // গ্লো ইফেক্ট অনেক কমানো হয়েছে (Spread 40px থেকে 20px এবং Opacity 0.15 থেকে 0.08)
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]",
    icon: "bg-zinc-900 text-slate-400 group-hover:bg-cyan-500 group-hover:text-black",
    badge: "text-cyan-500/80 border-cyan-500/10 bg-cyan-500/5",
    text: "text-cyan-500/80 group-hover:text-cyan-400",
  };

  return (
    <Link href={`/topics/${id}`} className="block h-full group">
      <motion.div
        whileHover={{ y: -5 }} // মুভমেন্ট একটু কমানো হয়েছে প্রিমিয়াম ফিলের জন্য
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full"
      >
        <SpotlightCard
          className={cn(
            "h-full transition-all duration-500 border relative overflow-hidden",
            "bg-zinc-950/40 backdrop-blur-md", // ব্যাকগ্রাউন্ডের সাথে ব্লেন্ড হওয়ার জন্য
            theme.border,
            theme.glow,
          )}
        >
          {/* কার্ডের ভেতরে খুব হালকা একটি ইনার গ্লো */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-start justify-between mb-8">
                <div
                  className={cn(
                    "p-3 rounded-xl transition-all duration-500 border border-white/5 shadow-sm",
                    theme.icon,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <Badge
                  variant="outline"
                  className={cn(
                    "font-mono text-[9px] px-2 py-0.5 font-semibold tracking-widest",
                    theme.badge,
                  )}
                >
                  {complexity}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold tracking-tight mb-2 text-zinc-200 group-hover:text-white transition-colors">
                {title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 font-light">
                {description}
              </p>
            </div>

            <div
              className={cn(
                "mt-8 flex items-center text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 opacity-40 group-hover:opacity-100",
                theme.text,
              )}
            >
              View Challenge
              <LucideIcons.ArrowRight className="ml-2 h-3 w-3 translate-x-[-2px] group-hover:translate-x-0 transition-transform" />
            </div>
          </CardContent>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}
