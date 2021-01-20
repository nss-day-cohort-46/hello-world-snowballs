export const Celebrity = (celebrityObj) => {
    return`
    <section class="celebrityObjCard">
    <div class=celebrity__name"> Nsme: ${celebrityObj.name}</div>
    <div class="celebrity__image>img src="${celebrityObj.image}" width="200px"/></div>
    `
}