
let form = document.getElementById('form');
let Cells = document.getElementsByTagName("td");

const getCityName = async (citySearchValue)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchValue}&appid=a8e23b0877564c2870db7aa91232b66b`)
    .then(data =>{
        return data.json();
    })
    .then(parseData =>{
        Cells[0].innerText= parseData.name + " , " + parseData.sys.country ;
        Cells[4].innerText = Date();
        Cells[1].innerText = "Temperature:  " + Math.floor(parseData.main.temp-273.15) + ' ℃';
        Cells[2].innerText = "Clouds:  " + parseData.clouds.all + " %";
        Cells[3].innerHTML = "Weather:  "+ parseData.weather[0].main;

    })
    .catch(err =>{
        for (let i = 0; i <= 5; i++) {
            Cells[i].innerText = " ";  
            Cells[2].innerText = "Please Enter Valid City Name" 
        }
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const citySearchValue = form .elements[0].value;

    getCityName(citySearchValue);
    

})

