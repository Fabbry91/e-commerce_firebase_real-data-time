import React from 'react'
import { Redirect, Route } from 'react-router'

export const RutasPrivadas = ({
    isAuthenticated,                //verifico si esta autenticado
    component: Component,            //envio el componente a renderizar
    ...rest                         //argumentos de los componentes 

    //Verificamos si el usuario esta autenticado si, es asi muestra los componentes si no redirecciona al login 
}) => {
    return (
        <Route {...rest}
            component={(prop) => (
                (isAuthenticated) ?
                    <Component {...prop} />
                    :
                    <Redirect to="/login" />
            )
            }
        />
    )
}
