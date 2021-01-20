import {Landmark} from "./landmark.js"
import {useLandmarkCollection} from "./landmarkDataProvider.js"

export const IcelandLandmarkList = () => {
    const contentElement = document.querySelector(".ice__bottomContainer__landmarks");
    const landmarkArray = useLandmarkCollection()

    let LandmarkHTMLRepresentation = "<h2>Famous Landmarks</h2>";
    for (const landmark of landmarkArray) {
        LandmarkHTMLRepresentation += Landmark(landmark)
    }

    contentElement.innerHTML += `
    ${LandmarkHTMLRepresentation}
    `
}