import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
    const [c, increment] = useState(0);

    return (
        <div className="app">
            <h1>{c}</h1>
            <button onClick={() => increment(c + 1)}>Press me</button>
            <div className="img-container">
              <img src="https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1972.jpg"/>
            </div>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById("root"),
);
