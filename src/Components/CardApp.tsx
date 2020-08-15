import React from "react";


export interface IData {
    id: number,
    title: string,
    url: string
}

const CardApp = ({ title, url}: IData) => {
    const stile = {width: '10rem', maxHeight: '80px !important'}
    const stylesrc = {width: '80%', text: 'center', margin: 'auto', height: '100px'}
    return (
        <div className="col">
            <div className="card mb-2" style={stile}>
                <img className="card-img-top" src={url} alt="" style={stylesrc}/>
                <div className="card-body">
                    <div className="card-title">{title}</div>
                </div>
            </div>
        </div>

    )
}

export default CardApp;
