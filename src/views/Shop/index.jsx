import { useRef, useState } from 'react'
import { Producto } from '../../components/Cart/index.jsx'

import Navbar from '../../components/Navbar/index.jsx'
import styles from './shop.module.css'

const Shop = ({ searchTerm, events }) =>{
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
              <Producto nombre="Ram Crucial 2x8" descripcion="Ram 16GB DDR4 3200MHz CL22" precio="36,99"/>        
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

export default Shop;