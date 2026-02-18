// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import * as LucideIcons from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { SpotlightCard } from "../animations/SpotlightCard"; // আপনার এনিমেশন ফোল্ডার থেকে]

// type IconName = keyof typeof LucideIcons;

// interface TopicCardProps {
//   id: string;
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string;
//   color: string;
//   bg: string;
// }

// export default function TopicCard({
//   id,
//   title,
//   description,
//   complexity,
//   iconName,
//   color,
//   bg,
// }: TopicCardProps) {
//   const Icon =
//     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
//     LucideIcons.HelpCircle;

//   return (
//     <Link href={`/topics/${id}`} className="block h-full">
//       <motion.div
//         whileHover={{ y: -5 }}
//         transition={{ duration: 0.2 }}
//         className="h-full"
//       >
//         {/* SpotlightCard ব্যবহার করা হয়েছে যাতে প্রিমিয়াম গ্লো ইফেক্ট পাওয়া যায় */}
//         <SpotlightCard className="h-full border-border/40 bg-card/30 backdrop-blur-md overflow-hidden group">
//           <CardContent className="p-6 h-full flex flex-col">
//             <div className="flex items-start justify-between mb-6">
//               <div
//                 className={cn(
//                   "p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
//                   bg,
//                   color,
//                 )}
//               >
//                 <Icon className="h-6 w-6" />
//               </div>
//               <Badge
//                 variant="outline"
//                 className="font-mono text-[10px] bg-background/50 border-primary/20 text-primary-foreground/80"
//               >
//                 {complexity}
//               </Badge>
//             </div>

//             <div className="space-y-2 flex-grow">
//               <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
//                 {title}
//               </h3>
//               <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
//                 {description}
//               </p>
//             </div>

//             {/* কার্ডের নিচে একটি ছোট ইন্ডিকেটর লাইন (ঐচ্ছিক) */}
//             <div className="mt-4 pt-4 border-t border-border/20 flex items-center text-xs font-medium text-primary/0 group-hover:text-primary transition-all duration-300">
//               Explore Topic
//               <LucideIcons.ArrowRight className="ml-2 h-3 w-3 translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
//             </div>
//           </CardContent>
//         </SpotlightCard>
//       </motion.div>
//     </Link>
//   );
// }

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
//   // নতুন প্রপ যোগ করা হয়েছে কালার কন্ট্রোলের জন্য
//   difficulty?: "easy" | "medium" | "hard";
// }

// export default function TopicCard({
//   id,
//   title,
//   description,
//   complexity,
//   iconName,
//   difficulty = "easy", // ডিফল্ট সহজ রাখা হয়েছে
// }: TopicCardProps) {
//   const Icon =
//     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
//     LucideIcons.HelpCircle;

//   // আপনার Problems Page এর কার্ড কালার অনুযায়ী কনফিগারেশন
//   const colorMap = {
//     easy: {
//       border: "group-hover:border-emerald-500/50",
//       glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
//       iconBg: "bg-emerald-500/10 text-emerald-500",
//       badge: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
//     },
//     medium: {
//       border: "group-hover:border-amber-500/50",
//       glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
//       iconBg: "bg-amber-500/10 text-amber-500",
//       badge: "text-amber-500 border-amber-500/20 bg-amber-500/5",
//     },
//     hard: {
//       border: "group-hover:border-rose-500/50",
//       glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
//       iconBg: "bg-rose-500/10 text-rose-500",
//       badge: "text-rose-500 border-rose-500/20 bg-rose-500/5",
//     },
//   };

//   const theme = colorMap[difficulty];

//   return (
//     <Link href={`/topics/${id}`} className="block h-full">
//       <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
//         <SpotlightCard
//           className={cn(
//             "h-full border-white/5 bg-neutral-900/40 backdrop-blur-xl group transition-all duration-500",
//             theme.border,
//             theme.glow,
//           )}
//         >
//           <CardContent className="p-7 h-full flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between mb-8">
//                 {/* আইকন বক্স যা এখন ডিফিকাল্টি কালার ফলো করবে */}
//                 <div
//                   className={cn(
//                     "p-3.5 rounded-2xl transition-all duration-500 group-hover:scale-110",
//                     theme.iconBg,
//                   )}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </div>

//                 <Badge
//                   variant="outline"
//                   className={cn(
//                     "font-mono text-[10px] px-2.5 py-0.5",
//                     theme.badge,
//                   )}
//                 >
//                   {complexity}
//                 </Badge>
//               </div>

//               <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors">
//                 {title}
//               </h3>
//               <p className="text-sm text-muted-foreground/70 line-clamp-2 leading-relaxed mb-6">
//                 {description}
//               </p>
//             </div>

//             <div
//               className={cn(
//                 "flex items-center text-[11px] font-bold uppercase tracking-widest transition-all duration-300",
//                 difficulty === "easy"
//                   ? "text-emerald-500/60 group-hover:text-emerald-400"
//                   : difficulty === "medium"
//                     ? "text-amber-500/60 group-hover:text-amber-400"
//                     : "text-rose-500/60 group-hover:text-rose-400",
//               )}
//             >
//               Explore Topic
//               <LucideIcons.ArrowRight className="ml-2 h-3 w-3 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
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

  // আপনার Problems Page-এর সেই এক্স্যাক্ট কালার প্যালেট
  const getTheme = () => {
    // Easy - Exact Emerald Match
    if (complexity.includes("O(1)"))
      return {
        base: "emerald",
        border: "border-emerald-500/30 group-hover:border-emerald-500",
        glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
        icon: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
        badge: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5",
        text: "text-emerald-500",
      };

    // Medium - Exact Amber Match
    if (complexity.includes("O(log n)"))
      return {
        base: "amber",
        border: "border-amber-500/30 group-hover:border-amber-500",
        glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
        icon: "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
        badge: "text-amber-500 border-amber-500/30 bg-amber-500/5",
        text: "text-amber-500",
      };

    // Hard - Exact Rose/Ruby Match
    return {
      base: "rose",
      border: "border-rose-500/30 group-hover:border-rose-500",
      glow: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]",
      icon: "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white",
      badge: "text-rose-500 border-rose-500/30 bg-rose-500/5",
      text: "text-rose-500",
    };
  };

  const theme = getTheme();

  return (
    <Link href={`/topics/${id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <SpotlightCard
          className={cn(
            "h-full bg-zinc-950/50 backdrop-blur-3xl transition-all duration-500 border",
            theme.border,
            theme.glow,
          )}
        >
          <CardContent className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-start justify-between mb-8">
                {/* আইকন বক্স যা আপনার প্রবলেম পেজের কার্ডের মতো সলিড ফিল দেবে */}
                <div
                  className={cn(
                    "p-3.5 rounded-2xl transition-all duration-500",
                    theme.icon,
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <Badge
                  variant="outline"
                  className={cn(
                    "font-mono text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-widest",
                    theme.badge,
                  )}
                >
                  {complexity}
                </Badge>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-100 group-hover:text-white transition-colors">
                {title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* নিচের টেক্সট কালারটিও এখন প্রবলেম পেজের সাথে ম্যাচ করবে */}
            <div
              className={cn(
                "mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 opacity-60 group-hover:opacity-100",
                theme.text,
              )}
            >
              View Challenge
              <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
            </div>
          </CardContent>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}
