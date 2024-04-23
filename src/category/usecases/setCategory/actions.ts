import { SET_CATEGORY, SetCategoryAction } from "@/category/usecases/setCategory/actionTypes";

export const setCategory = (category: string): SetCategoryAction => ({
    type   : SET_CATEGORY,
    payload: category
})
