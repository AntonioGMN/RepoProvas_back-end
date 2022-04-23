import * as categoriesService from "../services/categoriesService.js"

export function getCategories(){
  return categoriesService.getCategories()
}