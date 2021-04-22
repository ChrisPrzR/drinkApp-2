import { useState, useEffect } from 'react';
import { getDrink } from '../helpers/getDrink'


export const useFetchDrinks = ( drink ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getDrink( drink )
            .then( element => {
                setstate({
                    data: element,
                    loading: false
                })
            })
    }, [drink]);
    return state
}