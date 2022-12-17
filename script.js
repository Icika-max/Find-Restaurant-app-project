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
    })

    fetchData()
}
})