import { Grid, Paper, Container, TextField, Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Today from './Today';
import Sidebar from './Sidebar';
import BannerR from './BannerR';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAsync } from '../Redux/WeatherReducer';

const useStyles = makeStyles({
    div: {
        
    }
})



function Main() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.weather.weather)
    useEffect(() => {
        dispatch(getWeatherAsync())
    }, [])
    


    return (
        <div>
            <Container fixed>
                <Grid
                    container
                    pt={4}
                    className={classes.div}
                >
                    <Sidebar />
                    <BannerR />

                </Grid>
            </Container>
        </div>
    );
}

export default Main;