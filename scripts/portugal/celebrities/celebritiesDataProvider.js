const celebritiesCollection = [
    {
    name: "Name: Cristian Ronaldo",
    
    image: "images/portugal/cristiano-ronaldo-portugal_q5pbq2bgqojy1e0xdy8zl7tjb.jpg"
 
    },
    {
        name: "Name: Jose Mourinho",
        
        image: "images/portugal/JoseMourinho.jpgg"
     
        },
    {
        name: "Name: Eusebio",
            
        image: "images/portugal/EusebioOfPortugal.jpeg"
         
    }
]

export const useCelebritiesCollection = () => {
    return celebritiesCollection.slice()

}