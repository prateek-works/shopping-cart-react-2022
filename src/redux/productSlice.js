import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [
        {
            id: 1,
            name: "Fossil watch",
            image: "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
            description: "swiss made automatic watch",
            price: 20000
        },
        {
            id: 2,
            name: "Samsung s22 ultra",
            image: "https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
            description: "flagship smartphone with amazing camera",
            price: 110000
        },
        {
            id: 3,
            name: "Dell inspiron laptop",
            image: "https://4.imimg.com/data4/LL/IP/MY-10150834/dell-laptop-500x500-500x500.jpg",
            description: "windows 11 with core i5",
            price: 56000
        },
        {
            id: 4,
            name: "Nike running shoes",
            image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0a3ff9-a45b-4273-a25a-d748e4d6d82a/react-infinity-run-flyknit-3-road-running-shoes-S5Srkq.png",
            description: "dual layer foam with hyperadapt",
            price: 12000
        },
        {
            id: 5,
            name: "Skybags daily backpack",
            image: "https://m.media-amazon.com/images/I/419XQVMP38L.jpg",
            description: "durable material with rain cover included",
            price: 2500
        },
        {
            id: 6,
            name: "Lg oled tv",
            image: "https://www.lg.com/us/images/tvs/md07521476/gallery/D-06.jpg",
            description: "65 inch with true tone color technology",
            price: 150000
        },
        {
            id: 7,
            name: "Royaloak study table",
            image: "https://cdn.shopify.com/s/files/1/0495/1959/1586/products/10056839_1_800x.jpg?v=1608620256",
            description: "durable with drawer compartment",
            price: 4500
        },
        {
            id: 8,
            name: "Logitech mouse",
            image: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-product-gallery-graphite-top.png?v=1",
            description: "high performance with magspeed scrolling",
            price: 1800
        }
    ],                   // id,title,description , price , image
    cart: [],            // id,title,description , price , image
    currentItem: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            //   state.value += 1
            //   const item = state.products.find(prod => prod.id === action.payload.id)
            //   state.cart.push(item)
            const item = action.payload;
            state.cart = [...state.cart, item];


        },
        removeFromCart: (state, action) => {

            //  state.cart.pop(action.payload.id)
            const newCart = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = newCart
            console.log("remove from cart", state.cart)

        }

    },
})

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer