import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index'
const CountryPicker = ( {handleCountryChange} ) =>{
    
    const [fetchedCountries, setfetchedCountries] = useState([])


    useEffect( () => {
        const fetchAPI = async () => {
            setfetchedCountries( await fetchCountries())
            console.log("country rerentered")
        }
        fetchAPI()
    }, [])
    
    return(
        <FormControl className={StylesProvider.FormControl}> 
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
    
}
export default CountryPicker