import axios from '../services/Axios'
import React, { useEffect, useState } from 'react'
import { ProductCard } from './Product-card';
import { Loading } from '../pages-home/Loading'

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        const { data } = await axios.get();
        // console.log(data)
        setProducts(data);
        setLoading(false)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container py-5 position-relative">
            {
                loading === true ?
                    (<Loading />)
                    :
                    (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {products.map((prod) => (
                            <ProductCard key={prod.id} product={prod}>
                            </ProductCard>
                        ))}
                    </div>)
            }
        </div>
    )
}
