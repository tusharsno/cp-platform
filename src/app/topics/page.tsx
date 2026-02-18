// import TopicCard from "@/components/cards/TopicCard";
// import { dsaTopics } from "@/lib/dsa-data";

// export default function TopicsPage() {
//   return (
//     <div className="min-h-screen bg-background pt-24 pb-12">
//       <div className="container px-4 mx-auto">
//         <div className="mb-12">
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

// update:
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TopicCard from "@/components/cards/TopicCard";
import { dsaTopics } from "@/lib/dsa-data";

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 selection:bg-emerald-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {/* Added Badge while keeping your original text structure */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 mb-2">
              <Sparkles className="h-3 w-3 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Structured Learning Path
              </span>
            </div>

            {/* Original Text Sizes Maintained */}
            <h1 className="text-4xl font-bold tracking-tight text-white pt-3">
              DSA Topics
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl">
              Master the fundamentals with our structured learning paths.
            </p>
          </motion.div>
        </div>

        {/* Topics Grid - Keep Gap-6 as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsaTopics.map((topic) => (
            <TopicCard key={topic.id} id={topic.id} {...topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
