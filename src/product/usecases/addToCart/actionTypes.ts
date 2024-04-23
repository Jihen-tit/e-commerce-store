export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export interface AddProductToCartAction {
    type: typeof ADD_PRODUCT_TO_CART;
    payload: {
        productId: string;
        quantity: number;
    };
}
