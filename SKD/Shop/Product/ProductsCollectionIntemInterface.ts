import {ProductImage} from "./ProductImageInterface";

export interface ProductsCollectionItem {
    code: string,
    name: string,
    averageRating: number,
    images: Array<ProductImage>,
    // createdAt: Date,
    // defaultVariant: string,
    // description: string,
    // id: string|number,
    // mainTaxon: string,
    // options: Array<string>,
    // productTaxons: Array<string>,
    // variants: Array<string>,
    // reviews: Array<string>,
    // firstPageLink: string,
    // lastPageLink: string,
    // nextPageLink: string,
    // previousPageLink: string,
}
