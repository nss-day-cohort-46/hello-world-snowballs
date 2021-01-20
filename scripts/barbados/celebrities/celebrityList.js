import {useCelebrityCollection} from "./celebrityProvider.js"
import {Celebrity} from "./celebrity.js"



export const barbadosCelebrities = () => {

    
    // stores the targeted HTML id and stores it in a variable.
    const contentElement = document.querySelector(".barbados__bottomContainer__people")

    // stores the imported function into a variable
    const famousPeeps = useCelebrityCollection()

    // declares a variable that converts its contents into a string
let barbadosCelebrityHTML = ""

    // runs a loop that converts objects in an array  to HTML and stores in the above variable 
for (const peeps of famousPeeps ) {
    barbadosCityHTML += Celebrity(peeps)
}

    // writes the loaded variable and  the HTML <h3> into the targeted HTML id
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Cities</h3>
${barbadosCelebrityHTML}
`
}