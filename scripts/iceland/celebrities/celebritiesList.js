// import { IcelandCityList } from "../cities/citiesList.js"
import { Celebrity } from "./celebrities.js"
import {useCelebCollection} from "./celebritiesDataProvier.js"

export const IcelandCelebList = () => {

    const contentElement = document.querySelector(".bottomContainer__people");
    const celebArray = useCelebCollection()

    let celebHTMLRepresentation = "<h2>Famous People</h2>";
    for (const celeb of celebArray) {
        celebHTMLRepresentation += Celebrity(celeb)
    }
    contentElement.innerHTML += `
    ${celebHTMLRepresentation}
    `
}