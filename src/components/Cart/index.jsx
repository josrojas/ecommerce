import React from 'react'
import styles from '../Cart/cart.module.css'

export class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cantidad: 0 };
    }

    agregarAlCarrito = () => {
        this.setState(prevState => {
            return { cantidad: prevState.cantidad + 1 }
        });
    }

    eliminarDelCarrito = () => {
        this.setState(prevState => {
            if (prevState.cantidad > 0) {
                return { cantidad: prevState.cantidad - 1 };
            }
        });
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.containerProducts}>
                    <h2 className={styles.titulo}>{this.props.nombre}</h2>
                    <h5 className={styles.precio}>Precio: ${this.props.precio}</h5>
                    <h5 className={styles.cantidad}>Cantidad en el carrito: 
                        <button onClick={this.agregarAlCarrito} className={styles.buttonAdd}>{this.state.cantidad}</button>
                        <button onClick={this.eliminarDelCarrito} className={styles.buttonDel}>X</button></h5>



                </div>
            </div>
        );
    }
}