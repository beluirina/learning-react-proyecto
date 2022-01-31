import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';

function App() {
  fetch('assets/Data.json')
    // .then(res => res.json)
    .then(resp => console.log(resp.productos))
  //catch finally

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>

          <Route exact path='/cart' element={<CartWidget/>}/>

          <Route exact path='/details/:idProduct' element={<ItemDetailContainer/>}/>
          
          <Route exact path='/category/:idCategory' element={<ItemListContainer/>}/>

        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
