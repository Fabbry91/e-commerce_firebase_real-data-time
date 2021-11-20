import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        
        <div className="container w-75 mt-5 rounded shadow">

            <div className="row">

                <div className="col bg-white p-5 rounded-start">

                    <h2 className="fw-bold text-center py5">Registrate</h2>

                    <div className="text-center">
                        <form autoComplete="off">

                            <div className="mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Ingresa tu email"
                                    name="email"
                                    
                                />
                                
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nueva Contraseña"
                                    name="password"
                                    
                                />
                                
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita Contraseña"
                                    name="password1"
                                    
                                />
                               
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    name="apellido"
                                   
                                />
                                
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="nombre"
                                    
                                />
                               
                            </div>

                            <div className="mb-3">
                                <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Telefono"
                                    name="telefono"
                                    
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
                                            placeholder="Numero"
                                            name="numero"
                                            min="0"
                                           
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

                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Provincia"
                                            name="provincia"
                                            
                                        />
                                        
                                    </div>

                                </div>
                            </div>

                            <div className="d-grid">
                                <Link to="/" className="btn btn-primary" > Registrarse </Link>
                            </div>

                        </form>

                    </div>

                </div>

                <div className="col bg d-none d-md-block d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                    <img src={process.env.PUBLIC_URL + "/assets/e-commerce.jpg"} className="img-login" alt="imagen-1" />
                    <div className="my-3">
                        <span> ¿Ya tiene cuenta? <Link to="/login">Regresar al Login</Link></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
