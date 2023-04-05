import {react, useState} from "react";
import Product from "../page/Product";

import { ProductData } from "../App";


import Header from "../components/Header";

const Shop = () =>{
    return(
    <>
       <div><Header/></div> 
        <br/>
        <br/>
       <div>
           <ProductData.Consumer>
                {(productsData)=>{
                    <Product productsData={productsData}/>
                 }}                      
           </ProductData.Consumer>
       </div>       
    </> 
    )
}

export default Shop;