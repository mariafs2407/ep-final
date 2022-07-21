import React from 'react';
import Servicios from './Servicios';
import Banner from './Banner';
import Tabla from '../components/Tabla';

function Inicio(props) {
    return (
        <>
        <Banner/>
        <Servicios/>
        <Tabla/>
        
    </>
    );
}

export default Inicio;