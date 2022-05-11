import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <section className='header__container'>
            <h5>Alkemy Full Stack Challenge</h5>
            <h2>ADMINISTRADOR DE PRESUPUESTO PERSONAL</h2>
            <div className="header__btns">
                <Link to="/new" className="header__btns-new"> Nuevo <hr/>Movimiento</Link>
                <Link to="/modify" className="btn btn-primary"> Modificar Movimiento</Link>
            </div>    
        </section>
    );
}

export default Header;
