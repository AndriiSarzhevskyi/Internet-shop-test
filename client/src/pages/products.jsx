import {useEffect, useState,} from "react";
import { useHttp } from "../hooks/http.hook";
import { ProductsList } from "../components/ProductsList";

export const Products = () => {
  const { request } = useHttp();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async ()=> {
      request('/api/products/getproducts', 'GET')
      .then(res => 
        {
          setProducts([...res])
        });
    }
    console.log(products);
    getProducts()
  }, []);

  return (
    <div>
      
      {products.map((product)=> {
        return <ProductsList key={product._id} product={product}></ProductsList>
      })}
    </div>
  );
};



// import React, {useCallback, useEffect, useState, useRef} from 'react'
// import { ProductsList } from '../components/ProductsList'
// import {useHttp} from '../hooks/http.hook'

// export const Products = () => {

//   const {request} = useHttp();

//   const [products, setProducts] = useState([]);
//   let bull = false;
//   const getproductsHandler = useCallback(async () => {
//     try {
//       const fetched = await request('/api/products/getproducts', 'GET',null);
//       console.log(fetched);    
//       return fetched;
//     } catch (e) {}
//   },[request]);

//   const f1 = useRef([]);
//   useEffect(() => {
//     f1.current = getproductsHandler();
//   },[]);

//   useEffect(()=>{
//     console.log(f1);
//     setProducts(f1);
//     console.log(products);
//   },[]);

//   return (
//     <>
//         {<ProductsList products={products} />}
//     </>
        
//   )
// }