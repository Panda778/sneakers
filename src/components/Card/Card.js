import styles from './Card.module.scss'
import {useState} from "react";

const Card = ({title, price, imgUrl,onFavorite,onPlus}) => {

    const [isAdded, setIsAdded] = useState(false)

    const handleChange = () => {
        onPlus({title,price,imgUrl})
        setIsAdded(!isAdded)
    }


    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/heart-unlicked.svg" alt=""/>
            </div>
            <img width={133} height={112} src={imgUrl} alt=""/>
            <h5>{title}</h5>
            <div className={'d-flex justify-between align-center'}>
                <div className={'d-flex flex-column '}>
                    <span>price:</span>
                    <b>{price}</b>
                </div>

                <img className={isAdded === false?  `${styles.plus}`:`${styles.checked}`} onClick={handleChange}
                     src={isAdded === false ?'./img/plus.svg' :'./img/check-mark.png' } alt=""/>

            </div>
        </div>
    )
}

export default Card