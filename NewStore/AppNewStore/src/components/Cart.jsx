import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../Item.css';

function Cart() {
    const { itemsCart, deleteCartById, clearCart, totalProductsPrice } = useContext(CartContext);
    function removeItem(id) {
        deleteCartById(id);

    }
    function carroIs() {
        clearCart();
    }
    const estilos = {
        width: '100px',
        heigth: '100px'
    }

    if (itemsCart.length === 0) {
        return (
            <div>
                <h3>No hay productos agregados al Carrito.</h3>
                <Link to="/">
                    <button className="button-green" type="button">Continuar Comprando</button>
                </Link>

            </div>
        )
    } else {
        return (
            <div>
                <div className="main-table">
                    <table>
                        <tbody>
                            <tr id="head">
                                <td>ID</td>
                                <td>NOMBRE</td>
                                <td>PRECIO</td>
                                <td>CATEGORIA</td>
                                <td>CANTIDAD</td>
                                <td>IMAGEN</td>
                                <td>ELIMINAR ITEM</td>
                            </tr>
                            {itemsCart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.qty}</td>
                                    <td><img src={item.img} style={estilos}></img></td>
                                    <td><button className="button-red" onClick={() => { removeItem(item.id) }} type="button">Eliminar item</button></td>
                                </tr>

                            )
                            )
                            }
                        </tbody>
                    </table>
                </div>


                <button className="button-red" onClick={() => { carroIs() }} type="button">Vaciar carrito</button>
                <button className="button-green" type="button">Total a pagar: {totalProductsPrice()}</button>




            </div>
        )
    }

}
export default Cart
