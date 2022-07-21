import React from 'react';
import Servicios from './Servicios';
import Banner from './Banner';
import Tabla from '../components/Tabla';
import Logos from './Logos';

function Inicio(props) {
    return (
        <>
        <Banner/>
        <Logos/>
        <Servicios/>
        <Tabla/>
        
    </>
    );
}

export default Inicio;