import { ProductService } from "@/product/domain/gateway/product.service";
import { ApiProductService } from "@/product/adapters/secondaries/apiProduct.service";

export class ProductDependenciesFactory {
    static getProductService(): ProductService {
        return new ApiProductService()
    }
}
