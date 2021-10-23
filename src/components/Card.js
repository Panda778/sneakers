


const Card = ()=>{
    return(
        <div className={'card'}>
            <div className={'favourite'}>
                <img src="/img/heart-unlicked.svg" alt=""/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className={'d-flex justify-between align-center'}>
                <div className={'d-flex flex-column '}>
                    <span>price:</span>
                    <b>12 990$</b>
                </div>
                <button className={'button'}>
                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Card