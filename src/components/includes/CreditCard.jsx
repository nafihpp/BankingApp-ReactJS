import React from "react";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const MyCards = () => {
    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div id="PaymentForm">
            <Cards
                cvc={data.cvc}
                expiry={data.expiry}
                focused={data.focus}
                name={data.name}
                number={data.number}
            />
            <form>
                <input
                    type="number"
                    name="number"
                    maxlength="10"
                    placeholder="Card Number"
                    onChange={handleInputChange}
                />
                <input
                    type="month"
                    name="expiry"
                    placeholder="Expiry"
                    min="2018-03"
                    value="2018-05"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="number"
                    placeholder=""
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
};

export default MyCards;
