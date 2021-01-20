export const Celeb = (celebObj) => {
  return `
      <div class="france__celeb__card">
        <div class="celeb__name">Name: ${celebObj.name}</div>
        <div><img class="celeb__img" src="${celebObj.image}"></div>
      </div>
  `
}