import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = (prop) => {

    const { product } = prop
    console.log(product)

    return (

        <div className="col" key={product.id}>
            <div className="card border-info border shadow-lg">
                <Link to={`/producto/${product.id}`}>
                    <img src={product.image} className="bd-placeholder-img img-fluid card-img-top border " width="100%" alt="" />
                </Link>
                <div className="card-body">
                    <h4 className="mb-2" >$ {product.price}</h4>
                    <span className="badge rounded-pill bg-success">{product.category}</span>
                    <h4 className="mt-2" style={{ textTransform: 'capitalize' }}>{product.title}</h4>

                    <div className="text-center">
                        <div className="row">
                            <div className="col">
                                <Link to={`/product/${product.id}`} >
                                    <i className="bi bi-eye-fill" style={{ fontSize: 19 }} /> &nbsp;
                                    Ver más
                                </Link>
                            </div>
                            <div className="col">
                                <Link to={`/checkout/${product.id}`} className="btn btn-success" >
                                    <i className="bi bi-currency-dollar" style={{ fontSize: 19 }} /> &nbsp;
                                    Comprar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
