import { useRef, useMemo } from 'react'
import { Producto } from '../../components/Productos/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './mobo.module.css';

const Mobo = () => {
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const renderEvents = () => {

        return (
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <Producto nombre="Motherboard ASUS Z790-plus wifi" descripcion="ATX compatible Intel 12th, 13th & 14th" precio="229,99" />
                    <Producto nombre="Motherboard MSI PRO B760-P wifi" descripcion="ATX compatible Intel 12th, 13th & 14th" precio="159,99" />
                    <Producto nombre="Motherboard Gigabyte H610M" descripcion="Micro ATX compatible Intel 12th, 13th & 14th" precio="89,99" />

                    <Producto nombre="Motherboard ASUS Strix B550-F wifi" descripcion="ATX AMD AM4 (3rd gen Ryzen)" precio="189,99" />
                    <Producto nombre="Motherboard Gigabyte B550M DS3H" descripcion="ATX AMD AM4 (3rd gen Ryzen)" precio="89,99" />
                    <Producto nombre="Motherboard MSI MAG B550 Tomahawk" descripcion="ATX AMD AM4 (3rd gen Ryzen)" precio="144,99" />
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

export default Mobo;