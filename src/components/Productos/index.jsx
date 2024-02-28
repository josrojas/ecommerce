import React from 'react'
import styles from '../Productos/productos.module.css'


export class Producto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {cantidad: 0};
    }
  
    agregarAlCarrito = () => {
      this.setState(prevState => {
        return {cantidad: prevState.cantidad + 1}
      });
    }
  
    eliminarDelCarrito = () => {
      this.setState(prevState => {
        if (prevState.cantidad > 0) {
          return {cantidad: prevState.cantidad - 1};
        }
      });
    }
    
  
    render() {
      return (
        <div className={styles.container}>
          <div className={styles.containerProducts}>
            <h2 className={styles.titulo}>{this.props.nombre}</h2>
            <p className={styles.texto}>{this.props.descripcion}</p>
            <h5 className={styles.precio}>Precio: ${this.props.precio}</h5>
            <button onClick={this.agregarAlCarrito} className={styles.button}>Agregar al carrito</button>
            <button onClick={this.eliminarDelCarrito} className={styles.button}>x</button>
            <h5 className={styles.precio}>Cantidad en el carrito: {this.state.cantidad}</h5>
            </div>
        </div>
      );
    }
  }