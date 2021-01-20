import { Celebrities } from "./celebrities.js"
import {useCelebritiesCollection } from "./celebritiesDataProvider.js"

export const PortugalCelebritiesList = () => {
  // debugger
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".portugal__bottomContainer__people")
  
  const celebrities = useCelebritiesCollection()
  


  let celebritiesHTMLRepresentation = "<h3>Famous Celebrities</h3>"
  for (const celebrity of celebrities) {
      celebritiesHTMLRepresentation += Celebrities(celebrity)
  }

  contentElement.innerHTML += `
    ${celebritiesHTMLRepresentation}
  `
  }
