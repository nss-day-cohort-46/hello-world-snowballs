const celebCollection = [
    {
        name:"Bjork",
        image:"../../../images/bjork.jpg"
    },
    {
        name:"Bjarni Tryggvason",
        image:"../../../images/spaceboy.jpg"
    },
    {
        name:"Stefan Karl Stefansson",
        image:"../../../images/bonk.png"
    }
]

export const useCelebCollection = () => {
    return celebCollection.slice();
}