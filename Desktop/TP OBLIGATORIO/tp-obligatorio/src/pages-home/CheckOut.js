import axios from '../services/Axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CheckOut = (props) => {
    const { prodId } = props.match.params;

    const [producto, setProduct] = useState({})

    const [ok, setOK] = useState(false)

    useEffect(() => {
        const getOneArticulo = async (prodId) => {
            const { data } = await axios.get();
            const obj = data.find(art => art.id == prodId);
            setProduct(obj)
        }
        getOneArticulo(prodId)
    }, [prodId])

    const confirmaPago = () => {
        setOK(true)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        <>
            <div className="container my-5">

                <div className="row">

                    <ul className="col-7 list-group list-group-flush ">



                        <li className="list-group-item border border-info align-items-center rounded-3 shadow-lg mb-2" key={producto.id}>

                            <div className="row ">

                                <div className="col-3">
                                    <img className="img-fluid fit-image border border-dark rounded-2" src={producto.image} alt=".." />
                                </div>

                                <div className="col-6">
                                    <h3 className="bold" style={{ textTransform: 'capitalize' }}>{producto.title}</h3>
                                    <br />
                                    <span className="h3 bold ">
                                        cantidad: 1</span>

                                    <hr />

                                    <span className="h6">
                                        Descripción: {producto.description}
                                    </span>

                                    <hr />

                                    <div className="row ">
                                        <div className="col">
                                            <span className="h6">Precio unitario: </span><span className="text-muted">$ {producto.price}</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-3 my-3 ">

                                    <div className="row ">

                                        <div className="col">

                                        </div>

                                        <div className="col">
                                            <button className="btn btn-danger" >
                                                <i className="bi bi-trash-fill" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>


                    <div className="col-5">
                        <div className="p-4 align-items-center rounded-3 border art-vendido shadow-lg mb-3">
                            <div className="card-header h5 text-center mb-3"><span className="text-muted">Articulos vendido por</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="strong h4">UTN centro-Learning</span></div>
                            <br />

                            <div className="text-center">
                                <form autoComplete="off">

                                    <div className="mb-3">
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Ingresa tu email"
                                            name="email"

                                        />

                                    </div>

                                    <div className="row">

                                        <div className="col-md-2 col-lg-2">
                                            Direccion:
                                        </div>

                                        <div className="col-md-10 col-lg-10">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Calle"
                                                    name="calle"

                                                />

                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Codigo Postal"
                                                    name="cp"

                                                />

                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Localidad"
                                                    name="localidad"

                                                />

                                            </div>

                                        </div>
                                    </div>


                                </form>
                                    <div className="d-grid">
                                        <button className="btn btn-primary" onClick={()=>confirmaPago()}><i className="bi bi-paypal" /> Pagar </button>
                                    </div>

                            </div>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <span className="text-muted">Cant. articulos:</span>
                                </div>
                                <div className="col-6">
                                    <span className="text-muted">Total:</span> $ {producto.price}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
