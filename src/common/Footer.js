import React from 'react';
import telefono from '../assets/tel.png';
import correo from '../assets/correo.png';
import ubicacion from '../assets/ubi.png';
import './Footer.css';

function Footer(props) {
    return (
        <>
            <footer class="bd-footer py-4 mt-4 bg-light">
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-3 mb-3">
                            <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Oreja">
                                <img src="https://adventz.radiantthemes.com/wp-content/uploads/2022/06/donen1logo.svg" alt="" />
                            </a>

                        </div>
                        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5 className='titf'>Apoyo</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2">Soporte del foro</li>
                                <li class="mb-2">Ayuda y preguntas frecuentes</li>
                                <li class="mb-2">Contáctenos</li>
                                <li class="mb-2">Precios y Planes</li>
                                <li class="mb-2">Politica de cookies</li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-3 mb-3">
                            <h5 className='titf'>Compañia</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2">Sobre nosotros</li>
                                <li class="mb-2">Micuenta</li>
                                <li class="mb-2">Nuestra compañia</li>
                                <li class="mb-2">Servicio</li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-3 lg-3">
                            <h5 className='titf'>Ponerse en contacto</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><img src={ubicacion} alt="" /> 121 King St, Melbourne VIC, 3000, Australia</li>
                                <li class="mb-2"><img src={correo} alt="" /> info@ejemplo.com</li>
                                <li class="mb-2"><img src={telefono} alt="" /> +1 (888) 123 4567</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer ">
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <p className="col-md-4 mb-0  borde">© 2021 Peru, Todos los derechos Reservados.</p>
                        <ul className="nav col-md-6 justify-content-end borde">
                            <li className="nav-item caja">
                                <a className="nav-link colr" href="#">Términos y Condiciones </a>
                            </li>
                            <li className="nav-item caja">
                                <a className="nav-link colr" href="#">Carreras</a>
                            </li>
                            <li className="nav-item caja">
                                <a className="nav-link colr" href="#">Politica de privacidad</a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>

        </>

    );
}

export default Footer;