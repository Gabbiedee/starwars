const cards = document.querySelectorAll('.card')
const endpoint = 'https://swapi.dev/api/films';


async function fetchpost() {
    const response = await fetch (endpoint);
    const data = await response.json();
    
    const results = data.results

    
    for (let i = 0; i < results.length; i++) {
        const cardBody = cards[i].querySelector('.card-body');
        cardBody.innerHTML = `<div>
                                <h5>${results[i].title}
                                </h5>
                                <h6>{Episodes: ${results[i].episode_id}} </h6>
                              </div>
                              <div style="font-size:12px;">
                              <span style="color:red;;">Release date:</span> ${results[i].release_date} <br>
                              <span style="color:red;">Director:</span> ${results[i].director}
                              </div>
                              `

        // change.style.color = "red";
        // console.log(results[i])
        // console.log(cards[i])
      }
     
    
}


fetchpost();
    

  
    

   



// window.onload = async function fetchpost(){
    
// }

// window.addEventListener("load", fetchpost)

//     async function fetchpost() {
//         const response = await fetch (endpoint);
//         const data = await response.json();
        
//         console.log(data)
//     }
    

