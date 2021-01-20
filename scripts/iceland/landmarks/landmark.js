export const Landmark= (landmark) => {
    return `<section class="landmarkCard>
<div class = "landmark__name">${landmark.name}</div>
<div class = "landmark__image"><img src="${landmark.image}" width="250px"></div>
</section>
`  
}