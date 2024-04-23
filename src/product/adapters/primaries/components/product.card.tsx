import { Product } from "@/product/domain/entities/product";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = (props: { product: Product }) => {

    return (
        <Link href={"/product/" + props.product.id} className="product-category">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <Image width={200} height={200} src={props.product.image} alt={props.product.title}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.product.title}</div>
                    <p className="text-gray-700 text-base">{props.product.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.product.category}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.product.price}</span>
                </div>
            </div>
        </Link>
    );
}
