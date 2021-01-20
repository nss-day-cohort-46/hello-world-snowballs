import {useCelebsCollection} from "./CelebritiesDataProvider.js"
import {Celeb} from "./Celebrities.js"

export const FranceCelebsList = () => {
  const contentElement = document.querySelector(".france__bottomContainer__people")
  const celebs = useCelebsCollection()

  let celebsHTMLRepresentation = "<h2>Famous People</h2>"
  for (const celeb of celebs) {
    celebsHTMLRepresentation += Celeb(celeb)
  }

  contentElement.innerHTML += `
      ${celebsHTMLRepresentation}
  `
}