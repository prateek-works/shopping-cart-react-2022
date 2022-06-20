import React from 'react'
import { Container } from '@mui/system'
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
import { removeFromCart } from './redux/productSlice'

export const CartItem = ({ cartData }) => {

    const dispatch = useDispatch()

    return (
        <Container sx={{
            backgroundColor: 'skyblue',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card sx={{ maxWidth: 345 }} style={{ margin: '25px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        //  height="140"
                        image={cartData.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cartData.name}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            {/* swiss made automatic watch */}
                            {cartData.description}
                        </Typography>
                        <TextField id="filled-basic" label={cartData.price} variant="outlined" />
                        <Button
                            onClick={() => dispatch(removeFromCart(cartData))}
                            size="large">Remove From Cart</Button>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}
