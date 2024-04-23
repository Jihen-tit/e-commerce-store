import { SET_CATEGORY, SetCategoryAction } from "@/category/usecases/setCategory/actionTypes";

const initialState: string = ""

export const setCategoryReducer = (state = initialState, action: SetCategoryAction): string => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.payload
        default:
            return state
    }
}
