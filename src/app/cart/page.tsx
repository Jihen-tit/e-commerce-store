"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux-configuration/appState";

import { productsSelector } from "@/product/usecases/list/selectors";
import { productsInCartSelector } from "@/product/usecases/cart/selectors";
import { ProductWithQuantityCard } from "@/product/adapters/primaries/components/productWithQuantity.card";
import { Banner } from "@/components/Banner/Banner";

export default function CartPage() {

    const dispatch = useDispatch()

    const cart = useSelector((state: AppState) => productsInCartSelector(state))
    const products = useSelector((state: AppState) => productsSelector(state))

    let price = 0

    return (
        <main className="min-h-screen">
            <Banner title="Votre panier"/>

            <div className="w-full max-w-7xl p-24 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    {cart.map(item => {
                        const foundProduct = products?.find(element => element.id === item.productId)
                        if (foundProduct) {
                            price = price + foundProduct.price * item.quantity
                            return <ProductWithQuantityCard key={foundProduct.id} product={foundProduct} quantity={item.quantity}/>
                        }
                    })}

                    <h3 className="my-10 text-2xl font-bold text-right">Prix Total : {price} €</h3>
                </div>
            </div>
        </main>
    );
}
