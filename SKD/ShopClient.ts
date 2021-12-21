import ProductClient from "./Shop/Product/ProductClient";
import axios from "axios";

export default class ShopClient {
    constructor() {}

    axiosClient = axios.create({
        baseURL: ' https://127.0.0.1:8000'
    });

    public getProductsClient = (): ProductClient => new ProductClient(this.axiosClient);
}
