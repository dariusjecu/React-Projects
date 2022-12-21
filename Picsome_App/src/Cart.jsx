import React, {useState,useEffect} from 'react';
import Trash from "../public/trash.png"

export default function Cart(props){

    const allData = JSON.parse(localStorage.getItem("cart"))

    const [total, setTotal] =useState(0)
    const [order, setOrder] = useState(false)
    const [aux, setAux] = useState(true)

    function TotalValue(){
        setTotal(prevVal => {
            if(prevVal)
                prevVal = 0
            for(let i=0; i<allData.length; i++)
                prevVal += parseFloat(allData[i].price)
            return prevVal
        })
    }

    function RemoveItem(i){
        allData.map((val, poz) => {
             if(poz == i)
                allData.splice(poz, 1)                
        })
        localStorage.setItem("cart", JSON.stringify(allData))
        console.log(allData)
        setAux(prevVal => !prevVal)
    }

    function PlaceOrder(){
            setOrder(true)
            setTimeout(() => {
                localStorage.setItem("cart", JSON.stringify([]))
                setAux(prevVal => !prevVal)
                setOrder(false)
            }, 2000);
    }

    useEffect(() => {
        props.setSearch(false)
        TotalValue()
        console.log(allData)
    }, [allData])

    const element = allData.map((val,i) => {
        return (
            <div className='element-cart' key={val.id}>
                <div className='first-two'>
                    <img className='trash' src={Trash} onClick={() => RemoveItem(i)}/>
                    <img src={val.image} />
                </div>
                <h3>${val.price}</h3>
            </div>
        )
    })

    return (
        <div className='checkout'>
            <h1>Check out</h1>
                {element}
            <h2>Total: ${total}</h2>
            {allData.length ? <button onClick={PlaceOrder}>{!order ? "Place Order" : "Ordering..."}</button> : <h3>You have no items in your cart.</h3>}
        </div>
        
    )
}