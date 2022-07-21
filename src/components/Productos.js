import React, { useEffect, useState } from 'react';
import './Productos.css';
import carrito from '../assets/carrito.png';


function Productos(props) {
    const [productos, setProductos] = useState([]);
    const [itemProducto ,setItemProducto] =useState([]);
    useEffect(() => {
        leerProductos();
    }, []);
    const leerProductos = (e) => {
        const rutaServicio = "https://servicios.campus.pe/servicioproductostodos.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProductos(data);
            })
    }

    const agregarCarrito = (item) =>{
        item.cantidad= "1"
        let carrito =[];

        if(localStorage.getItem("carrito")){
            carrito=JSON.parse(localStorage.getItem("carrito"));
            var index = -1;
            for(var i=0 ;i< carrito.length ;i++){
                var itemCarrito = carrito[i];
                if(item.idproducto === itemCarrito.idproducto){
                    index =i;
                    break;
                }
            }
            if(index === -1){
                carrito.push(item);
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
            else{
                let itemCarrito= carrito[index];
                itemCarrito.cantidad++;
                carrito[index]=itemCarrito;
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
        }
        else{
            carrito.push(item);
            localStorage.setItem("carrito".JSON.stringify(carrito));
        }
    }
    return (
        <section id="productos" >
            <div className="container-fluid padded">
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <img src="https://adventz.radiantthemes.com/wp-content/uploads/2022/05/demo-two-section-three-img-1.png" alt="" />
                    </div>
                    <div className='col-sm-6 texto'>
                        <h5 className='titpp'>PROGRESO EMPRESARIAL</h5>
                        <h1 className='titp'>Siga La Creciente Tendencia Comercial En Línea</h1>
                        <h5 className='titdp'>Egestas dictum lectus diam commodo. Et tristique nunc faucibus sit torto r commodo aliquet commodo quam. Id suspendisse vel in non arcu, interdum quis placerat accumsan.</h5>
                    </div>
                </div>
                <h2 className='titp '>Productos:</h2>
                <div className="row row-cols-1 row-cols-md-6 g-4" >
                    {productos.map(item =>
                        <div className="col " key={item.idproducto}>
                            {/* bloque de producto */}
                            <div className="card cajap">
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className='card-text '>{item.detalle}</p>
                                    <img src={carrito} onClick={(event) => agregarCarrito(item)}/>

                                </div>
                                <p className='text-end carrito'>S/. {item.precio}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Productos;