const landmarkCollection = [
    {
        name:"Harrison's Cave",
        image:"images/harrisons_cave.jpg"
    },
    {
        name:"Andromeda Botanic Gardens",
        image:"images/botantical gardens.jpg"
    },
    {
        name:"Carlisle Bay",
        image:"images/carlisle bay park.jpg"
    },
]

export const useLandmarkCollection = () =>{
    return landmarkCollection.slice()
}