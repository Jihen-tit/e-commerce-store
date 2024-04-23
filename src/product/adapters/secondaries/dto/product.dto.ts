export interface ProductDto {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
    description: string;
    rating: ProductRatingDTO;
}

export interface ProductRatingDTO {
    rate: number;
    count: number;
}
