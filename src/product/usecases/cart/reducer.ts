import { ADD_PRODUCT_TO_CART, CartActionTypes, REMOVE_PRODUCT_FROM_CART } from "@/product/usecases/cart/actionTypes";
import { ProductCart } from "@/product/domain/entities/cart";

const initialState: ProductCart[] = []

export const addProductToCartReducer = (state = initialState, action: CartActionTypes): ProductCart[] => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return addToCart(state, action.payload.productId, action.payload.quantity)
        case REMOVE_PRODUCT_FROM_CART:
            return removeFromCart(state, action.payload)
        default:
            return state
    }
}

const addToCart = (oldProducts: ProductCart[], productId: string, quantity: number) => {
    const foundIndex = oldProducts.findIndex(item => item.productId == productId)
    if (foundIndex > -1) {
        oldProducts.splice(foundIndex, 1)
    }
    return [...oldProducts, new ProductCart(productId, quantity)]
}

const removeFromCart = (oldProducts: ProductCart[], productId: string) => {
    const foundIndex = oldProducts.findIndex(item => item.productId == productId)
    if (foundIndex > -1) {
        oldProducts.splice(foundIndex, 1)
    }
    return [...oldProducts]
}
