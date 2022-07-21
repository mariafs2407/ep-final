import React, { useEffect, useState } from 'react';
import lapiz from '../assets/lapiz.png';
import './Tabla.css';


function Tabla(props) {
    const [proveedores, setProveedores] = useState([]);
    const [idproveedor, setIdproveedor] = useState('');
    const [nombreempresa, setNombreempresa] = useState('');
    const [nombrecontacto, setNombrecontacto] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');


    useEffect(() => {
        leerProveedores();
    }, []);
    const leerProveedores = (e) => {
        const rutaServicio = "https://servicios.campus.pe/proveedores.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProveedores(data);
            })
    }

    const llenarDatos = (item) => {
        setIdproveedor(item.idproveedor);
        setNombreempresa(item.nombreempresa);
        setNombrecontacto(item.nombrecontacto);
        setDireccion(item.direccion);
        setCiudad(item.ciudad);
        setPais(item.pais);
    }

    const mostrarProveedor = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">
                                <h5 className="modal-title subs" id="exampleModalLabel">Actualizar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {contenidoFormulario()}
                            <div className="modal-footer">
                                <button type="button" className="btn colorb" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn colorb">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    const contenidoFormulario = () => {
        return (
            <div className="modal-body ">
                <div className="mb-3 ">
                    <input type="text" className='form-control subds' placeholder='idproveedor' value={idproveedor}
                        readOnly />
                </div>
                <div className="mb-3 ">
                    <input type="text" className='form-control subds' placeholder='Nombre de empresa' value={nombreempresa}
                        required
                        onChange={(event) => setNombreempresa(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control subds' placeholder='Contacto' value={nombrecontacto}
                        required
                        onChange={(event) => setNombrecontacto(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control subds' placeholder='Direccion' value={direccion}
                        required
                        onChange={(event) => setDireccion(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control subds '  placeholder='Ciudad' value={ciudad}
                        required
                        onChange={(event) => setCiudad(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control subds' placeholder='Pais' value={pais}
                        required
                        onChange={(event) => setPais(event.target.value)} />
                </div>               
            </div>
        )
    }

    return (
        <section id="categorias" className='padded'>
            <div className="container">
                <h2 className='titp'>Proveedores:</h2>
                <table className='table'>
                    <thead className='table-light'>
                        <tr className='tittabla'>
                            <th>Cod</th>
                            <th>Nombre Empresa</th>
                            <th>Contacto</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>Pais</th>
                            <th>Ver</th>
                        </tr>
                    </thead>
                    <tbody className='subds'>
                        {proveedores.map(item =>
                            <tr key={item.idproveedor}>
                                <tr>{item.idproveedor}</tr>
                                <td>{item.nombreempresa}</td>
                                <td>{item.nombrecontacto}</td>
                                <td>{item.direccion}</td>
                                <td>{item.ciudad}</td>
                                <td>{item.pais}</td>
                                {/* boton editar */}
                                <td><img src={lapiz} onClick={() => llenarDatos(item)}
                                    data-bs-toggle="modal" data-bs-target="#updateModal" /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {mostrarProveedor()}

            </div>
        </section>
    );
}

export default Tabla;