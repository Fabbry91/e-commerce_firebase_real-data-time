import { useReducer } from 'react';
import './App.css';
import { AuthContext } from './Context/AuthContext';
import { authReducer } from './Context/authReducer';
import { RouterApp } from './router/RouterApp';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div className="App">
        <RouterApp />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
