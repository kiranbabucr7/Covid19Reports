import axios from 'axios'

const baseURL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let realURL = baseURL
    if (country){
        realURL = `${baseURL}/countries/${country}`;
        console.log("api call for fetchData with country")
      }
    try{
        const { data:{ confirmed, recovered, deaths, lastUpdate} } = await axios.get(realURL)
        return { confirmed, recovered, deaths, lastUpdate}
    }
    catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${baseURL}/daily`)
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }
    catch (error) {
        return error
    }
}

export const fetchCountries = async () => {
    try {
        const { data : {countries} } = await axios.get(`${baseURL}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
        
    }
}

export const fetchNews = async () => {
    try {
        const { data: {news} }   = await axios.get('https://cryptic-ravine-96718.herokuapp.com/')
        return news
    } catch (error) {
        
    }
}
