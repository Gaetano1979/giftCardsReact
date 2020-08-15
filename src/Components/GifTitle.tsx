import React from "react";
type tipos = {title:string};

const GifTitle = ({title}:tipos) => {
    return (
        <>
            <h3>{title}</h3>
        </>
    )
}


export default GifTitle;
