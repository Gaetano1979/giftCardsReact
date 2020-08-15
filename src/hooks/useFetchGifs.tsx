import {useEffect, useState} from "react";
import {getImgs} from "../helper/functions";
import {IData} from "../Components/CardApp";

export interface IStateCategory {
    data: IData[],
    loading: boolean
}


export const useFetchGifts = (category: string) => {

    const [state, setState] = useState<IStateCategory>({
        data: [],
        loading: true
    });

    useEffect(() => {
        getImgs(category).subscribe(data => {
            setState({data, loading: false})
        })
    }, [category]);

    return state;
}
