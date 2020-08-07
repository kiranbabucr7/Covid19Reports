import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api/index'
const Charts = () => {

    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        } 
        fetchAPI()
    })

    return (
        <h1>Charts</h1>
    )
}
export default Charts
