
import React, { useState } from 'react';


import {collection, addDoc} from 'firebase/firestore';


import { useNavigate } from 'react-router-dom';
import { useCart } from '../../ContextManager/CartContextProvider';
import { db } from '../../../firebaseConfig';

const CheckOut = () => {
    const navigation = useNavigate()
    const {total, cart, vaciarCarrito} = useCart()
    
    const [load, setLoad] = useState(false);

    const [orderID, setOrderID] = useState();

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:'',
        RepetedEmail: ''
    });

    const {Nombre, Email, Telefono, RepeatedEmail} = buyer;

    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    };

    const generateOrder = async(data) =>{
        try{
            const col = collection(db , 'Orders');
            const order = await addDoc(col, data,);
            setOrderID(order.id);

        }catch(error){
            console.log(error);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Email === RepeatedEmail){
            const day = new Date();
            const data = {day, buyer, cart, total:total()};
            generateOrder(data);
            setLoad(true);
        }
    }
    const handleQuitStore = () =>{
        navigation('/')
        vaciarCarrito()
    }
    return (
        <div className='checkOut'>
            {load === false ? 
            <>
                <h1 className='title'>Finalizando Compra</h1>
                <form onSubmit={handleSubmit} className='formBuyer'>
                    <h2 className='subTitle'>Complete el formulario</h2>
                        <input 
                        className='input'
                        type='text'
                        name='Nombre'
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input 
                        className='input'
                        type='text'
                        name='Telefono'
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input 
                        className='input'
                        type='email'
                        name='Email'
                        placeholder='Email'
                        value={Email}
                        onChange={handleInputChange}
                        required
                        />
                        <input 
                        className='input'
                        type='email'
                        name='RepeatedEmail'
                        placeholder="Confirmar email"
                        value={RepeatedEmail}
                        onChange={handleInputChange}
                        required
                        />
                        {Email !== RepeatedEmail && <p style={{color: 'red'}}>Error: el email y el email repetido no coinciden</p>}
                        <br />
                        <input type='submit' value='Finalizar Compra' className='endShop'/>
                </form>
            </> 
            : 
            <>
                {orderID === undefined ? <div className='centred'><h2>Cargando</h2></div> : 
                <>
                <h1 className='title'>Compra finalizada con exito</h1>
                <div className='recipt'>
                    <h2 className='reciptTitle'> Tu pedido </h2>
                    <h3>Id de compra: {orderID}</h3>
                    <h3>A nombre de: {buyer.Nombre}</h3>
                    <h3>Precio final: ${total()} ARS</h3>
                    <button onClick={handleQuitStore} className='btnEnd'>
                        Volver a la tienda
                    </button>
                </div>
                </>
                }
            </>
            }
        </div> 
    );
}

export default CheckOut;