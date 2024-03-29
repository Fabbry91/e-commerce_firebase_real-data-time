import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { firebase } from '../firebase/firebase.config'

export const Register = ({ history }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [passError, setPassError] = useState();

    const onSubmit = (data, e) => {
        const {
            password,
            password1,
            email,
            nombre, } = data

        if (password !== password1) {
            return setPassError('Las contraseñas no son iguales')
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: nombre });
            })
            .catch(e => {
                //Swal.fire('Error', e.message, 'error')
            })
        history.replace("/login")
        e.target.reset();
    }

    return (

        <div className="container w-75 mt-5 rounded shadow">

            <div className="row">

                <div className="col bg-white p-5 rounded-start">

                    <h2 className="fw-bold text-center py5">Registrate</h2>

                    <div className="text-center">
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="nombre"
                                    {...register("nombre", {
                                        required: {
                                            value: true,
                                            message: 'Nombre es requerido'
                                        }
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.nombre && errors.nombre.message}
                                </span>
                            </div>


                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    name="apellido"
                                    {...register("apellido", {
                                        required: {
                                            value: true,
                                            message: 'Apellido es requerido'
                                        }
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.apellido && errors.apellido.message}
                                </span>
                            </div>

                            <div className="mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Ingresa tu email"
                                    name="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email es requerido'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message:
                                                "El formato de e-mail es invalido."
                                        }
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.email && errors.email.message}
                                </span>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nueva Contraseña"
                                    name="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Contraseña es requerido'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Debe tener como minimo 6 caracteres"
                                        }
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.password && errors.password.message}
                                </span>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita Contraseña"
                                    name="password1"
                                    {...register("password1", {
                                        required: {
                                            value: true,
                                            message: 'Password es requerido'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Debe tener como minimo 6 caracteres"
                                        }
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.password1 && errors.password1.message}
                                    {passError &&
                                        <span className="text-danger text-small d-block mb-2">{passError}</span>
                                    }
                                </span>
                            </div>




                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary"> Registrarse </button>
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
