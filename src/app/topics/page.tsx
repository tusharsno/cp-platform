"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutGrid } from "lucide-react";
import TopicCard from "@/components/cards/TopicCard";
import { dsaTopics } from "@/lib/dsa-data";

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 selection:bg-primary/30">
      {/* Background Mesh - Consistency with Hero */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-4"
          >
            {/* Badge - Consistent Styling */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-primary/20 bg-black/[0.03] dark:bg-primary/10 text-slate-500 dark:text-primary mb-2">
              {/* <Sparkles className="h-3.5 w-3.5 animate-pulse" /> */}
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Structured Learning Path
              </span>
            </div>

            {/* Title Update: Italic & Bold Combo */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-[0.9]">
                DSA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/40 not-italic">
                  TOPICS
                </span>
              </h1>
            </div>

            <p className="text-slate-500 dark:text-muted-foreground/60 text-lg max-w-2xl font-medium dark:font-light mt-4">
              Master the fundamentals of data structures and algorithms with our
              carefully curated structured learning paths.
            </p>
          </motion.div>
        </div>

        {/* Topics Grid - Premium Border Handling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dsaTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TopicCard id={topic.id} {...topic} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
