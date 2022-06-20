import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from './redux/productSlice';
import { colors, createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { makeStyles } from '@mui/material';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { Product } from './Product';
import { Cart } from './Cart';
import { ThemeProvider } from '@emotion/react';
import { green, purple } from '@mui/material/colors';
import { Navbar } from './Navbar';

// import useStyles from './catalogueStyle';

// const useStyles = makeStyles({
//     container: {
//         fontSize: 60,
//     }
// })

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },

})


export const Catalogue = () => {

    //   const classes = useStyles()
    //    const count = useSelector((state) => state.counter.value)
    const product = useSelector((state) => state.product.products)
    const dispatch = useDispatch()

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container sx={{
                backgroundColor: 'success.main',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {product.map((product) => (
                    <Product key={product.id} productData={product} />
                ))}



            </Container>

        </ThemeProvider>
    )
}
