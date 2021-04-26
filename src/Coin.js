import React from "react";

const Coin = ({data}) => {
    return <img src={data.imgSrc} alt={data.alt}></img>;
}

export default Coin;
