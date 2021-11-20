import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/Axios'

export const Product = (props) => {

    const { prodId } = props.match.params;

    const [producto, setProduct] = useState({})

    useEffect(() => {
        const getOneArticulo = async (prodId) => {
            const { data } = await axios.get();
            const obj = data.find(art => art.id == prodId);
            setProduct(obj)
        }
        getOneArticulo(prodId)
    }, [prodId])

    return (
        <div className="container my-5">
            <div className="p-2 align-items-center rounded-3 border border-info shadow-lg">
                <div className="row">

                    <div className="col-lg-4 p-3 position-relative">

                        <img src={producto?.image} className="fit-image border border-dark rounded-2" alt="imagen-1"></img>

                    </div>

                    <div className="col-lg-5 p-3 d-flex flex-column">
                        <span className="d-inline-block mb-2 text-primary h6">Nombre Articulo</span>
                        <strong className="mb-0 card-title h3" style={{ textTransform: 'capitalize' }}>{producto?.title}</strong>
                        <br />
                        <p className="mb-1 text-muted"><span className="badge rounded-pill bg-success">Categoria {producto?.rubros}</span></p>
                        <br />
                        <span className="h1 card-text price">$ {producto?.price}</span>
                    </div>

                    <div className="col p-3 m-3 d-flex flex-column border border-info rounded-3">
                        <p><span className="text-muted h5">Vendido por </span><strong className="card-text">UTN centro-learning</strong>.</p>
                        <br />
                        <strong className="card-text h-5">Descripción </strong><span className="text-muted">{producto?.description} un.</span>
                        <br />
                        <div className="d-grid gap-2 mt-3">
                            <Link to={`/checkout/${producto.id}`} className="btn btn-success" >
                                <i className="bi bi-currency-dollar" style={{ fontSize: 19 }} /> &nbsp;
                                Comprar
                            </Link>

                            <Link to="/" className="btn btn-sm btn-danger">
                                <i className="bi bi-caret-left-fill" />
                                Regresar</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
