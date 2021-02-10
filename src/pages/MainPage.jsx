import React from "react"
import ccs from './main.module.css'
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
        <div className={ccs.container}>
            <div className={ccs.container_content}>
                <div className={ccs.content1}>
                <div className={ccs.zagolovok}>
                    <h2 className={ccs.h2_content}>Some Header text</h2>
                    <div className={ccs.h6_content}>
                    <h6 className={ccs.item_h6}>Some text</h6>
                    <h6 className={ccs.item_h6}>Some text</h6>
                    <h6 className={ccs.item_h6}>Some text</h6>
                    </div>
                    <div className={ccs.buy_button}>
                    <button>Купить сейчас</button>
                    </div>
                </div>

                <div className={ccs.slider_img}>
                <img src='https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/1:1/w_1079,h_1079,c_limit/fullsizeoutput_6bcd_1_1080x.jpg' alt='g'/>
                </div>

                </div>

            <div className={`${ccs.content2}`}>
                <h4 className={ccs.zagolovok_content2}>Some Header text</h4>
                <div className={`${ccs.blocks} wrapper`}>
                    <div className={ccs.blocks_content}>Фудболки</div>
                    <div className={ccs.blocks_content}>Худи</div>
                    <div className={ccs.blocks_content}>Тoлстовки</div>
                </div>
            </div>
        {
            arr.map((item) => {
                return <Card name={item.name} pic={item.pic} price={item.price}/>
            }
            )
        }
            </div>
            
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