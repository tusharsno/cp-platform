import { dsaTopics } from "@/lib/dsa-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, PlayCircle, Lock } from "lucide-react";

// In Next.js 16, params is a Promise that must be awaited
export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id;

  // Case-insensitive search to prevent 404 mismatch (Image 11 fix)
  const topic = dsaTopics.find((t) => {
    if (!t || !t.id || !rawId) return false;
    return t.id.toLowerCase() === rawId.toLowerCase();
  });

  if (!topic) return notFound(); // Standard 404 if topic id doesn't exist

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 pt-20 md:pt-28 pb-12 transition-colors duration-300">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Back Link */}
        <Link
          href="/topics"
          className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 md:mb-10 group w-fit"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Topics</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-600 dark:text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
              Topic Module
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-blue-500/30"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
            {topic.title}
          </h1>

          <div className="flex flex-wrap gap-3 items-center">
            <span
              className={`${topic.bg} ${topic.color} px-3 py-1 md:px-4 md:py-1.5 rounded-md text-[10px] md:text-xs font-mono font-bold border border-current/20 uppercase`}
            >
              {topic.complexity}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono">
              • 30 min read
            </span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Topic Description */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Overview
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed italic text-sm md:text-base">
                "{topic.detailedContent}"
              </p>
            </div>

            {/* Problems List */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50">
              <h2 className="text-lg md:text-xl font-bold mb-8 italic">
                Practice Problems
              </h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-400 font-mono text-sm">
                        0{i}
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-semibold group-hover:text-blue-500 transition-colors">
                          Algorithm Challenge {i}
                        </p>
                        <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                          Easy
                        </span>
                      </div>
                    </div>
                    <PlayCircle className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 bg-blue-50 dark:bg-blue-600/5 rounded-2xl md:rounded-3xl border border-blue-100 dark:border-blue-500/10 lg:sticky lg:top-28">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Lock className="w-4 h-4" /> Interview Tips
              </h3>
              <ul className="text-xs md:text-sm text-slate-600 dark:text-zinc-400 space-y-4">
                <li>• Optimize for Space & Time Complexity.</li>
                <li>• Crucial for Top Tech Interview cycles.</li>
              </ul>
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
