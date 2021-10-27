import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";


function App() {


    const [items, setItems] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [searchValue,setSearchValue ] = useState('')
    const [cartOpen, setCartOpen] = useState(false)
    const visible = () => {
        setCartOpen(!cartOpen)
    }
    const onAddToCart = (obj) => {
        setCartItem([...cartItem, obj])
    }

    const onChangeSearchInput = (e)=>{
       setSearchValue(e.target.value)
    }


    console.log(cartItem)
    useEffect(() => {
        fetch('https://617500c408834f0017c70aba.mockapi.io/items').then((response) => {
            return response.json()
        }).then(json => {
            setItems(json)
        })

    }, [])

    return (
        <div className="wrapper clear">

            {cartOpen && <Drawer  items={cartItem} onclick={visible}/>}

            <Header onclick={visible}/>

            <div className="content p-40">
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>

                    <div className={'search-block'}>
                        <img src="/img/search.svg" alt="search"/>
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder={'Поиск...'}/>
                        <img width={20} height={20}  onClick={()=>setSearchValue('')}  className={'removeBtn pt-5'} src="/img/btn-remove.svg" alt=""/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.filter((item)=> item.title.toLowerCase().includes(searchValue)).map((item, index) =>
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onFavorite={() => console.log('favorite')}
                            onPlus={(obj) => onAddToCart(obj)}
                            onchange={()=> console.log('fe')}
                        />)}
                </div>

            </div>
        </div>
    );
}

export default App;
