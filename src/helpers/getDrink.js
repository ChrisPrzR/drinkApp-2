export const getDrink = async( drink ) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/${drink}`;
    const resp = await fetch(url);
    const { drinks } =  await resp.json();
    
    return drinks;
};
