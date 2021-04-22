import React, { useState} from 'react';
import Slider from 'react-slick';
import { useFetchDrinks } from '../hooks/useFetchDrinks';
import { Drink } from './Drink';


export const DrinkGallery = ({endpoint, search}) => {

    const [card, setCard] = useState('')
    

    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeigh: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
    };

      
    const {data, loading} = useFetchDrinks(endpoint + search)

    const handleOpenCard = (e) => {
        e.preventDefault()
        setCard(e.target.id)
    }

    return (
        <div className="caroussel-container">
            {
                loading && <p>Loading...</p>
            }
            <Slider {...settings}>
                {
                    data.map
                    (
                        drink => 
                        <div className="card-container animate__animated animate__fadeInLeft" key={drink.idDrink} >
                            <div className="bg-white bg-opacity-50" >
                                <img src={drink.strDrinkThumb} alt={drink.strDrink} id={drink.idDrink} onClick={handleOpenCard} />
                                <p>{drink.strDrink}</p>
                            </div>
                        </div>
                        
                    )
                }
            </Slider>

            <div>
                {
                    card !== '' &&
                    <Drink endpoint={'lookup.php?i=' + card}/>
                }
                
            </div>
           
        </div>
    )
}
