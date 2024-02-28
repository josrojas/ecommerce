import { useRef, useMemo } from 'react'
import { Producto } from '../../components/Productos/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './grafica.module.css';

const Grafica = () => {
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const renderEvents = () => {

        return (
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <Producto nombre="RTX 4090" descripcion="Tarjeta gráfica Nvidia" precio="1499,99" />
                    <Producto nombre="RTX 4060" descripcion="Tarjeta gráfica Nvidia" precio="499,99" />
                    <Producto nombre="RTX 3070 super" descripcion="Tarjeta gráfica Nvidia" precio="599,99" />

                    <Producto nombre="Radeon RX 7900 XTX" descripcion="Tarjeta gráfica AMD" precio="929,99" />
                    <Producto nombre="Radeon RX 6650 XT" descripcion="Tarjeta gráfica AMD" precio="229,99" />
                    <Producto nombre="Radeon RX 7600 XT" descripcion="Tarjeta gráfica AMD" precio="329,99" />
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

export default Grafica;