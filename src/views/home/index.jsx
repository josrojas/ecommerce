import { useRef, useMemo } from 'react'
import { Producto } from '../../components/principal/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './Home.module.css';

const Home = () => {
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    const renderEvents = () => {

        return (
            <div className={styles.container}>
              <Producto nombre="PC gama alta" descripcion="i9 14900K - RTX 4090 - 32gb ram" precio="2.499,99" />
              <Producto nombre="PC gama media" descripcion="i5 13400F - RTX 3070 super - 16gb ram" precio="1.499,99" />
              <Producto nombre="PC gama baja" descripcion="i3 10100F - RTX 1660 super - 16gb ram" precio="599,99" />
        
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

export default Home;