import * as testsService from "../services/testsService.js"

export function getTests(){
  return testsService.getTests()
}

export function updateViews(id: number){
  return testsService.updateViews(id)
}