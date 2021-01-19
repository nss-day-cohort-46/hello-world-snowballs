export const City = (cityObj) => {
  return `
      <div class="city__card">
        <div class="city__name">City: ${cityObj.name}</div>
        <div class="city__population">Population: ${cityObj.population}</div>
        <div><img class="city__image" src="${cityObj.image}"></div>
      </div>
  `
}