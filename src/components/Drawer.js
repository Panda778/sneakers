

const Drawer = ({onclick})=>{


    return(
        <div  className={'overlay'}>
            <div className="drawer">
                <h2 className={'mb-30 d-flex justify-between '}>Корзина <img onClick={onclick} className={'cu-p removeBtn'}
                                                                             src="/img/btn-remove.svg" alt=""/></h2>

                <div className={'items flex'}>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className={'cardItemImg'}>
                        </div>

                        <div className={'mr-20 flex'}>
                            <p className={'mb-5'}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 990</b>
                        </div>
                        
                        <img className={'removeBtn'} src="/img/btn-remove.svg" alt=""/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className={'cardItemImg'}>
                        </div>

                        <div className={'mr-20 flex'}>
                            <p className={'mb-5'}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 990</b>
                        </div>
                        <img className={'removeBtn'} src="/img/btn-remove.svg" alt=""/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className={'cardItemImg'}>
                        </div>

                        <div className={'mr-20 flex'}>
                            <p className={'mb-5'}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 990</b>
                        </div>
                        <img className={'removeBtn'} src="/img/btn-remove.svg" alt=""/>
                    </div>

                </div>
                <div className={'card-total-block'}>
                    <ul>
                        <li className={'d-flex'}>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 </b>
                        </li>
                        <li className={'d-flex'}>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074</b>
                        </li>
                    </ul>
                    <button className={'greenButton'}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Drawer