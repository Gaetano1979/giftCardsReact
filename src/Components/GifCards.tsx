import React, {Fragment, useState} from 'react';
import {fromFetch} from "rxjs/fetch";
import {map, pluck, take} from "rxjs/operators";




const GifCards = (props:{category:string}) => {
    const {category} = props;
    const [images, setImages] = useState([]);

    fromFetch('https://api.giphy.com/v1/gifs/search?limit=10&api_key=NpQmNITAS3whTrjvQTeMawP9CeTdwrdD&q=hello',
        {selector:response => response.json()})
        .pipe(
            pluck('data'),
            map((data:any[]) =>  data.map(({id,title,images}) => ({id, title, url: images?.downsized_medium.url}))),
            take(1)

        )
        // @ts-ignore
        .subscribe(setImages)

    const stile = {width:'18rem'}

    return (
        <Fragment>
            <h3>{category}</h3>
            <ul>
                {images.map(({id,title,url}) => {
                    return (
                        <div key={id} className="card mb-2" style={stile}>
                            <img src={url} alt=""/>
                            <div className="card-body">
                                <div className="card-title">{title}</div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </Fragment>
    )


};

export default GifCards;
