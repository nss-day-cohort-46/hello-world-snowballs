const cityCollection = [
    {
        name:"Bridgetown",
        population:"110,000",
        image:"images/bridgetown.jpg"
    },
    {
        name:"Holetown",
        population:"1,600",
        image:"images/holetown.png"
    },
    {
        name:"Oistin",
        population:"2,300",
        image:"images/oistin.jpg"
    },
 
]

export const useCityCollection = () =>{
    return cityCollection.slice()
}
