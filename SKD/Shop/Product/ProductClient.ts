import {AxiosInstance, AxiosResponse} from "axios";
import {ProductsCollection} from "./ProductsCollectionInterface";
import {ProductsCollectionItem} from "./ProductsCollectionIntemInterface";

const AXIOS_CONFIG = {
    headers: {
        'Content-Type': 'application/ld+json'
    }
};

export default class ProductClient {
    constructor(
        private axiosClient: AxiosInstance
    ) {}

     getProducts = async (itemsPerPage: number, page: number): Promise<ProductsCollection> => {
        try {
            const response = await this.axiosClient.get<AxiosResponse>(`/api/v2/shop/products?itemsPerPage=${itemsPerPage}&page=${page}`, AXIOS_CONFIG);
            const data = await response.data;

            const members: Array<ProductsCollectionItem> = data['hydra:member'].map(
                (item: Array<any>): ProductsCollectionItem => {
                    return {
                        averageRating: item['averageRating'],
                        code: item['code']
                    }
                });

            const productCollection: ProductsCollection = {
                members: members,
            }

            return new Promise<ProductsCollection>(function (resolve, reject) {
                resolve(productCollection);
        });

        } catch (e) {
            throw new Error("ups 404 error - in future I want to be custom error :D")
        }
    }
}
