const celebsCollection = [
  {
    name: "Tony Parker",
    image: "images/tony_parker.jpg"
  },
  {
    name: "Coco Chanel",
    image: "images/coco_chanel.jpg"
  },
  {
    name: "Avril Lavigne",
    image: "images/avril_lavigne.jpg"
  }
]

export const useCelebsCollection = () => {
  return celebsCollection.slice()
}