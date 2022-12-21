import React, {useState, useEffect} from 'react';
import { createClient } from 'pexels';
import FavPressed from "../public/favorite-pressed.png"
import Fav from "../public/favorite.png"
import Cart from "../public/cart-small.png"
import Checked from "../public/check.png"
import ImgData from "./data"

export default function Home(props){

    const allData = JSON.parse(localStorage.getItem("cart"))

    const [allImages, setAllImages] = useState([])
    const [pictures, setPictures] = useState([])
    const [fav, setFav] = useState(new Array(props.nrImages).fill(false))
    const [cart, setCart] = useState(allData ? Fill() : new Array(props.nrImages).fill(false))
    const [addCart, setAddCart] = useState(!allData ? [] : allData)

    function Fill(){
        let result = new Array(props.nrImages).fill(false)
        allData.map((val,i) => {
            if(val.id === 0 || val.id)
                result[val.id] = true
        })
        return result
    }

    function ChangeFav(poz){
        setFav(val => val.map((el,i) => {
            if(i == poz)
                el = !el
            return el
        }))
    }

    function AddInCart(i){
        setAddCart(val => {
                return [
                    ...val,
                    pictures[i]
                ]
        }) 
    }

    function RemoveFromCart(i){ 
        setAddCart(val => { 
            const array = val
            array.map((el, poz) => {
                if(el.id == i)
                    array.splice(poz, 1)
            })
            console.log(array)
            return array           
        })
        
    }

    function CheckCart(poz){
        setCart(val => val.map((el,i) => {
            if(i == poz)
                {
                    el = !el
                    if(el)
                        AddInCart(i)
                    else
                        RemoveFromCart(i)
                }
            return el
        }))
    }

    useEffect(() => {
        props.setSearch(true)
        console.log(addCart)
        console.log(cart)

        localStorage.setItem("cart", JSON.stringify(addCart))

        const client = createClient("563492ad6f9170000100000130dc6244169c4b98af8333eb742b1434")
        const query = props.theme;
        const orientation = 'landscape';
        const size = 'medium';
        const per_page = `${props.nrImages}`

        if(props.theme == props.aux)
            {
                let allPictures = []
                let p = -1
                client.photos.search({ query, per_page, size, orientation }).then(images => {
                            allPictures = images.photos.map(image => {
                                    p++
                                    return {
                                            ...allPictures,
                                            id: p,
                                            image: image.src.medium,
                                            photographer: image.photographer,
                                            price: "5.99"
                                        }
                                })
                            setPictures(allPictures)
                })         
            }
    }, [fav,cart])

    useEffect(() => {
        setAllImages(val => {
                    val = pictures.map((photo, i) => {
                        return (
                            <div className='image-block' key={photo.id}>
                                <img src={!fav[i] ? Fav : FavPressed} onClick={() => ChangeFav(i)} />
                                <img id='small-cart' src={cart[i] ? Checked : Cart} onClick={() => CheckCart(i)} />
                                <img src={photo.image} />
                            </div>
                        )
                    })
                    return val
                })  
    },[pictures])

    return (
        <div className='home-images'>
            {allImages}
        </div>
    )
}