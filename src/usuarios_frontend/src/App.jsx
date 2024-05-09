import  Menu  from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Users from './components/Users';
import UserCreate from './components/UserCreate';
import Prueba from './prueba/Prueba';

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

function App(){
    return(
        <div className='contanier' >
            <Menu />
        </div>
            

    )
}

export default App