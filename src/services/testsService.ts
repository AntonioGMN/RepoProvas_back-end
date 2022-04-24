import { prisma } from "../database.js";

export function getTests(){
 return prisma.tests.findMany({
   include:{
     teachersDiscipline:{
       select:{
         teacher:{
           select: {
             name: true
           }
         },
         discipline: {
           select: {
             id: true,
             name: true
           }
         }
       }
     }
   }
 })
}