export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export interface AddProductToCartAction {
    type: typeof ADD_PRODUCT_TO_CART;
    payload: {
        productId: string;
        quantity: number;
    };
}

export interface RemoveProductFromCartAction {
    type: typeof REMOVE_PRODUCT_FROM_CART;
    payload: string;
}

export type CartActionTypes = AddProductToCartAction | RemoveProductFromCartAction
