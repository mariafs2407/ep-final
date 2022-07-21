import React from 'react';
import icono1 from '../assets/icono1.png';
import icono2 from '../assets/icono2.png';
import icono3 from '../assets/icono3.png';
import './Servicios.css';

function Servicios(props) {
    return (
        <div>
            <h5 className ="tits">SERVICIOS DE EXPERTOS</h5>
            <h1 className='titdoss'>Servicios De Consultoría Experta</h1>
            <div class="container px-4 py-5" id="featured-3">
                
                
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon bg bg-gradient">
                            <img src={icono3} alt="" />
                        </div>
                        <h2>Desarrollo Creativo</h2>
                        <p>Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        <a href="#" class="icon-link">Aprende Más</a>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon bg bg-gradient">
                            <img src={icono1} alt="" />
                        </div>
                        <h2>Consulta Empresarial</h2>
                        <p>Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        <a href="#" class="icon-link">Aprende Más</a>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon bg bg-gradient">
                            <img src={icono2} alt="" />
                        </div>
                        <h2>Soluciones Perfectas</h2>
                        <p>Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        <a href="#" class="icon-link">Aprende Más</a>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Servicios;