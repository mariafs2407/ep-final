import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div id='main-header' class="container-fluid">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src="https://adventz.radiantthemes.com/wp-content/uploads/2022/06/donen1logo.svg" alt="" />
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to='/productos' class="nav-link px-2 colorl">Paginas</Link></li>
                    <li><Link to='/carrito' class="nav-link px-2 colorl">Potafolio</Link></li>
                    <li><Link to='/' class="nav-link px-2 colorl">Hogar</Link></li>
                    <li><a href="#" class="nav-link px-2 colorl">Blog</a></li>
                    <li><a href="#" class="nav-link px-2 colorl">Comercio</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn colorb">Consulta gratis</button>
                </div>
            </header>
        </div>

    );
}

export default Header;