// @flow
import React, { useState} from 'react';
import PropTypes from "prop-types";



// @ts-ignore
const SearchInputApp = (props:{setLista:React.Dispatch<any>}) => {
    const {setLista}=props;
    const [value,setValue] = useState<string>('');
    const changeValue = ( evento:any ) => {

        console.log(evento.target.value)
        setValue(evento.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setLista( (lista:string[]) =>  [...lista,value]);
        setValue('');
        console.log(e);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={changeValue}
            />
        </form>
    );
};

SearchInputApp.prototype = {
    setLista:PropTypes.func.isRequired
}



export default SearchInputApp;
