"use server";

// রিকোয়ারমেন্ট ৪: ব্যাকএন্ডে ডাটা পাঠানোর ফাংশন
export async function createProblem(formData: FormData) {
  const title = formData.get("title");
  const topic = formData.get("topic");

  // ডাটা ভ্যালিডেশন (রিকোয়ারমেন্ট ৪: Client-side checks)
  if (!title || !topic) return { error: "Fields are required!" };

  console.log("Saving to DB:", { title, topic });

  // এখানে আপনার ডাটাবেস লজিক থাকবে
  return { success: true };
}

// Update:
// "use server";

// import db from "./db";
// import { auth } from "@clerk/nextjs/server";

// export const saveSolution = async (
//   problemId: string,
//   code: string,
//   status: string,
// ) => {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkId },
//   });

//   if (!user) throw new Error("User not found in database");

//   // ডাটাবেসে সলিউশন সেভ করা
//   // এখানে 'where' কন্ডিশনটি আপনার Prisma Schema-র সাথে মিল থাকতে হবে
//   return await db.solution.upsert({
//     where: {
//       // যদি স্কিমাতে @@unique([userId, problemId]) থাকে তবে এটি কাজ করবে
//       // অন্যথায় শুধু id ফিল্ড ব্যবহার করলে নিশ্চিত করুন সেটি সঠিক ফরমেটে আছে
//       id: `${user.id}-${problemId}`,
//     },
//     update: {
//       code,
//       status,
//     },
//     create: {
//       id: `${user.id}-${problemId}`,
//       userId: user.id,
//       problemId,
//       code,
//       status,
//       language: "javascript",
//     },
//   });
// };
