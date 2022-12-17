document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")
    const searchInput=document.querySelector("[data-search]")
    searchInput.addEventListener("input",e =>{
    const value = e.target.value
    restaurant.forEach(user=>{
        const isVisible=user.name.includes(value)
        user.classLst.toggle("hide",!isVisible)
    })

    })

    const fetchData=()=>
{    fetch('http://localhost:3000/characters')
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);

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

            <div class="address">
            
            </div>

    })


}
fetchData()
})