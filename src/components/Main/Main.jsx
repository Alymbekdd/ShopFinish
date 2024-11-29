import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Main({corzina, setCorzina}) {

    const [allProducts, setAllproducts] = useState([]);

    const get_product = () => {
        axios("https://fakestoreapi.com/products").then(({ data }) =>
            setAllproducts(data)
        );
    };

    const buyCart = (obj)=>{

        const idx = corzina.findIndex((el) => el.id === obj.id);

        if(idx === -1){
            setCorzina([
                ...corzina,
                {
                ...obj,
                count:1,
            }
        ]);
        }else{
            corzina[idx].count++
            setCorzina([...corzina]);
        }

    }

    get_product();

    return (
        <main className="main">
            <div className="container">
                <div className="main__cards">
                    {/* <button onClick={() => get_product()}>получить весь продукт</button> */}
                    {allProducts.map((item, idx) => {
                        return (
                            <div className="main__cards-card">
                                <img className="main__img" src={item.image} alt="" />

                                <div className="main__cards-info">

                                    <div>
                                        <p>
                                            <span>называние: </span>
                                            {item.title.substring(0, 20)}..
                                        </p>
                                        <p>
                                            <span>цена: </span>
                                            {item.price}$
                                        </p>
                                        <p>
                                            <span>категория: </span>
                                            {item.category}
                                        </p>
                                    </div>

                                    <div className="main__cards-btns">
                                       
                                        <button className="main__cards-buy" onClick={()=> buyCart(item)}>купить</button>

                                        <Link to={`/SingleProduct/${item.id}`}>
                                        <button className="main__cards-pod  ">подробнее</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    );

};


export default Main;

