const landmarksCollection = [
  {
    name: "Louvre Museum",
    image: "images/louvremuseum.jpg"
  },
  {
    name: "Arc de Triomphe",
    image: "images/arcdetriomphe.jpg"
  },
  {
    name: "Palace of Versailles",
    image: "images/palaceofversailles.jpg"
  }
]

export const useLandmarksCollection = () => {
  return landmarksCollection.slice()
}