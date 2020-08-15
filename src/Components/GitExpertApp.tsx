import React, {Fragment, useState} from 'react';
import SearchInputApp from "./SearchInputApp";
import RowApp from "./RowApp";

const GitExpertApp = () => {

    const [lista, setLista] = useState(['Lista Uno']);

    const handleAdd = () => {
        let item: string = `Lista `.concat((lista.length + 1).toString());
        setLista(lista => [item, ...lista])
    }

    return (
        <Fragment>
            <h2>Gif App Expert</h2>
            <SearchInputApp setLista={setLista}/>
            <hr/>
            <button onClick={handleAdd} type="button" className="btn btn-primary mb-2">Add Item List</button>
            <div className="container">
                {lista.map(nome => <RowApp key={nome} lista={nome}/>)}
            </div>
        </Fragment>
    );

}

export default GitExpertApp;
