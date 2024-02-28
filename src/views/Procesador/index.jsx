import { useRef, useMemo } from 'react'
import { Producto } from '../../components/Productos/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './Proc.module.css';

const Procesador = () => {
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const renderEvents = () => {

        return (
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <Producto nombre="i9 14900K" descripcion="Procesador Intel 14th generación" precio="299,99" />
                    <Producto nombre="i5 13400F" descripcion="Procesador Intel 13th generación" precio="199,99" />
                    <Producto nombre="i3 10100F" descripcion="Procesador Intel 10th generación" precio="99,99" />

                    <Producto nombre="Ryzen 9 9600x" descripcion="Procesador AMD" precio="299,99" />
                    <Producto nombre="Ryzen 7 7600x" descripcion="Procesador AMD" precio="199,99" />
                    <Producto nombre="Ryzen 5 5600x" descripcion="Procesador AMD" precio="99,99" />
                </div>
            </div>
        );
    };

    //Loading or show events or error
    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </>
    )
};

export default Procesador;