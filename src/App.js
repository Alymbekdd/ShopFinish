import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { useEffect, useState, } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Main/Cart/Cart';
import SingleProduct from './components/Main/SingleProduct/SingleProduct';



function App() { 

    const[corzina, setCorzina]=useState(()=>{
        const localData = localStorage.getItem("kart")
        return localData?JSON.parse(localData):[]

    })

    useEffect(()=>{
      localStorage.setItem("kart", JSON.stringify(corzina))
    },[corzina])
 
    return (
                <div className="App">
                    <BrowserRouter>
                        <Header corzina={corzina} setCorzina={setCorzina}/>
                        <Routes>
                            <Route path='/' element={<Main corzina={corzina} setCorzina={setCorzina}/>}/>
                            <Route path='/Cart' element={<Cart corzina={corzina} setCorzina={setCorzina}/>}/>
                            <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
    );
}


export default App;
