// "use client";

// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const SpotlightCard = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
//   const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     mouseX.set(e.clientX - left);
//     mouseY.set(e.clientY - top);
//   };

//   // Border-er teal color r sharp logic
//   const background = useTransform(
//     [springX, springY],
//     ([x, y]) =>
//       `radial-gradient(120px circle at ${x}px ${y}px, #2DD4BF, transparent 80%)`,
//   );

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className={cn(
//         "relative group rounded-[12px] p-[1px] bg-transparent",
//         className,
//       )}
//     >
//       {/* SHARP BORDER LAYER: Eita shudhu border toiri korbe */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         style={{
//           background,
//           WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//         }}
//       />

//       {/* Internal Content Area: Background color Prisma-r moto */}
//       <div className="relative z-10 bg-[#08090a] rounded-[11px] h-full w-full p-6 group-hover:border-transparent transition-colors">
//         {children}
//       </div>
//     </div>
//   );
// };
