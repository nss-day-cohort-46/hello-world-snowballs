import { Landmark } from "./landmarks.js"
import {uselandmarksCollection } from "./landmarksDataProvider.js"

export const PortugalLandmarksList = () => {
  // debugger
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".portugal__bottomContainer__landmarks")
  
  const landmarks = uselandmarksCollection()
  


  let landmarksHTMLRepresentation = "<h3>Famous landmarks</h3>"
  for (const landmark of landmarks) {
      landmarksHTMLRepresentation += Landmark(landmark)
  }

  contentElement.innerHTML += `
    ${landmarksHTMLRepresentation}
  `
  }
