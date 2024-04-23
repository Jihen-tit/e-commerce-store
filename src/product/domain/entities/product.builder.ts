import { Product } from "@/product/domain/entities/product";

export class ProductBuilder {

    private _id!: string;
    private _title!: string;
    private _category!: string;
    private _image!: string;
    private _price!: number;
    private _description!: string;

    withId(value: string): ProductBuilder {
        this._id = value
        return this
    }

    withTitle(value: string): ProductBuilder {
        this._title = value
        return this
    }

    withDescription(value: string): ProductBuilder {
        this._description = value
        return this
    }

    withImage(value: string): ProductBuilder {
        this._image = value
        return this
    }

    withCategory(value: string): ProductBuilder {
        this._category = value
        return this
    }

    withPrice(value: number): ProductBuilder {
        this._price = value
        return this
    }

    build(): Product {
        return new Product(
            this._id,
            this._title,
            this._category,
            this._image,
            this._price,
            this._description
        )
    }
}
