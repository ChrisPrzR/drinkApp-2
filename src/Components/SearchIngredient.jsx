import React, { useState } from 'react'
import { useFetchDrinks } from '../hooks/useFetchDrinks'
import { DrinkGallery } from './DrinkGallery';

export const SearchIngredient = ({endpoint}) => {

    const [search, setSearch] = useState('');
    const [gallery, setGallery] = useState(false)

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const {data} = useFetchDrinks(endpoint)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search === ''){
            return
        }
        if(gallery === true){
            setSearch('')
        }
        setGallery(!gallery)
    }

    return (
        <div className="m-10 ">
            <div className="block mb-6">
                <form onSubmit={handleSubmit} className="flex justify-center" >
                    <input className="rounded mr-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" list="ingredients" type="text" value={search} placeholder="Pick an ingredient" onChange={handleChange}/>
                    <datalist id="ingredients">
                    {
                        data.map(el =>
                        <option key={el.strIngredient1} value={el.strIngredient1}/>
                        )
                    }
                    </datalist>
                    <button type="submit" className="p-2 mr-2 border-solid border-purple-600 bg-purple-100 hover:bg-purple-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Search</button>
                    <button className="p-2  border-solid border-pink-400 bg-pink-100 hover:bg-pink-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSubmit}>X</button>
                </form>
            </div>
            {
                gallery &&
                <DrinkGallery endpoint={'filter.php?i='} search={search}/>
            }
        </div>
    )
}
