const citiesCollection = [
  {
    name: "Paris",
    population: "2.2 Million",
    image: "../../../images/paris_city.jpg"
  },
  {
    name: "Loire Valley",
    population: "3.6 Million",
    image: "../../../images/loire_valley_city.jpg"
  },
  {
    name: "Marseille",
    population "861,635",
    image: "../../../images/marseille_city.jpg"
  }
]

export const useCitiesCollection = () => {
  return citiesCollection.slice()
}