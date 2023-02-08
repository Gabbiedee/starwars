const cards = document.querySelectorAll('.card')
const endpoint = 'https://swapi.dev/api/films';
const loading = document.getElementById('loading');
const movieCards = document.getElementById('movieCards');


async function fetchpost() {
    const response = await fetch (endpoint);
    const data = await response.json();

    return data.results;
    
}

async function loadMovie() {
    movieCards.style.display = 'none';

    const results = await fetchpost()
    
    for (let i = 0; i < results.length; i++) {
        const cardBody = cards[i].querySelector('.card-body');
        cardBody.innerHTML = `<div>
                                <h5>${results[i].title}
                                </h5>
                                <h6>{Episodes: ${results[i].episode_id}} </h6>
                              </div>
                              <div style="font-size:12px;">
                              <span class="text-danger">Release date:</span> ${results[i].release_date} <br>
                              <span class="text-danger"">Director:</span> ${results[i].director}
                              </div>
                              `

      }
      loading.remove();
      movieCards.style.display = 'flex';
}

 loadMovie();
    

  
    

   



    

