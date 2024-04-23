"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux-configuration/appState";
import { useEffect } from "react";
import { loadAllCategories } from "@/category/usecases/list/actions";
import { allCategoriesSelector } from "@/category/usecases/list/selectors";
import { useRouter } from "next/navigation";
import { setCategory } from "@/category/usecases/setCategory/actions";
import Link from "next/link";
import { selectedProductsSelector } from "@/product/usecases/addToCart/selectors";

export const Banner = (props: { title: string }) => {

    return (
        <div className="w-full p-24 text-center bg-gray-100">
            <h1 className="text-2xl">{props.title}</h1>
        </div>
    )
}
