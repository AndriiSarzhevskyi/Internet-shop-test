import React from 'react'
import {Link} from 'react-router-dom'

export const ProductsList = ({ products }) => {
//   if (!products.length) {
//     return <p >Ссылок пока нет</p>;
//   }
    return (
        <div>
            <p>{products._id}</p>
        </div>
    )
}