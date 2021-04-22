import React, { useState } from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"

import { SearchIngredient } from './Components/SearchIngredient'
import { SearchName } from './Components/SearchName'
import { Drink } from './Components/Drink';

export const DrinkApp = () => {

    const [random, setRandom] = useState(false)
    //const [search, setSearch] = useState('')

    const handleClickRandom = () => {
        setRandom(!random)
    }


    return (
        <div className="container mx-auto sm:w-full md:w-5/12 max-w-screen-xl">
            <h2 className="flex justify-center m-10 text-5xl text-gray-100">DrinkApp</h2>
            <h1 className="flex justify-center mb-6 text-2xl text-gray-100">A new way of making cocktails</h1>
            <hr/>

                {   
                    random && 
                    <Drink endpoint={'/random.php'}/>
                }
                {
                    !random ? 
                    <div className="flex justify-center m-10">
                        <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClickRandom}>Get a recipe now</button>
                    </div>
                    :  
                    <div className="flex justify-center m-10">
                        <button className="bg-red-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClickRandom}>Close this</button>
                    </div>
                }
            <SearchIngredient endpoint={'/list.php?i=list'}/>
            <SearchName endpoint={'/search.php?s='}/>
        </div>
    )
}
