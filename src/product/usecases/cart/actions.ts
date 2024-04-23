import {
    ADD_PRODUCT_TO_CART, AddProductToCartAction, REMOVE_PRODUCT_FROM_CART, RemoveProductFromCartAction
} from "@/product/usecases/cart/actionTypes";

export const addProductToCart = (productId: string, quantity: number): AddProductToCartAction => ({
    type   : ADD_PRODUCT_TO_CART,
    payload: {productId, quantity}
})

export const removeProductFromCart = (productId: string): RemoveProductFromCartAction => ({
    type   : REMOVE_PRODUCT_FROM_CART,
    payload: productId
})
