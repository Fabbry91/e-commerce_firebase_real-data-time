import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { type } from '../Context/types';
import { firebase } from '../firebase/firebase.config'

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);  //obtengo el nombre del user logiado desde el context
    const history = useHistory(); //use history me trae el contexto de navegacion para redirigir el usuario

    const handleLogout = () => {
        firebase.auth().signOut(); //deslogueo de firebase
        dispatch({
            type: type.logout
        });
        history.replace('/login')
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Tienda e-learning UTN
                </Link>



                <div className="d-flex">
                    <ul className="navbar-nav ml-auto">
                        {user.name ?
                            (<span className="nav-item nav-link text-info">
                                {user.name}
                            </span>)
                            :
                            (<span className="nav-item nav-link text-info">
                                {user.email}
                            </span>)
                        }
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
