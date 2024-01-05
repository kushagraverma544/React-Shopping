import { useFetchData } from "../hooks/useFetchData"

export default function CustomHookDemo(){
    const products = useFetchData("http://fakestoreapi.com/products");
    console.log(products.data);

    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    products.data.map(product => 
                        <li key = {product.title}>{product.title}</li>
                    )
                }
            </ol>
        </div>
    )
}