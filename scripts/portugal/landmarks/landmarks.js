export const Landmarks = (landmarksObj) => {
    return `
        <section class="landmarksObj card">
        <div><img  class="landmarksObj__image image--card" src="${landmarksObj.image}" width = "400px" /></div>            
            <div class="landmarksObj__name">landmarks: ${landmarksObj.name}</div>
        </section>
    `
}