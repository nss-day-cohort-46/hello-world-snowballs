const cityCollection = [
    {
      name:"Reykjavik",
      population:"123,000",
      image: "../../../images/Reykjavik.jpg"
    },
    {
        name:"Akureyri",
        population:"18,200",
        image:"../../../images/Alkueyri.jpeg"
      },
      {
        name:"Kópavogur",
        population:"37,000",
        image: "../../../images/Kópavogur.jpg"
      }
]

export const useCityCollection = () => {
    return cityCollection.slice();
}