import React from "react"
import css from './main.module.css'
import Card from './../../src/components/card/card'

const MainPage = (props) => {
    const arr = [
        {
            pic:'https://ae01.alicdn.com/kf/HTB1BfnLPpXXXXaMapXXq6xXFXXXg/2018.jpg',
            price: 4500,
            name:' D-shirt'
        },
        {
            pic:'https://ae01.alicdn.com/kf/HTB1BfnLPpXXXXaMapXXq6xXFXXXg/2018.jpg',
            price: 9600,
            name:' Shirt'
        }
    ]
    console.log(arr)
    return (
        <div className={css.container}>
        {
            arr.map((item) => {
                return <Card name={item.name} pic={item.pic} price={item.price}/>
            }
            )
        }
            {/* <Card 
        pic={'https://ae01.alicdn.com/kf/HTB1BfnLPpXXXXaMapXXq6xXFXXXg/2018.jpg'} 
        name={'D-shirt'} 
        price={ 4560} />
        <Card pic={'https://ae01.alicdn.com/kf/HTB10W3MHFXXXXbDXXXXq6xXFXXXk/50-s.jpg'} name={'Shirt'} price={ 8900}/>
        <Card pic={'https://www.1950sglam.com/wp-content/uploads/2018/11/Vera-Red-Crossover-V-Neck-Retro-Dress-rc-470x627.jpg'} name={'Dress'} price={ 5500}/>
        <Card pic={'https://clipground.com/images/clothing-png-2.png'} name={'Woman Dress'} price={ 9500}/>
         */}
         </div>
    )
}

export default MainPage