import React from 'react'
import styles from './CovidNews.module.css'
import {fetchNews} from '../../api/index'
import { CircularProgress, Card, CardContent, Typography, Grid, StylesProvider, CardActions, Button, Paper } from '@material-ui/core' 
import cx from 'classnames'
class CovidNews extends React.Component {
    state={
        data:[],
        isLoading:true
    }
    async componentDidMount(){
        const data = await fetchNews();
        this.setState({ data:data, isLoading:false });
    }
    render(){
        if(this.state.isLoading === true){
            return (
                <CircularProgress className="mt-5"/>
            )
        }
        const allNews = this.state.data.map( (news) => 
            <div className="mt-3">
                <Paper variant="outlined" square >
                    <Grid item component={Card} xs={12} md={12} className={styles.newsCard}>
                        <CardContent className={styles.cardContent}>
                            <Typography color="textPrimary" variant="h5">{news.title}</Typography>
                            <CardActions>
                                <a href={news.link}>Read More</a>
                            </CardActions>
                        </CardContent>
                    </Grid>
                </Paper>
                
            </div>
        )
        return(
            <div className={styles.container}>
                {allNews}
            </div>  
        )   
    }
}
export default CovidNews;