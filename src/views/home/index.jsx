import { useRef, useState } from 'react'
import { Producto } from '../../components/principal/index.jsx'

import Navbar from '../../components/Navbar'
import styles from './Home.module.css';

const Home = ({ searchTerm, events }) => {

    const containerRef = useRef();
    //TODO FIX SEARCH BAR
    const [setSearchTerm] = useState('')

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword = ${term}`);
    };

    //Filter events - searchBar
    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return (
            <div className={styles.container}>
              <Producto nombre="PC gama alta" descripcion="i9 14900K - RTX 4090 - 32gb ram" precio="2.499,99" />
              <Producto nombre="PC gama media" descripcion="i5 13400F - RTX 3070 super - 16gb ram" precio="1.499,99" />
              <Producto nombre="PC gama baja" descripcion="i3 10100F - RTX 1660 super - 16gb ram" precio="599,99" />
        
            </div>
        );
    }; 

    return (
        <div>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </div>
    );
};

export default Home;


