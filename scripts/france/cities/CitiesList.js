import { useCitiesCollection } from "./CitiesDataProvider.js"
import { City } from "./Cities.js"

export const FranceCitiesList = () => {
  const contentElement = document.querySelector(".france__bottomContainer__cities")
  const cities = useCitiesCollection()

  let citiesHTMLRepresentations = "<h2>Famous Cities</h2>"
  for (const city of cities) {
    citiesHTMLRepresentations += City(city)
  }

  contentElement.innerHTML += `
      ${citiesHTMLRepresentations}
  `
}