import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api/index'
import { Line, Bar } from 'react-chartjs-2'
import styels from './Charts.module.css'
const Charts = () => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        } 
        fetchAPI()
    })

    const lineChart = (
        dailyData.length?(
        <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets:[ {
                    data:dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                    }, {
                    data:dailyData.map( ( { deaths } ) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                    }],
                }
            }
        /> ):null
    )
    return (
        <h1 className={styels.container}>
            {lineChart}
        </h1>
    )
}
export default Charts