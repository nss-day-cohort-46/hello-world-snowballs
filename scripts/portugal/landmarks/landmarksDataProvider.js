const landmarksCollection = [
    {
    name: "Name: Dom Luis Bridge",
    image: "images/portugal/porto-with-dom-luis-bridge-portugal-photo.jpg"
 
    },
    {
        name: "Name: Benagil Sea Cave",
        image: "images/portugal/benagilSeaCave.jpg"
     
        },
        {
            name: "Name: Pena Palace",
            image: "images/portugal/PenaPalace.jpg"
         
            }
            

]

export const useLandmarksCollection = () => {
    return landmarksCollection.slice()

}