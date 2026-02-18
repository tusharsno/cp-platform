// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: undefined | PrismaClient;
// }

// const db = new Proxy({} as PrismaClient, {
//   get(_target, prop: string | symbol) {
//     if (!globalThis.prisma) {
//       globalThis.prisma = new PrismaClient({
//         datasourceUrl: process.env.DATABASE_URL,
//       });
//     }
//     return Reflect.get(globalThis.prisma, prop);
//   },
// });

// export default db;

// src/lib/db.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  // 1. Connection pool toiri kora
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  // 2. Neon/Postgres adapter create kora
  const adapter = new PrismaPg(pool);
  // 3. Adapter-ti client-e pass kora (Ekhon constructor ar faka thakbe na)
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;
