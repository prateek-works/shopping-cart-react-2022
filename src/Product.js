import { Container } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { addToCart, removeFromCart } from './redux/productSlice';



export const Product = ({ productData }) => {


    const dispatch = useDispatch()

    return (
        <Card sx={{ maxWidth: 300, m: 2, height: 400, width: 200 }} >
            <CardActionArea sx={{}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={productData.image}
                    alt="green iguana"
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {productData.name}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {productData.description}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {productData.price}
                    </Typography>
                    <Button
                        onClick={() => dispatch(addToCart(productData))}
                        size="large">Add to Cart</Button>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}
