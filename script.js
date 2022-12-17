document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")
    const fetchData=()=>
    {    fetch('http://localhost:3000/characters')
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);

        })








})