import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const [single, setSingle] = useState([]);

    const link = useParams();

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${link.id}`).then(({ data }) =>
            setSingle(data)
        );
    }, []);


    return (
        <section className="SingleProduct">
            <div className="container">
                <div className="SingleProduct__cards">
                    <div className="SingleProduct__cards-card">

                        <img className="SingleProduct__img" src={single.image} alt="" />

                        <div className="SingleProduct__cards-info">

                            <div>
                                <p>
                                    <span>называние: </span>
                                    {single.title}
                                </p>
                                <p>
                                    <span>цена: </span>
                                    {single.price}$
                                </p>
                                <p>
                                    <span>категория: </span>
                                    {single.category}
                                </p>
                            </div>

                            <div>
                                <p className="SingleProduct__cards-des"><span>описание</span></p>
                                <p>
                                    {single.description}$
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="SingleProduct__cards-btns">
                       
                        <button className="SingleProduct__cards-buy">купить</button>
                       <Link to={`/`}>
                       <button className="SingleProduct__cards-back">назад</button>
                       </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SingleProduct