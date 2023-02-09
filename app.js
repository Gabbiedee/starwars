const movieCards = document.getElementById('movieCards');
const loading = document.getElementById('loading');
const endpoint = 'https://swapi.dev/api/films';
const images = [
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png',
    './images/img5.png',
    './images/img6.png'
]
const movieCard = (result, imgSrc)=>{
    const {title, episode_id, release_date, director} = result;
return (
    `<div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 100%;">
    <img src="${imgSrc}" class="card-img-top" alt="StarWars">
    <div class="card-body ">
    <div>
         <h5>${title}
        </h5>
         <h6>{Episodes: ${episode_id}} </h6>
        </div>
        <div style="font-size:12px;">
        <span style="color:red;">Release date:</span> ${release_date} <br>
        <span style="color:red;">Director:</span> ${director}
        </div>
    </div>
  </div>
</div>`
)

}

const fetchpost = async () => {
    const response = await fetch (endpoint);
    const data = await response.json();

    return data.results
}

const loadMovie = async () => {
    const results = await fetchpost();
    let cards = "";
    for(let i = 0; i < results.length; i++){
        cards += movieCard(results[i], images[i])

    }
    loading.remove();
    movieCards.innerHTML = cards
}

loadMovie();
