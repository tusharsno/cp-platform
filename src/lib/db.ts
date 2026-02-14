import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: undefined | PrismaClient;
}

const db = new Proxy({} as PrismaClient, {
  get(_target, prop: string | symbol) {
    if (!globalThis.prisma) {
      globalThis.prisma = new PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
      });
    }
    return Reflect.get(globalThis.prisma, prop);
  },
});

export default db;
