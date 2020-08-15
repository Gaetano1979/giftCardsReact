import React from 'react';
import {useFetchGifts} from "../hooks/useFetchGifs";
import CardApp from "./CardApp";

type tipos = { lista: string }
const RowApp = ({lista}: tipos) => {
    const stilo = {maxHeight: '150px'}

    const {data,loading} = useFetchGifts(lista);

    return (

        <div key={lista} className="row" style={stilo}>
            {loading && <p>...Cargando</p>}
            {data.map((img: { id: number, title: string, url: string }) => <CardApp key={img?.id} {...img}/>)}
        </div>

    );

}

export default RowApp;
