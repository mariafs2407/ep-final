import React, { useEffect, useState } from 'react';

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        leerCarrito();
    },[]);

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
        setTotal(0);
    }
    const leerCarrito = async () =>{
        var datosCarrito = await JSON.parse(localStorage.getItem("carrito"));
        console.log(datosCarrito)
        setCarrito(datosCarrito);

        if(datosCarrito !== null){
            let subtotales = datosCarrito.map(item =>
                item.precio *item.cantidad)
            console.log(subtotales)
            setTotal(subtotales.reduce((acumulador,a ) => acumulador +a ,0))
            console.log(total)
        }
    }

    return (
        <section id="carrito" className='padded'>
            <div className="container">
                <h2>Carrito:</h2>
                <div className='row'>
                    <div className='col-md-8'>
                        <table className='table'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Cod</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>                                   
                                </tr>
                            </thead>
                            <tbody>
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
                                    <th colSpan="4" className='text-end'>Total </th>
                                    <th>{total}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-danger'
                            onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrito;