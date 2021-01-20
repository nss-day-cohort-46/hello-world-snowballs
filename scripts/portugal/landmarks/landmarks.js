export const Landmark = (landmarkObj) => {
    return `
        <section class="landmarkObj card">
        <div><img  class="landmarkObj__image image--card" src="${landmarkObj.image}" width = "400px" /></div>            
            <div class="landmarkObj__name">Landmark: ${landmarkObj.name}</div>
        </section>
    `
}