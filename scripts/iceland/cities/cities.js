export const City = (city) => {
    return `<section class="cityCard">
<div class = "city__name">${city.name}</div>
<div class = "city__population">${city.population}</div>
<div class = "city__image"><img src="${city.image}" width="250px"></div>
</section>
`  
}