import { prisma } from "../database.js";

export function getCategories(){
 return prisma.categories.findMany({
   include:{
     tests: {
       select: {
        name: true,
        pdfUrl: true,
        teachersDiscipline:{
          select:{
            teacher:{
              select: {
                name: true
              }
            },
            discipline: {
              select: {
                name: true
              }
            }
          }
        }
       }
     }
   }
 })
}