export class ProductCart {

    constructor(
        private _productId: string,
        private _quantity: number
    ) {
    }

    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }
}

