import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="container w-75 mt-5 rounded shadow">

            <div className="row align-items-stretch">

                <div className="col bg d-none d-md-block d-lg-block col-md-5 col-lg-5 col-xl-6 rounded align-items-center">
                    <img src={process.env.PUBLIC_URL + "/assets/e-commerce.jpg"} className="img-login" alt="imagen-1"></img>
                </div>


                <div className="col bg-white p-5 rounded-end">

                    <div className="text-center">
                        <i className="bi bi-cart4" alt="logo" />
                    </div>
                    <hr />

                    <h2 className="fw-bold text-center py5">Bienvenidos</h2>

                    <div className="text-center">
                        <form autoComplete="off">

                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Ingresa tu email"
                                    name="email"

                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="password"

                                />

                            </div>
                            <div className="d-grid">
                                <Link to="/" className="btn btn-primary"> Login </Link>
                            </div>

                            <div className="my-3">
                                <span> ¿No tiene cuenta? <Link to="/register">Registrate</Link></span>
                            </div>
                        </form>


                        <div className="container w-100 my-5">
                            <div className="row text-center">
                                <div className="col-12">Iniciar Sesión</div>
                            </div>

                            <button className="btn btn-outline-danger w-100 my-1" >
                                <div className="row align-items-center">
                                    <div className="col-2 d-none d-md-block">
                                        <i className="bi bi-google" width="40"/>
                                    </div>
                                    <div className="col-12 col-md-10 text-center">
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
