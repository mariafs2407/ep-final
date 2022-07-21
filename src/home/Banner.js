import React from 'react';
import imagen from '../assets/imagen.jpg';
import imagendos from '../assets/imagen2.jpg';
import './Banner.css';

function Banner(props) {
    return (

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagen} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block moverb">
                        <h5 className='tituno'>IMPULSA TU NEGOCIO</h5>
                        <h1 className='titdos'>Cómo iniciar fácilmente su negocio En Línea Negocio</h1>
                        <p className='tittres'>Ut egestas sit dui placerat volutpat consequat hac mattis.</p>
                        <button type="button" class="btn colorb">Descubir mas</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imagendos} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block moverb">
                        <h5 className='tituno'>EXPLORA NUESTRO CONTENIDO</h5>
                        <p className='titdos'>Aprovecha nuestros contenidos exclusivos que ofrecemos</p>
                        <button type="button" class="btn colorb">Descubir mas</button>
                    </div>
                </div>

            </div>
        </div>




    );
}

export default Banner;