import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";


function App() {


    const [items, setItems] = useState([])
    const [cartOpen, setCartOpen] = useState(false)
    const visible = () => {
        setCartOpen(!cartOpen)
    }


    useEffect(() => {
        fetch('https://617500c408834f0017c70aba.mockapi.io/items').then((response) => {
            return response.json()
        }).then(json => {
            setItems(json)
        })

    }, [])

    return (
        <div className="wrapper clear">

            {cartOpen && <Drawer onclick={visible}/>}

            <Header onclick={visible}/>

            <div className="content p-40">
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>Все кроссовки</h1>

                    <div className={'search-block'}>
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder={'Поиск...'}/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((item, index) =>
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}

                        />)}
                </div>

            </div>
        </div>
    );
}

export default App;
