const container = document.querySelector(".container")
    function login (){
        document.getElementById("log").addEventListener("click",(l)=>{
            document.querySelector(".login").style.display= "none"
            document.querySelector(".container").style.display="block"
            document.querySelector(".container").style.display="flex"
            document.querySelector(".search-restraunt").style.display="block"
            document.querySelector(".search-restraunt").style.display="flex"
        })

    }
const fetchData=()=>
{    fetch('http://localhost:3000/characters')
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        const searchInput=document.querySelector("[data-search]")
        searchInput.addEventListener("input",e =>{
        const value = e.target.search.value
        data.forEach(user=>{
            const isVisible=user.name.includes(value)
            user.classList.toggle("hide",!isVisible)

        })

        })

        container.innerHTML =data.map((restaurant)=>(
            `<div class="card-restaurant">
            <div class="card-restaurant-details"

            <h2>${restaurant.name}</h2>
            </div>

            <img src=${restaurant.image} alt="#"/>
            <div class="card-restaurant-details">
            <div class="country">
                <p><span><<i class="fa fa-flag" aria-hidden="true"></i></span>county: ${restaurant.county}</p>

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





            </div>`
        ))
    })
    .catch((err)=>console.log(err));

}



    document.addEventListener("DOMContentLoaded", () => {


        fetchData()
        login();
    })
