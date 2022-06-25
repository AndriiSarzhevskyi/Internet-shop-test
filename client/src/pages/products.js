import React, {useCallback, useContext, useEffect, useState} from 'react'
import { ProductsList } from '../components/ProductsList'
import {useHttp} from '../hooks/http.hook'

export const Products = () => {

  const {loading, request} = useHttp();

  const [products, setProducts] = useState([]);

  const getproductsHandler = useCallback(async () => {
    try {
      const fetched = await request('/api/products/getproducts', 'GET');
      console.log(fetched);    
      setProducts(fetched);
      console.log(products);
    } catch (e) {}
  },[request]);

  useEffect(() => {
    getproductsHandler();
    
  },[getproductsHandler]);


  return (
    <>
        {<ProductsList products={products} />}
    </>
        
  )
}