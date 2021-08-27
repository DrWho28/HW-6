//initialize some basic info for later
const API_KEY = "8107e548e287ee482e216075bcd8d656"
let lat = 42.38218584341504
let lon = -83.05751068012752
let part = null
let units = 'kelvin'

//initialize the link that we use
const LINK = 
`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${API_KEY}`

//cities  austin 30.270332416000436, -97.75272102011084
// NY 40.70156762613613, -74.0819967917015
// san Fran 37.77654402969955, -122.4211684182217
// 39.749797953973236, -105.009065463149

let cities =[
     {
         name:'Chicago',
         lat:41.8845706783461, 
         lon:-87.6227356816769, 
     },
     {
         name:'Austin',
         lat:30.270332416000436,
         lon:-97.75272102011084,
     },
     {
         name:'Orlando',
        lat:28.539079450644806,
        lon: -81.38180557809117
     },
     {
         name:'New-York',
         lat28:539079450644806,
         lon: -81.38180557809117,
     },
     {
         name:'Seattle',
         lat:.610692523079294,
         lon:-122.33966251818934,
     },
     {
         name:'San-Francisco',
         lat:37.80518040223375, 
         lon:-122.44944499918446
     },
     {
         name:'Denver',
         lat:39.767613106053915, 
         lon:-104.98218810118226
     },
     {
         name:'Atlanta',
         lat:33.750852563973154, 
         lon:-84.39279632256043
     }]


//helper function to convert from Kelvin to Fahrenheit 
let convertKtoF = (K) => {
    return Math.floor((((K - 273.15) * 9) / 5) + 32)
}

//initialize the function to get the weather info
let getApiInfo = () => {
    return(
        axios.get(LINK)
    )
}

//get DOM elements
const Temp = document.getElementById('temp')

let inputHourlyTemp = () => {
    let apiResponse
    getApiInfo()
    .then(res => {
        Temp.innerText = convertKtoF(res.data.current.temp)
        console.log(Temp)
        console.log(res)
    })
}

inputHourlyTemp()