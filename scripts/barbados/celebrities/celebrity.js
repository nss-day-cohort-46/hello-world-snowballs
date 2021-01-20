export const Celebrity = (celebrityObj) => {
    return`
    <section class="celebrityObjCard">
    <div class=celebrity__name"> Name: ${celebrityObj.name}</div>
    <div class="celebrity__image"><img src="${celebrityObj.image}"height="400px" width="400px"/></div>
    `
}