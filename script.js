const container = document.querySelector(".container")
 let pass = document.getElementById("Pass")
    function login (){
        document.getElementById("log").addEventListener("click",(l)=>{

            console.log(pass.value)
            if (pass.value != ""){
            document.querySelector(".login").style.display= "none"
            document.querySelector(".container").style.display="block"
            document.querySelector(".container").style.display="flex"
            document.querySelector(".search-restraunt").style.display="block"
            document.querySelector(".search-restraunt").style.display="flex"
            }
            else if (pass.value ==""){
                alert("password missing")
            }
        })

    }
    let rest= []
    console.log(rest)

    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value;
      console.log(value);
      rest.forEach((restaurant) => {
        if (restaurant.name.includes(value)) {
          restaurant.classList.remove("hide");
        } else {
          restaurant.classList.add("hide");
        }
      });
    });

const fetchData=()=>
{    fetch('https://my-json-server.typicode.com/icika-max/Find-Restaurant-app-project/characters')
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        findData(data)


    })
    .catch((err)=>console.log(err));

}
function findData(data) {
    rest = data.map(restaurant => {
      const div = document.createElement("div");
      div.classList.add("card-restaurant");
      div.innerHTML = `
        <div class="card-restaurant-details">
          <h2>${restaurant.name}</h2>
        </div>
        <img src=${restaurant.image} alt="#"/>
        <div class="card-restaurant-details">
          <div class="country">
            <p><span><i class="fa fa-flag" aria-hidden="true"></i></span>county: ${restaurant.county}</p>
          </div>
          <div class="phone">
            <p><span><i class="fa-duotone fa-phone"></i></span>phone: ${restaurant.phone}</p>
          </div>
          <div class="rating">
            <p><span><i class="fa-duotone fa-phone"></i></span>rating: ${restaurant.rating}</p>
          </div>
          <div class="address">
            <p><span><i class="fa-solid fa-star"></i></span>address: ${restaurant.address}</p>
          </div>
          <div class="website">
            <a href= ${restaurant.website}>visit website</a>
          </div>
        </div>
      `;
      return div;
    });
    // Append the restaurant elements to the container
    rest.forEach(restaurant => container.appendChild(restaurant));
  }










    document.addEventListener("DOMContentLoaded", () => {


        fetchData()
        login();
    })
