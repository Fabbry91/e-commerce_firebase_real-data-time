import axios from '../services/Axios'
import React, { useEffect, useState } from 'react'
import { ProductCard } from './Product-card';

export const Products = () => {

    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const { data } = await axios.get();
        console.log(data)
        setProducts(data);
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container py-5 position-relative">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {products.map((prod) => (
                    <ProductCard key={prod.id} product={prod}>
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}
