// var date=new Date()
// var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var day=date.getDay()
// var today=daysInWeek[day]
// var hours=date.getHours()
// var min=date.getMinutes()
// var ampm=hours>12?"PM":"AM"
// document.getElementById("dateAndTime").innerText=(today+hours+":"+min+ampm)
// var weatherInCities=[
//     {city:"Hyd,Telangana",climaticCondition:"Sunny",temperature:45,latitude:17.3,longitude:78.4},
//     {city:"Manali,HimachalPradesh",climaticCondition:"cool",temperature:19,latitude:32.2,longitude:77.1},
//     {city:"chennai,TamilNadu",climaticCondition:"Humid",temperature:34,latitude:13.08,longitude:80.2},
//     {city:"Banglore,Karnataka",climaticCondition:"Humid",temperature:33,latitude:12.9,longitude:77.5},
//     {city:"Delhi,Delhi",climaticCondition:"Sunny",temperature:44,latitude:28.6,longitude:77.2}
// ]
// function getWeather()
// {
//     var list=document.getElementById("list");
//     var selectedCityFromList=list.options[list.selectedIndex].value;
//     var weatherInSelectedCity=weatherInCities.find(e=>{
//         return e.city==selectedCityFromList
//     })
//     document.getElementById("climate").innerText=weatherInSelectedCity.climaticCondition;
//     document.getElementById("temperature").innerText=weatherInSelectedCity.temperature+" "+"C";
//     document.getElementById("city").innerText=selectedCityFromList;
//     document.getElementById("latitude").innerText=weatherInSelectedCity.latitude+" "+"latitude";
//     document.getElementById("longitude").innerText=weatherInSelectedCity.longitude+" "+"longitude";
// }
// function getFarenheit()
// {
//     var list=document.getElementById("list");
//     var selectedCityFromList=list.options[list.selectedIndex].value;
//     var weatherInSelectedCity=weatherInCities.find(e=>{
//         return e.city==selectedCityFromList
// })
// document.getElementById("temperature").innerText=(weatherInSelectedCity.temperature*9/5)+32+" "+"F";
// }
// function getCelsius()
// {
//     var list=document.getElementById("list");
//     var selectedCityFromList=list.options[list.selectedIndex].value;
//     var weatherInSelectedCity=weatherInCities.find(e=>{
//         return e.city==selectedCityFromList
// })
// document.getElementById("temperature").innerText=weatherInSelectedCity.temperature;
// }

// function getWeatherInCity(cityName)
// {
// //console.log(`input to getWeatherInCity function is ${cityName}`);
// //var cityName=document.getElementById("myTextArea").value;
// var request = new XMLHttpRequest()

// request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4ac5a81f90fe55ab220d5cbdc943e60c', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   var tempInKelvin=data.min.temp;

// if (request.status >= 200 && request.status < 400)
// {
//     if(typeof(tempInKelvin)=="number")
//     {
//         document.getElementById("temp").innerHTML=tempInKelvin-273.15;

//     }
//     else
//     {
//         document.getElementById("temp").innerHTML="error fetching data";
//     }
// }
//     else
//     {
//         document.getElementById("temp").innerHTML="error fetching data";
//     }
// }
     
// request.send();
// }
// function getWeather()
// {
//     var inputCityName=document.getElementById("myTextArea").value;
//    getWeatherInCity(inputCityName)
// }
var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var minutes=date.getMinutes()
document.getElementById("dateAndTime").innerText=(today+" "+hours+":"+minutes);
var weatherInCities=[
    {city:"Hyderabad,Telangana",climateCondition:"sunny",precipitation:"20%",temperature:45,Latitude:"17.3850'N",Longitude:"78.4867'E"},
    {city:"Bhopal,MadhyaPradesh",climateCondition:"sunny",precipitation:"23%",temperature:40,Latitude:"23.2599'N",Longitude:"77.4126'E"},
    {city:"Imphal,Manipur",climateCondition:"cloudy",precipitation:"90%",temperature:15,Latitude:"24.8170'N",Longitude:"93.9368'E"},
    {city:"Agarthala,Tripura",climateCondition:"Rainy",precipitation:"92%",temperature:22,Latitude:"23.8315'N",Longitude:"91.2868'E"},
    {city:"Kohima,Nagaland",climateCondition:"Humid",precipitation:"100%",temperature:21,Latitude:"25.6751'N",Longitude:"94.1086'E"},
    {city:"Chennai,TamilNadu",climateCondition:"Sunny",precipitation:"10%",temperature:42,Latitude:"13.0827'N",Longitude:"80.2707'E"},
    {city:"Bengalore,Karnataka",climateCondition:"Humid",precipitation:"64%",temperature:38,Latitude:"12.9716'N",Longitude:"77.5946'E"},
    {city:"Mumbai,Maharashtra",climateCondition:"cloudy",precipitation:"78%",temperature:29,Latitude:"19.0760'N",Longitude:"72.8777'E"}
]
function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
    document.getElementById("Latitude").innerText=weatherInSelectedCity.Latitude;
    document.getElementById("Longitude").innerText=weatherInSelectedCity.Longitude;
    document.getElementById("precipitation").innerText=weatherInSelectedCity.precipitation;
}
function getFahrenheit(){
    // var list=document.getElementById("list");
    // var selectedCityFromList=list.options[list.selectedIndex].value;
    // var weatherInSelectedCity=weatherInCities.find(e=>{
    //     return e.city==selectedCityFromList
    var temperatureInCelsius=data.main.temp;

document.getElementById("temp").innerText=(temperatureInCelsius*9/5)+32;
}
function getCelsius(){
    // var list=document.getElementById("list");
    // var selectedCityFromList=list.options[list.selectedIndex].value;
    // var weatherInSelectedCity=weatherInCities.find(e=>{
    //     return e.city==selectedCityFromList
    var temperatureInCelsius=data.main.temp;

document.getElementById("temp").innerText=temperatureInKelvin-273.15;
}
function getWeatherIncity(cityName)
{
    var request=new XMLHttpRequest();
    request.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a63fddbc94423f968b132ba3ce70a1a`)
request.onload=function()
{
    var data=JSON.parse(this.response)
    var temperatureInKelvin=data.main.temp;
    var latitude=data.coord.lat;
    var longitude=data.coord.lon;
    var humidity=data.main.humidity;
    if(request.status>=200&&request.status<400){
        if(typeof(temperatureInKelvin)=="number"){
            document.getElementById("temp").innerHTML=temperatureInKelvin-273.15;
            document.getElementById("Latitude").innerHTML=latitude;
            document.getElementById("Longitude").innerHTML=longitude;
            document.getElementById("humidity").innerHTML=humidity;
        }
        else
        {
            document.getElementById("temp").innerHTML="error fetching data";
        }
    }else {
        document.getElementById("temp").innerHTML="error fetching data";
    } 
};
request.send();
}    
function getWeather()
{
    var inputCityName=document.getElementById("myTextArea").value;
    getWeatherIncity(inputCityName)
}
// var latitude=data.coord.Latitude;
// document.getElementById("Latitude").innerHTML=latitude;