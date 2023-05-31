import { useParams, Link } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";

export function ProductDetailsPage(){

    const products =  [
        {
            name: "Example1",
            price: "99$",
            id:1,
        },
        {
            name: "Example2",
            price: "99$",
            id:2,
        },
        {
            name: "Example3",
            price: "99$",
            id:3,
        },
        {
            name: "Example4",
            price: "99$",
            id:4,
        },
    ]

    return(
     <div>
     {products.map((product) => {
        return(
         <div>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
         </div>
        );
     })}
     </div>
    );
}