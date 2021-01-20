export const Celebrity = (celebrity) => {
    return `<section class="celebrityCard">
<div class = "celebrity__name">${celebrity.name}</div>
<div class = "celebrity__image"><img src="${celebrity.image}" width="250px"></div>
</section>
`  }