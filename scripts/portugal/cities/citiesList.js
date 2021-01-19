import { City } from "./cities.js"
import {useCitiesCollection } from "./citiesDataProvider.js"

export const PortugalCitiesList = () => {
  // debugger
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".portugal__bottomContainer__cities")
  
  const cities = useCitiesCollection()
  // console.log("holyFish", holyCityArray)


  let citiesHTMLRepresentation = "<h3>Famous City</h3>"
  for (const city of cities) {
      citiesHTMLRepresentation += City(city)
  }

  contentElement.innerHTML += `
    ${citiesHTMLRepresentation}
  `
  }
