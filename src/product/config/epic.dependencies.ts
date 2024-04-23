import { ProductDependenciesFactory } from "@/product/config/dependencies.factory";

export const productEpicDependencies = {
    productService: ProductDependenciesFactory.getProductService()
}
