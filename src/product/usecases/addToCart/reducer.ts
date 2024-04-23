import { ADD_PRODUCT_TO_CART, AddProductToCartAction } from "@/product/usecases/addToCart/actionTypes";
import { ProductCart } from "@/product/domain/entities/cart";

const initialState: ProductCart[] = []

export const addProductToCartReducer = (state = initialState, action: AddProductToCartAction): ProductCart[] => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return addToCart(state, action.payload.productId, action.payload.quantity)
        default:
            return state
    }
}
const addToCart = (oldProducts: ProductCart[], productId: string, quantity: number) => {
    console.log(productId, oldProducts)
    console.log(oldProducts.findIndex(item => item.productId == productId))
    const foundIndex = oldProducts.findIndex(item => item.productId == productId)
    if (foundIndex > -1) {
        oldProducts.splice(foundIndex, 1)
    }
    return [...oldProducts, new ProductCart(productId, quantity)]
}
