"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// টাইপ ডিফাইন করা যাতে 'any' ব্যবহার করতে না হয়
type IconName = keyof typeof LucideIcons;

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
  color: string;
  bg: string;
}

export default function TopicCard({
  id,
  title,
  description,
  complexity,
  iconName,
  color,
  bg,
}: TopicCardProps) {
  // এখানে (LucideIcons as any) এর বদলে নিচের লাইনটি ব্যবহার করুন
  const Icon =
    (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
    LucideIcons.HelpCircle;

  return (
    <Link href={`/topics/${id}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 cursor-pointer transition-all">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={cn("p-3 rounded-xl", bg, color)}>
                <Icon className="h-6 w-6" />
              </div>
              <Badge variant="secondary" className="font-mono text-[10px]">
                {complexity}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}

// import TopicCard from "@/components/cards/TopicCard";
// import { dsaTopics } from "@/lib/dsa-data";

// export default function TopicsPage() {
//   return (
//     <div className="min-h-screen bg-background pt-24 pb-12">
//       <div className="container px-4 mx-auto">
//         <div className="mb-12">
//           {/* --- The New Badge Section --- */}
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//             </span>
//             <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
//               Curated Curriculum
//             </span>
//           </div>
//           {/* ---------------------------- */}

//           <h1 className="text-4xl font-bold tracking-tight">DSA Topics</h1>
//           <p className="text-muted-foreground mt-2 text-lg">
//             Master the fundamentals with our structured learning paths.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {dsaTopics.map((topic) => (
//             <TopicCard key={topic.id} {...topic} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
