import Image from "next/image";
import Link from "next/link";

import { Product } from "@/product/domain/entities/product";
import { ProductRating } from "@/product/adapters/primaries/components/rating";

export const ProductCard = (props: { product: Product }) => {

    return (
        <Link href={"/product/" + props.product.id} className="product-category">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <Image width={150} height={150} src={props.product.image} alt={props.product.title}
                       className="aspect-square object-contain mx-auto"/>

                <div className="py-3 text-center">
                    <h2 className="font-bold text-lg mb-2 line-clamp-1">{props.product.title}</h2>
                    <ProductRating rating={props.product.rating}/>
                    <p className="text-gray-700 text-base my-3">{props.product.reviews} reviews</p>
                    <span className="text-sm font-semibold">{props.product.price} €</span>
                </div>
            </div>
        </Link>
    );
}
