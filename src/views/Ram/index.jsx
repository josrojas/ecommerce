import { useRef } from 'react'
import { Producto } from '../../components/Productos/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './ram.module.css';

const Ram = () => {
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const renderEvents = () => {

        return (
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <Producto nombre="Ram Crucial 2x8" descripcion="Ram 16GB DDR4 3200MHz CL22" precio="36,99" />
                    <Producto nombre="Ram Corsair Vengeance 2x8" descripcion="Ram 16GB DDR4 3200MHz CL16" precio="45,99" />
                    <Producto nombre="Ram Teamgroup T-Force 2x8" descripcion="Ram 16GB DDR4 3200MHz CL16" precio="35,99" />

                    <Producto nombre="RAM Crucial Pro 2x16GB" descripcion="Ram 16GB DDR4 3200MHz CL16" precio="61,99" />
                    <Producto nombre="Ram Corsair Vengeance LPX 2x16" descripcion="Ram 16GB DDR4 3200MHz CL16" precio="64,99" />
                    <Producto nombre="Ram Teamgroup T-Force 2x16" descripcion="Ram 32GB DDR4 3600MHz CL16" precio="63,99" />
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

export default Ram;