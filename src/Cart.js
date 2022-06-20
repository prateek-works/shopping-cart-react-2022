import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


export const Cart = () => {

    const cart = useSelector((state) => state.product.cart)
    const navigate = useNavigate();

    const home = async () => {
        navigate('/ProductPage')
    }

    return (
        <div style={{ backgroundColor: 'skyblue' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}><h1>Cart Page</h1><Button
                type="button"
                variant="contained"
                onClick={home}
                sx={{ mt: 3, mb: 2 }}
            >
                HOME
            </Button></div>
            {cart.map((cart) => (
                <CartItem key={cart.id} cartData={cart} />
            ))}
        </div>
    )
}
