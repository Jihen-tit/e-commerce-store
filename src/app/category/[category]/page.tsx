"use client";

import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/redux-configuration/appState";
import { productsSelector } from "@/product/usecases/list/selectors";
import { ProductCard } from "@/product/adapters/primaries/components/product.card";
import { categorySelector } from "@/category/usecases/setCategory/selectors";
import { Product } from "@/product/domain/entities/product";

export default function ProductsByCategories() {

    const dispatch = useDispatch()

    const category = useSelector((state: AppState) => categorySelector(state))
    const products = useSelector((state: AppState) => productsSelector(state))

    const [productsByCategory, setProductsByCategory] = useState<Product[]>([])

    useEffect(() => {
        if (category.length > 0 && products) {
            const data = products.filter(item => item.category === category)
            setProductsByCategory(data)
        }
    }, [])

    return (
        <main className="min-h-screen p-24">
            <div className="w-full max-w-5xl">
                <h1 className={"mb-12"}>Product list</h1>

                <div className="grid grid-cols-4 gap-4">
                    {productsByCategory.map(item => <ProductCard key={item.id} product={item}/>)}
                </div>
            </div>
        </main>
    );
}
