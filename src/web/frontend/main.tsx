import React, {useState} from "react";
import ReactDOM from "react-dom";
import ImageGroup from "./components/ImageGroup";

import "./reset.css";
import "./style.css";

const list = [
        "https://images.dog.ceo/breeds/hound-basset/n02088238_9595.jpg",
        "https://images.dog.ceo/breeds/terrier-irish/n02093991_1339.jpg",
        "https://images.dog.ceo/breeds/kelpie/n02105412_251.jpg",
        "https://images.dog.ceo/breeds/frise-bichon/jh-ezio-1.jpg"
    ];

const App = () => {

    return (
        <div className="app">
          <ImageGroup srcList={list}/>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById("root"),
);
