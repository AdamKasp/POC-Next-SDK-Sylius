import {useState} from "react";
import {ProductsCollection} from "../SKD/Shop/Product/ProductsCollectionInterface";
import ShopClient from "../SKD/ShopClient";
import {ProductsCollectionItem} from "../SKD/Shop/Product/ProductsCollectionIntemInterface";

export default function Home(): JSX.Element {
    const [products, setProducts] = useState<ProductsCollection|undefined>(undefined);

    const shopClient: ShopClient = new ShopClient();

    const clickHandler = async(): Promise<void> => {
        const x: ProductsCollection = await shopClient.getProductsClient().getProducts(5, 1 );
        setProducts(x);
    }

    return (
        <div>
            <h2>Products code</h2>
            <div>
                { products !== undefined && products.members.map((product: ProductsCollectionItem) => (<div key={product.code}>Product code: {product.code}</div>))}
            </div>
            <button onClick={clickHandler}>
                Click me
            </button>
        </div>
);
}
