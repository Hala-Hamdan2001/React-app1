import React from "react";
import Product from "./Producte.jsx";
export default function Products(){
  const products = [
    {id:1,title:'product one',desc:'this is product one'},
    {id:2,title:'product two',desc:'this is product two'},
    {id:3,title:'product three',desc:'this is product three'},

    {id:1,title:'product four',desc:'this is product four'},
    {id:2,title:'product five',desc:'this is product five'},
    {id:3,title:'product six',desc:'this is product six'},

    {id:1,title:'product seven',desc:'this is product seven'},
    {id:2,title:'product eight',desc:'this is product eight'},
    {id:3,title:'product nine',desc:'this is product nine'},

    {id:1,title:'product ten',desc:'this is product ten'},
    {id:2,title:'product eleven',desc:'this is product eleven'},
    {id:3,title:'product twelve',desc:'this is product twelve'},
];
    return(
        <>
          <div className="container my-5 mt-5">
            <div className="row">
              {products.map((product)=>{
                return <Product{...product} key={product.id}/>
              })}
          </div>
          </div>
        </>   
    );
}