import * as testsService from "../services/testsService.js"
import * as error from "../utils/errorUtils.js"

export function getTests(){
  return testsService.getTests()
}

export async function updateViews(id: number){
  const tests = await testsService.getTests();
  const testsIds = tests.map(t => t.id);

  const validateId = testsIds.includes(id);
  if(!validateId) throw error.notFound("id on update of views was invalid");
  
  return testsService.updateViews(id);
}