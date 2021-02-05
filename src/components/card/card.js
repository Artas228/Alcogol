import React from "react"
import classes from './card.module.css'
import MainPage from './../../pages/MainPage.jsx'


const Card = (props) => {
    console.log(props)
    return (
        <div className={classes.container}>
            
            <div className={classes.img_container}>
                <img className={classes.img_conainer}
                src={props.pic}
                alt='Dress'/>
                <span>{props.price+" сом"}</span>
            </div>
            <div>
                <div className={classes.name_container}>
                <div>{props.name}</div>
                <div>stars</div>
                </div>
            </div>
        </div>
    )
}

export default Card