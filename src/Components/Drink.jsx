import React from 'react'
import { useFetchDrinks } from '../hooks/useFetchDrinks'

export const Drink = ({endpoint}) => {

    const {data, loading} = useFetchDrinks(endpoint) 

   // const [newDrink, setNewDrink] = useState([])

    return (
        <div className="flex justify-center caroussel-container ">
            {
                loading && <p className="flex justify-center mt-10">Loading...</p>
            }
            {
                data.map(el => 
                    <div key={el.idDrink} className="animate__animated animate__fadeInLeft rounded flex justify-center mt-10 bg-opacity-10 bg-no-repeat bg-cover bg-center max-w-md" alt={el.strDrink} style={{backgroundImage: "url(" + el.strDrinkThumb +")"}} >
                        <div className="rounded flex flex-col p-11 bg-white bg-opacity-50 text-gray-800">
                            <h3 className="text-2xl font-semibold">{el.strDrink}</h3>
                            <h4 className="text-xl font-medium">Ingredients</h4>
                            <ul className="text-sm font-normal">
                                {el.strIngredient1 ? <li><p>{el.strIngredient1}: {el.strMeasure1}</p></li> : ''}
                                {el.strIngredient2 ? <li><p>{el.strIngredient2}: {el.strMeasure2}</p></li> : ''}
                                {el.strIngredient3 ? <li><p>{el.strIngredient3}: {el.strMeasure3}</p></li> : ''}
                                {el.strIngredient4 ? <li><p>{el.strIngredient4}: {el.strMeasure4}</p></li> : ''}
                                {el.strIngredient5 ? <li><p>{el.strIngredient5}: {el.strMeasure5}</p></li> : ''}
                                {el.strIngredient6 ? <li><p>{el.strIngredient6}: {el.strMeasure6}</p></li> : ''}
                                {el.strIngredient7 ? <li><p>{el.strIngredient7}: {el.strMeasure7}</p></li> : ''}
                                {el.strIngredient8 ? <li><p>{el.strIngredient8}: {el.strMeasure8}</p></li> : ''}
                                {el.strIngredient9 ? <li><p>{el.strIngredient9}: {el.strMeasure9}</p></li> : ''}
                                {el.strIngredient10 ? <li><p>{el.strIngredient10}: {el.strMeasure10}</p></li> : ''}
                                
                            </ul>
                            <p className="text-sm font-normal"><b>Instructions: </b>{el.strInstructions}</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}
