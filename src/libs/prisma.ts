import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
      [key: string]: any;
      [key: number]: any;
    }

    interface ProcessEnv {
      [key: string]: string | undefined;
    }
  }
}

type Global = typeof globalThis & {
  prisma: PrismaClient;
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  (global as Global).prisma = new PrismaClient();
  prisma = (global as Global).prisma;
} else {
  if (!(global as Global).prisma) {
    (global as Global).prisma = new PrismaClient();
  }
  prisma = (global as Global).prisma;
}

export default prisma;
