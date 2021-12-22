import {ProductsCollectionItem} from "../../../SKD/Shop/Product/ProductsCollectionIntemInterface";

interface AppProps {
    product: ProductsCollectionItem,
}

export default function ProductTile(props:AppProps): JSX.Element {
    const product = props.product;

    return (
        <div className="p-3 border-2 border-solid border-syl-black rounded-md m-2">
            <img className="h-64 w-full object-full " src={product.images[0].path} alt="product" />
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                    <span>code: {product.code}</span>
                    <br/>
                    <span>average rating: {product.averageRating}</span>
                    <br/>
                </p>
        </div>
    );
};

