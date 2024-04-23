import { ADD_PRODUCT_TO_CART, AddProductToCartAction } from "@/product/usecases/addToCart/actionTypes";

export const addProductToCart = (productId: string, quantity: number): AddProductToCartAction => ({
    type: ADD_PRODUCT_TO_CART,
    payload: {productId, quantity}
})
