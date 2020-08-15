import {fromFetch} from "rxjs/fetch";
import {map, pluck} from "rxjs/operators";
import {Observable} from "rxjs";

const api_key = 'NpQmNITAS3whTrjvQTeMawP9CeTdwrdD'


export const getImgs = (categoria: string):Observable<{ id: number, title: string, url: string }[]> => {
    return fromFetch(`https://api.giphy.com/v1/gifs/search?limit=5&api_key=${api_key}&q=${encodeURI(categoria)}`,
        {selector: response => response.json()})
        .pipe(
            pluck('data'),
            map((data: any[]) => data.map(({id, title, images}) => ({
                id,
                title,
                url: images?.downsized_medium.url
            }))),
        )
}

