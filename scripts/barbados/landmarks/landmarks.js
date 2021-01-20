export const Landmark = (landmarkObj) =>{
    return`
    <section class="cityObjectCard">
    <div class="landmark__name"> landmark: ${landmarkObj.name}</div>
    <div class="landmark__image"><img src="${landmarkObj.image}"height="300" width="300px"/></div>

    `
}