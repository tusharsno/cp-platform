// import { PrismaClient } from "@prisma/client";
// // import { PrismaClient } from "../../generated/prisma";
// // import { PrismaClient } from "@/generated/prisma";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const db = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ডাটাবেস ইউআরএল চেক করুন
const databaseUrl = process.env.DATABASE_URL;

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // টাইপ এরর এড়াতে সরাসরি এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করাই ভালো
    // প্রিজমা অটোমেটিক DATABASE_URL খুঁজে নেয়, তাই আলাদা করে datasources না দিলেও চলে
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
