import React from "react"
import './header.css'
import basket from './../../images/shopping-cart.png'
import logotipe from './../../images/logotipe.jpg'
let Header = () => {
    return (
        <div className={'header__wrapper wrapper'}>
            <div>
                <div className={'img__logotipe'}> 
                    <img src={logotipe} alt="Logotipe"/>
                </div>
            </div>
            <div className={'menu__wrapper'}>
                <div className={'menu__items'}>Главная</div>
                <div className={'menu__items'}>Категории</div>
                <div className={'menu__items'}>Популярные</div>
                <div className={'menu__items'}>Новинки</div>
            </div>
            <div>
                <div className={"img__wrapper"}>
                    <img src={basket} alt='Corzina'/>
                </div>
            </div>
        </div>
    )
}

export default Header