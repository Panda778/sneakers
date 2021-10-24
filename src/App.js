import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12990,
        imgUrl: '/img/sneakers/1.jpg',
        id: 1
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: 17490,
        imgUrl: '/img/sneakers/2.jpg',
        id: 2
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 14000,
        imgUrl: '/img/sneakers/3.jpg',
        id: 3
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Raider',
        price: 32220,
        imgUrl: '/img/sneakers/4.jpg',
        id: 4
    }
]
function App() {

    return (
        <div className="wrapper clear">

          <Drawer/>

      <Header/>

            <div className="content p-40">
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>Все кроссовки</h1>
                    <div className={'search-block'}>
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder={'Поиск...'}/>
                    </div>
                </div>

                <div className="d-flex">
                    {arr.map((item)=>
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
