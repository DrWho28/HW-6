//retervie basic weather info using api 

const API_KEY = "8107e548e287ee482e216075bcd8d656"
let lat =42.334439630855165
let lon =-83.0471550384481
let part=null 
let units ="imperial"
const convert =(K) =>{
    return Math.floor (((k- 273015) *9 ) / 5)+ 32 
}

// make the website link work 

const Link=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`

//helper function to convert from K to F 
let convertKtoF =(K) =>{
    return Math.floor (((K - 273.15) *9 ) / 5)+ 32
}

//initialize the function to get wearthing using axios 

let getApiInfo = () => {
    axios.get(Link)
    .then(res => {
        console.dir(res)
        let data = res.data
        console.log(data.hourly)
        console.log(convertKtoF(data.hourly[0].temp))
        return data
    })
    .catch(err => {
        console.error(`404 with fetching info: ${err}`)
    })
}
 
//let apiResponse= getApiInfo()

let inputHourlyTemp = () =>{
    let apiResponse = getApiInfo
    let cuttrent = convertKtoF(apiResponse.cuttrent)
    console.log(cuttrent)
}

getApiInfo()

//console.log(convertKtoF(305.372))