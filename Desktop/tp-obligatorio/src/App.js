import { useEffect, useReducer } from 'react';
import './App.css';
import { AuthContext } from './Context/AuthContext';
import { authReducer } from './Context/authReducer';
import { RouterApp } from './router/RouterApp';

//estado del objeto inicial de la aplicacion
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  //cada vez que cambia el usuario se guarda en el localstorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div className="App">
        <RouterApp />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
