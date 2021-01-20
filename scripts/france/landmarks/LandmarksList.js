import {useLandmarksCollection} from "./LandmarksDataProvider.js"
import {Landmark} from "./Landmarks.js"

export const FranceLandmarksList = () => {
  const contentElement = document.querySelector(".france__bottomContainer__landmarks")
  const landmarks = useLandmarksCollection()

  let landmarksHTMLRepresentation = "<h2>Famous Landmarks</h2>"
  for (const landmark of landmarks) {
    landmarksHTMLRepresentation += Landmark(landmark)
  }

  contentElement.innerHTML += `
      ${landmarksHTMLRepresentation}
  `
}