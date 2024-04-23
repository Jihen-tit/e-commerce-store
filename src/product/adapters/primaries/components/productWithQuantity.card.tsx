import { Product } from "@/product/domain/entities/product";
import Image from "next/image";
import Link from "next/link";
import { addProductToCart } from "@/product/usecases/addToCart/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const ProductWithQuantityCard = (props: { product: Product, quantity: number }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(props.quantity)

    return (
            <div className="flex rounded overflow-hidden shadow-lg p-4">
                <Image width={100} height={100} src={props.product.image} alt={props.product.title}/>

                <div className="p-4 flex-1">
                    <h2 className="font-bold text-lg mb-2">{props.product.title}</h2>
                    <div className="flex">
                        <p className="text-gray-700 text-base my-3">quantité : </p>
                        <button className="w-10 bg-gray-100 ms-4" onClick={() => setQuantity(quantity - 1)}>-</button>
                        <p className="text-gray-700 text-base my-3 w-20 text-center">{quantity}</p>
                        <button className="w-10 bg-gray-300 me-4" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <span className="text-sm font-semibold">{props.product.price} €</span>
                </div>

                <div className="mt-auto text-right flex">
                    <button className="p-3 bg-blue-200 me-4" onClick={() => dispatch(addProductToCart(props.product.id, quantity))}>Save</button>
                    <button className="p-3 bg-red-100">Remove</button>
                </div>
            </div>
    );
}
