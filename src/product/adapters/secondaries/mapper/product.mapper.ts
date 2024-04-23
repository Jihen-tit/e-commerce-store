import { ProductDto } from "@/product/adapters/secondaries/dto/product.dto";
import { Product } from "@/product/domain/entities/product";
import { ProductBuilder } from "@/product/domain/entities/product.builder";

export class ProductMapper {

    static mapDataToProducts(products: ProductDto[]): Product[] {
        return products.map(item => this.mapDataToProduct(item))
    }

    static mapDataToProduct(product: ProductDto): Product {
            return new ProductBuilder()
                .withId(product.id.toString())
                .withTitle(product.title)
                .withDescription(product.description)
                .withImage(product.image)
                .withCategory(product.category)
                .withPrice(product.price)
                .withRating(product.rating.rate)
                .withReviews(product.rating.count)
                .build()
    }

}
