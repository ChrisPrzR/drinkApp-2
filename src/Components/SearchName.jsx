import React, { useState } from 'react';
import { useFetchDrinks } from '../hooks/useFetchDrinks';
import { DrinkGallery } from './DrinkGallery';

export const SearchName = ({endpoint}) => {

    const [search, setSearch] = useState('');
    const [gallery, setGallery] = useState(false);


    const handleChange = (event) => {
        setSearch(event.target.value)
        setGallery(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(e && !data){
            setSearch('')
            return
        }
        if(search !== '')
        setGallery(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        if(gallery === true){
            setSearch('')
        }
        setGallery(false)
    }
    

    const {data} = useFetchDrinks(endpoint + search)

    return (
        <div className="m-10">
            <div className="block mb-6">
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input list="drinks" className="rounded mr-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Type a drink name here" type="text" value={search} onChange={handleChange}/>
                    <button type="submit" className="p-2 mr-2 border-solid border-purple-600 bg-purple-100 hover:bg-purple-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Search</button>
                    <button className="p-2  border-solid border-pink-400 bg-pink-100 hover:bg-pink-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClose}>X</button>
                    {
                        !data && <p>Sorry, Drink not found</p>
                    }
                </form>
            </div>
            {
                gallery &&
                <DrinkGallery endpoint={'search.php?s='} search={search}/>
            }
        </div>
    )
}
