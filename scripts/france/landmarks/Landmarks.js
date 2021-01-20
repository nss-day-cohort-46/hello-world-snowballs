export const Landmark = (landmarkObj) => {
  return `
      <div class="france__landmark__card">
        <div class="landmark__name">Name: ${landmarkObj.name}</div>
        <div><img class="landmark__img" src="${landmarkObj.image}"></div>  
      </div>
  `
}