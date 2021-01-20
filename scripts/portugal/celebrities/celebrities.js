export const Celebrities = (celebritiesObj) => {
    return `
        <section class="celebritiesObj card">
        <div><img  class="celebritiesObj__image image--card" src="${celebritiesObj.image}" width = "400px" /></div>            
            <div class="celebritiesObj__name">Celebrities: ${celebritiesObj.name}</div>
        </section>
    `
}