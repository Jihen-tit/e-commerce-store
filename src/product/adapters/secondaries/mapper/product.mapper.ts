import { ProductDto } from "@/product/adapters/secondaries/dto/product.dto";
import { Product } from "@/product/domain/entities/product";
import { ProductBuilder } from "@/product/domain/entities/product.builder";

export class ProductMapper {

    static mapDataToProducts(products: ProductDto[]): Product[] {
        return products.map(item => {
            return new ProductBuilder()
                .withId(item.id.toString())
                .withTitle(item.title)
                .withDescription(item.description)
                .withImage(item.image)
                .withCategory(item.category)
                .withPrice(item.price)
                .build()
        })
    }

}
