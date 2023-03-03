
const withSearch=document.getElementById('with-search')
const inputCity=document.getElementById('city-input')
const Search=document.getElementById('search')
const cityName=document.getElementById('city-name')
const Condition=document.getElementById('condition')
const conditionImg=document.getElementById('condition-img')
const Temp=document.getElementById('temp')
const windSpeed=document.getElementById('wind-speed')
const Cloud=document.getElementById('cloud')
const Humidity=document.getElementById('humidity')
const mainContainer=document.getElementById('main')
const Flag=document.getElementById('flag')
const loadingScreen=document.getElementById('loading-screen')
const geoLocation=document.getElementById('geolocation')
const geoAccessBtn=document.getElementById('geo-access-btn')
const errorPara=document.getElementById('error-para')




inputCity.value="";
withSearch.classList.add("active")
mainContainer.classList.add("active")
loadingScreen.classList.add("active")
geoLocation.classList.remove("active")

////////// grant Access btn 
geoAccessBtn.addEventListener("click", accessLocation)

function accessLocation(){
  geolocation();
  geoLocation.classList.add("active")

}
 

//////// YourWeather event 



const yourWeather=document.getElementById('your-weather')

yourWeather.addEventListener('click',geolocation)

async function geolocation(){
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
   loadingScreen.classList.remove("active")
   withSearch.classList.add("active")
   geoLocation.classList.add("active")
   mainContainer.classList.add("active")
 
}
async function showPosition(position) {
     
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;
  

 console.log(latitude,longitude)
 showData(latitude,longitude)
}
}


async function showData(latitude,longitude){
 const API_KEY="e7ef8c9324dcb795571add17df7ef0d6"
 
       let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
   
       let data = await result.json();

       console.log("Weather data  " , data);
       Render(data);

       
      
 }



 function Render(data){



  try {
    
  loadingScreen.classList.add("active")

  geoLocation.classList.add("active")


  // cityName.innerHTML=(data.name)
  // Flag.src=`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/1x1/${data.sys.country.toLowerCase( )}.svg`
  // Condition.innerHTML=((data.weather[0].main))
  // conditionImg.src=" http://openweathermap.org/img/w/"+data.weather[0].icon+ ".png";
  // Temp.innerHTML=((data.main.temp)+ " °C")
  // windSpeed.innerHTML=((data.wind.speed)+ " m/s")
  // Humidity.innerHTML=((data.main.humidity)+ " %")
  // Cloud.innerHTML=((data.clouds.all)+ " %")
  // mainContainer.style.display='block'


//////////We also do like this

  cityName.innerHTML=(data?.name)
  /////cdn link for convert the country code to image
  Flag.src=`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/1x1/${data?.sys?.country.toLowerCase( )}.svg`
  Condition.innerHTML=((data.weather[0].main))
  conditionImg.src=" http://openweathermap.org/img/w/"+data?.weather?.[0]?.icon+ ".png";
  Temp.innerHTML=((data?.main?.temp)+ " °C")
  windSpeed.innerHTML=((data?.wind?.speed)+ " m/s")
  Humidity.innerHTML=((data?.main?.humidity)+ " %")
  Cloud.innerHTML=((data?.clouds?.all)+ " %")
  mainContainer.classList.remove("active")
    
  } catch (error) {
    mainContainer.classList.add("active")
    console.log("Errror Found" , error);
    // errorPara.innerHTML=(`Please Enter a Valid City Name  ${inputCity.value}  is Not a City Name` )
    
  }

 }
     
 
/////////// Search Weather event 

const searchWeather=document.getElementById('search-weather')


searchWeather.addEventListener('click',visibleSearch)
 async function visibleSearch(){
  loadingScreen.classList.add("active")
  withSearch.classList.remove("active")
  geoLocation.classList.add("active")
  inputCity.value="";
  
  mainContainer.classList.add("active")

  /////////////// Search Button Event
  Search.addEventListener('click', showWeather)

async function showWeather(){
    try {
    //  const seacrbtn=e.currentTarget;
    //  const city=seacrbtn.previousElementSibling.value; ////( Also Same)

    // mainContainer.classList.remove("active")
    loadingScreen.classList.remove("active")

    const city=inputCity.value;
 
     const API_KEY="e7ef8c9324dcb795571add17df7ef0d6"

     const apiUrl=(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
 
     const responce=await fetch(apiUrl);
 
     let data=await responce.json();
     Render(data);


     

///////////////////////////////////////////////////////
// if(inputCity.value != data.name){
//   mainContainer.style.display='block'
//   cityName.innerHTML=()
//  }


///////////////////////////////////////////////////////

     
    } catch (error) {
     console.log("Errror Found" , error);
     loadingScreen.classList.add("active")
   
    //  errorPara.innerHTML=(`An error occured please update or connect with the network....` )
     
    }
 
 }



 }




   
  







      


 



  
