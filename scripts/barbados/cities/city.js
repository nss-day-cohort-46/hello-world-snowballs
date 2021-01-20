export const City = (cityObj) =>{
    return`
    <section class="cityObjectCard">
    <div class="city__name"> CITY: ${cityObj.name}</div>
    <div class="city__population">POPULATION: ${cityObj.population}</div>
    <div class="city__image"><img src="${cityObj.image}"height="300" width="300px"/></div>

    `
}