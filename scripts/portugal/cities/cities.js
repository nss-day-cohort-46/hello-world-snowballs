export const City = (cityObj) => {
    return `
        <section class="cityObj card">
        <div><img  class="cityObj__image image--card" src="${cityObj.image}" width = "400px" /></div>            
            <div class="cityObj__name">City: ${cityObj.name}</div>
            <div class="CityObj__species">Population: ${cityObj.population}</div>
        </section>
    `
}