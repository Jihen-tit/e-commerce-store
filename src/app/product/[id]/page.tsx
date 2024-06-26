"use client";

import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { AppState } from "@/redux-configuration/appState";
import { loadProductByIdErrorSelector, loadProductByIdLoadingSelector, productDetailsSelector } from "@/product/usecases/details/selectors";
import { loadProductById } from "@/product/usecases/details/actions";
import { ProductRating } from "@/product/adapters/primaries/components/rating";
import { addProductToCart } from "@/product/usecases/cart/actions";

export default function ProductDetails({params}: { params: { id: string } }) {

    const dispatch = useDispatch()

    const loading = useSelector((state: AppState) => loadProductByIdLoadingSelector(state))
    const error = useSelector((state: AppState) => loadProductByIdErrorSelector(state))
    const product = useSelector((state: AppState) => productDetailsSelector(state))

    const productId = params.id

    useEffect(() => {
        if (productId) {
            dispatch(loadProductById(productId))
        }
    }, [dispatch, productId])

    if (loading) {
        return <p className="text-center font-bold my-24">Loading...</p>
    } else if (product) {
        return (
            <main className="min-h-screen p-24">
                <div className="w-full max-w-5xl">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Image width={400} height={400} src={product?.image} alt={product.title}/>
                        </div>

                        <div>
                            <h1 className="font-bold mb-6 text-2xl">{product.title}</h1>
                            <h2 className="font-medium mb-4 text-md">{product.price} €</h2>
                            <ProductRating rating={product.rating}/>
                            <p className="text-gray-700 text-base my-3">{product.reviews} reviews</p>
                            <h2 className="font-medium mb-4 text-md">Description</h2>
                            <p className="text-sm">{product?.description}</p>
                            <button className="text-white bg-blue-700 w-full rounded-lg p-3 mt-12"
                                    onClick={() => dispatch(addProductToCart(productId, 1))}>Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    } else if (error) {
        return <p className="text-center font-bold my-24">Product Not found</p>
    } else {
        return <></>
    }
}
