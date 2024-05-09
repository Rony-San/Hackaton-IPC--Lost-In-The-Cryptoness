import  Menu  from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Users from './components/Users';
import UserCreate from './components/UserCreate';
import Prueba from './prueba/Prueba';

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

function App(){
    return(
        <BrowserRouter>
        <div className='contanier' >
            <Menu />
        </div>
            
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/usuarios" element={<Users />} />
    <Route path="/nuevo-usuario" element={<UserCreate />} />
    <Route path="/Prueba" element={<Prueba />} />
    </Routes>
</BrowserRouter>
    )
}

export default App