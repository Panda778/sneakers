import {useEffect} from "react";


const Header = ({onclick}) => {
    useEffect(() => {
        console.log(onclick)
    }, [onclick])
    return (

        <header className={'d-flex justify-between align-center p-40'}>
            <div className={'d-flex align-center'}>
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div>
                    <h3 className={'text-uppercase'}>React Sneaker</h3>
                    <p className={'opacity-5'}>Магазин лушчих кросовок</p>
                </div>

            </div>
            <ul className={'d-flex cu-p'}>
                <img width={18} height={18} src="/img/cart.svg" alt="" onClick={onclick}/>

                <li onClick={onclick} className={'mr-30'}>1250</li>
                <li>

                    <img width={18} height={18} src="/img/user.svg" alt=""/>

                </li>
            </ul>
        </header>

    )
}

export default Header