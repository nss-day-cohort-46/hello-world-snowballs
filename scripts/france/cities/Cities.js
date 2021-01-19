export const City = (cityObj) => {
  return `
      <div>
        <div>City: ${cityObj.name}</div>
        <div>Population: ${cityObj.population}</div>
        <div><img class="city__image" src="${cityObj.image}"></div>
      </div>
  `
}