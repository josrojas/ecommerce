import { useRef, useMemo } from 'react'
import { Producto } from '../../components/Productos/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './cart.module.css';

const Cart = () => {
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

export default Cart;