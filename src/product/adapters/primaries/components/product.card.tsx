import { Product } from "@/product/domain/entities/product";
import Image from "next/image";
import Link from "next/link";
import { ProductRating } from "@/product/adapters/primaries/components/rating";

export const ProductCard = (props: { product: Product }) => {

    return (
        <Link href={"/product/" + props.product.id} className="product-category">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <Image width={200} height={200} src={props.product.image} alt={props.product.title}/>
                <div className="py-3 text-center">
                    <div className="font-bold text-lg mb-2">{props.product.title}</div>
                    <ProductRating rating={props.product.rating}/>
                    <p className="text-gray-700 text-base my-3">{props.product.reviews} reviews</p>
                    <span className="text-sm font-semibold">{props.product.price} €</span>
                </div>
            </div>
        </Link>
    );
}
