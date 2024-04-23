"use client";

import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/redux-configuration/appState";
import { loadProducts } from "@/product/usecases/list/actions";
import { loadProductsLoadingSelector, productsSelector } from "@/product/usecases/list/selectors";
import { ProductCard } from "@/product/adapters/primaries/components/product.card";
import { Banner } from "@/components/Banner/Banner";

export default function Home() {

    const dispatch = useDispatch()

    const loading = useSelector((state: AppState) => loadProductsLoadingSelector(state))
    const products = useSelector((state: AppState) => productsSelector(state))

    useEffect(() => {
        if (!products) {
            dispatch(loadProducts())
        }
    }, [dispatch, products])

    return (
        <main className="min-h-screen">
            <Banner title="Tous les produits"/>

            <div className="w-full max-w-7xl p-24 mx-auto">
                {loading && <p className="text-center font-bold mb-24 ">Loading...</p>}

                <div className="grid grid-cols-4 gap-6">
                    {products && products.map(item => <ProductCard key={item.id} product={item}/>)}
                </div>
            </div>
        </main>
    );
}
