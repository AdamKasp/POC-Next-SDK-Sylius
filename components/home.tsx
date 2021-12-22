import {useState} from "react";
import {ProductsCollection} from "../SKD/Shop/Product/ProductsCollectionInterface";
import ShopClient from "../SKD/ShopClient";
import {ProductsCollectionItem} from "../SKD/Shop/Product/ProductsCollectionIntemInterface";
import ProductTile from "./shop/product/productTile";

export default function Home(): JSX.Element {
    const [products, setProducts] = useState<ProductsCollection|undefined>(undefined);

    const shopClient: ShopClient = new ShopClient();

    const clickHandler = async(): Promise<void> => {
        const productsCollection: ProductsCollection = await shopClient.getProductsClient().getProducts(7, 1 );
        setProducts(productsCollection);
    }

    return (
        <div>
            <h2>Products code</h2>
            <div className="flex flex-wrap overflow-scroll justify-center">
                { products !== undefined && products.members.map((product: ProductsCollectionItem) => <ProductTile product={product} />)}
            </div>
            <button onClick={clickHandler}>
                Click me
            </button>
        </div>
    );
}
