import {City} from "./cities.js"
import {useCityCollection} from "./citiesDataProvider.js"

export const IcelandCityList = () => {
const contentElement = document.querySelector(".ice__bottomContainer__cities");
const cityArray = useCityCollection()

let cityHTMLRepresentation = "<h2>Famous Cities</h2>";
for (const city of cityArray) {
    cityHTMLRepresentation += City(city)
}

contentElement.innerHTML += `
${cityHTMLRepresentation}
`
}