import { createContext, useState, useContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const vaciarCarrito = () => {
        setCart([]);
    }
    const addProduct = (product, cantidadComprada) => {
        if(cart.some(item => item.id === product.id)){
            
            setCart(cart.map(item => {
                if(item.id === product.id){
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidadComprada
                    }
                }
                return item;
            }))
        }else{
            setCart([...cart, {...product, cantidad: cantidadComprada}])
        }
    }

    const total = () =>{
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }

    const eliminarProducto = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{cart, setCart, addProduct,  vaciarCarrito, eliminarProducto, total}}>
            {children}
        </CartContext.Provider>
    )
}



export const useCart = () => {
    if(!CartContext){
        throw new Error("useCart must be used within a CartProvider")
    }
    return useContext(CartContext);
}