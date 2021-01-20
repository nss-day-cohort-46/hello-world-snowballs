const landmarkCollection = [
    {
        name:"Solfarid Sculpture",
        image:"../../../images/solfad.jpg"
    },
    {
        name:"Hallgrímskirkja Church",
        image:"../../../images/Halchurch.jpg"
    },
    {
        name:"Gullfoss",
        image:"../../../images/gull .jpg"
    }
]
export const useLandmarkCollection = () => {
return landmarkCollection.slice();
}