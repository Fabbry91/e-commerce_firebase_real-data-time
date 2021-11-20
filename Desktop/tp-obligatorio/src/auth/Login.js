import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { firebase, googleAuthProvider } from '../firebase/firebase.config'

export const Login = ({ history }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data, e) => {

        const { email, password } = data;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                console.log(user)
                history.replace("/")
            })
            .catch(e => {
                //Swal.fire('Error', e.message, 'error')
            })
        e.target.reset();

    }

    const handleGoogleLogin = () => {
        console.log(firebase.auth())
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user)
                history.replace("/")
            });
    }

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
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                            <div className="mb-4">
                                <input
                                    type="email"
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

                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="password"
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
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary"> Login </button>
                            </div>

                            <div className="my-3">
                                <span> ¿No tiene cuenta? <Link to="/register">Registrate</Link></span>
                            </div>
                        </form>


                        <div className="container w-100 my-5">
                            <div className="row text-center">
                                <div className="col-12">Iniciar Sesión</div>
                            </div>

                            <button className="btn btn-outline-danger w-100 my-1" onClick={handleGoogleLogin} >
                                <div className="row align-items-center">
                                    <div className="col-2 d-none d-md-block">
                                        <i className="bi bi-google" width="40" />
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
