import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import { Link } from "react-router-dom"

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import styles from './navbar.module.css'

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
    }, [search, onSearch]);

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    function BasicButtonExample() {
        return (
            <DropdownButton id="dropdown-button" title="Productos 🔽" className={styles.container}>
                <div className={styles.label}>
                    <Dropdown.Item href="/procesador" className={styles.text}>Procesadores</Dropdown.Item>
                    <Dropdown.Item href="/grafica" className={styles.text}>Tarjetas gráficas</Dropdown.Item>
                    <Dropdown.Item href="/ram" className={styles.text}>Ram</Dropdown.Item>
                    <Dropdown.Item href="/motherboard" className={styles.text}>Motherboard</Dropdown.Item>
                    <Dropdown.Item href="/fuente" className={styles.text}>Fuente de poder</Dropdown.Item>
                    <Dropdown.Item href="/case" className={styles.text}>Case</Dropdown.Item>
                </div>
            </DropdownButton>
        );
    }

    return (
        <div ref={ref} style={{
            marginBottom: '20px',
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <Link to="/" style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textDecoration: 'none'
                }}>Tienda</Link>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    placeholder="Buscar producto"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: '16px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: 'none',
                        width: '200px',
                    }}
                />
                <BasicButtonExample />
                <Link to="/profile/" style={{
                    marginLeft: 24,
                    color: '#fff',
                    textDecoration: 'none',
                }}>Mi perfil</Link>
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;