export class Product {

    constructor(
        private _id: string,
        private _title: string,
        private _category: string,
        private _image: string,
        private _price: number,
        private _description: string
    ) {
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get category(): string {
        return this._category;
    }

    get image(): string {
        return this._image;
    }

    get price(): number {
        return this._price;
    }

    get description(): string {
        return this._description;
    }

}
