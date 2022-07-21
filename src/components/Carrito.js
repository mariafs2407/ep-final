import React, { useEffect, useState } from 'react';

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        leerCarrito();
    }, []);

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
        setTotal(0);
    }
    const leerCarrito = async () => {
        var datosCarrito = await JSON.parse(localStorage.getItem("carrito"));
        console.log(datosCarrito)
        setCarrito(datosCarrito);

        if (datosCarrito !== null) {
            let subtotales = datosCarrito.map(item =>
                item.precio * item.cantidad)
            console.log(subtotales)
            setTotal(subtotales.reduce((acumulador, a) => acumulador + a, 0))
            console.log(total)
        }
    }

    return (
        <section id="carrito" className='padded'>
            <div className="container">
                <h2 className='titp'>Carrito:</h2>
                <div className='row'>
                    <div className='col-md-8'>
                        <table className='table'>
                            <thead className='table-light'>
                                <tr className='tittabla'>
                                    <th>Cod</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className='subds'>
                                {carrito !== null ?
                                    carrito.map(item =>
                                        <tr key={item.idproducto}>
                                            <td>{item.idproducto}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.cantidad}</td>
                                            <td>{item.precio * item.cantidad}</td>

                                        </tr>
                                    )
                                    : null
                                }

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4" className='text-end tittabla'>Total </th>
                                    <th className='subds'>{total}</th>
                                </tr>
                            </tfoot>
                            
                        </table>
                        <div className='col-md-6'>
                            <button className='btn  colorb'
                                onClick={() => vaciarCarrito()}>Vaciar carrito
                            </button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <img className='tmimg' src="https://adventz.radiantthemes.com/wp-content/uploads/2022/06/man-with-laptop-212-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="row container-fluid">
                <div class="col-md-5">
                    <img className='tmimg' src="https://adventz.radiantthemes.com/wp-content/uploads/2022/07/demo-foure-section-5-img-01.webp" />
                </div>
                <div className='col-sm-6 texto'>
                    <h5 className='titpp'>PROGRESO EMPRESARIAL</h5>
                    <h1 className='titp'>Siga La Creciente Tendencia Comercial En Línea</h1>
                    <h5 className='titdp'>Egestas dictum lectus diam commodo. Et tristique nunc faucibus sit torto r commodo aliquet commodo quam. Id suspendisse vel in non arcu, interdum quis placerat accumsan.</h5>
                </div>
            </div>
        </section>
    );
}

export default Carrito;