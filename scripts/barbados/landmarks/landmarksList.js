import {useLandmarkCollection} from "./landmarksProvider.js"
import {Landmark} from "./landmarks.js"

export const barbadosLandmarks = () => {
    // stores the targeted HTML id and stores it in a variable.
    const contentElement = document.querySelector(".barbados__bottomContainer__landmarks")

    // stores the imported function into a variable
    const famousLandmarks = useLandmarkCollection()

    // declares a variable that converts its contents into a string
let barbadosLandmarksHTML = ""

    // runs a loop that converts objects in an array  to HTML and stores in the above variable 
for (const land of famousLandmarks ) {
    barbadosLandmarksHTML += Landmark(land)
}

    // writes the loaded variable and  the HTML <h3> into the targeted HTML id
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Landmarks</h3>
${barbadosLandmarksHTML}
`
}

