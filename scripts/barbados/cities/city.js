export const City = (cityObj) =>{
    return`
    <section class="cityObjectCard">
    <div class="city__name"> CITY: ${cityObj.name}</div>
    <div class="city__population>POPULATION: ${cityObj.population}</div>
    <div class="city__image"><img src="${cityObj.image}" width="200px"/></div>

    `
}