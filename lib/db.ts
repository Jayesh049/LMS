// for saving us from hotreload we are using globalThis

import { PrismaClient } from "@prisma/client";


declare global {
    var prisma: PrismaClient | undefined;
};

// if prisma is there onhot reoload then we will use this otherwise new prisma client is there always 
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production" ) globalThis.prisma = db;



// whenever we are trying to create newPrismaClient on hotreoload it occurs to overflow
// export const db = new PrismaClient();