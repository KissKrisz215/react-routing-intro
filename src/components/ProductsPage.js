import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export function ProductsPage(){

    const [product,setProduct] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
      const productData = products.find((product) => {
        if(product.id == productId){
            return product;
        }
      })

      if(productData){
        setProduct(productData);
      }
     console.log("Product is", productData)
    }, [])

    return(
     <div key={product.id}>
        <h1>{product && product.name}</h1>
     </div>
    );
}