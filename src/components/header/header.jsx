import React from "react"
import css from'./header.module.css'
import basket from './../../images/shopping-cart.png'
import logotipe from './../../images/logotipe.jpg'
import {Link} from 'react-router-dom'

let Header = () => {
    return (
        <div className={`${css.wrapper} wrapper` }>
            <div>
                <div> 
                <Link to={'/'} className={css.img__logotipe}>
                <img src={logotipe} alt="Logotipe"/>
                </Link>
                    
                </div>
            </div>
            <div className={css.menu}>
                <div className={css.items}>Главная</div>
                <div className={css.items}>Категории</div>
                <div className={css.items}>Популярные</div>
                <div className={css.items}>Новинки</div>
            </div>
            <div>
                <div>
                    <Link to={'/basket'} className={css.img} >
                    <img src={basket} alt='Corzina'/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header