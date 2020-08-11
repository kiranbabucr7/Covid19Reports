import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core' 
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ( { data: { confirmed, recovered, deaths , lastUpdate }, country } ) =>{
    if ( !confirmed ) {
        return "loading"
    }
    const cardDatas = [
        confirmed={
            style:styles.confirmed,
            mainMessage:'Infected',
            subMessage:'Number of active cases of covid 19',
            value:confirmed.value,
        },
        recovered={
            style:styles.recovered,
            mainMessage:'Recovered',
            subMessage:'Number of recovered cases of covid 19',
            value:recovered.value,
        },
        deaths={
            style:styles.deaths,
            mainMessage:'Deaths',
            subMessage:'Number of Deaths due to covid 19',
            value:deaths.value,
        }
    ]
    const cards = cardDatas.map((cardData) => 
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , cardData.style)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{cardData.mainMessage}</Typography>
                <hr />
                <Typography color="textPrimary" variant="h5">
                    <CountUp start={0} end={cardData.value} duration={2.5} separator=","/>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                <Typography variant="body2">{cardData.subMessage}</Typography>
            </CardContent>
        </Grid>
    )
    return(
        <div className={styles.container}>
            <div>{country}</div>
            <Grid container spacing={3} justify="center">
                {cards}
            </Grid>
        </div>
    )
    
}
export default Cards