// src/lib/auth.ts
import { auth, currentUser } from "@clerk/nextjs/server";
import db from "./db"; // Tomar proxy-based db import

export const syncUser = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) return null;

  // ডাটাবেসে ইউজার আছে কিনা চেক করা, না থাকলে তৈরি করা
  const existingUser = await db.user.findUnique({
    where: { clerkId: userId },
  });

  if (!existingUser) {
    return await db.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }

  return existingUser;
};
