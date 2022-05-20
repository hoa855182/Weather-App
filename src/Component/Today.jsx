import { Grid, Paper } from '@mui/material';
import { useState } from 'react';

import { makeStyles } from "@mui/styles";
import { BsSun, BsWind, BsSunrise, BsSunset, BsThermometerLow } from 'react-icons/bs';
import { IoMdWater, IoIosTimer } from 'react-icons/io'

import time from '../Convert/time';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    xs8: {
        backgroundColor: "rgb(246, 246, 248) !important",
        borderRadius: "0 !important",
        height: "90vh",
    },
    Tab: {
        paddingTop: "30px",
    },

    info: {
        paddingLeft: "20px",
        marginTop: "30px",

    },
    desc: {
        height: "200px",
    },
    title: {
        paddingLeft: "10px",
        color: "#9e9e9e"
    },
    wth: {
        textAlign: "center",
        paddingTop: "35px",
        fontSize: "25px",

    },

    wth2: {
        textAlign: "left",
        paddingTop: "10px",
        paddingLeft: "10px",
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
    },

    icon_yellow: {
        color: "#fdd835",
    },

    icon_blues: {
        color: "#03a9f4",
    },
    text: {
        paddingLeft: "10px",
        paddingBottom: "5px"
    }
})

function Today() {
    const classes = useStyles();
    const [value, setValue] = useState(0);


    const data = useSelector((state) => state.weather.weather)

   
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Paper className={classes.desc}>
                    <h2 className={classes.title}>UV index</h2>
                    <div className={classes.wth}>
                        <h1 className={classes.icon_yellow}>
                            <BsSun />
                        </h1>
                        {data.current ? <h4>{data.current.uvi}</h4> : null}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.desc} >
                    <h2 className={classes.title}>Wind Status</h2>
                    <div className={classes.wth}>
                        <h1 className={classes.icon_blues}><BsWind /></h1>
                        {data.current ? <h4>{data.current.wind_speed} km/h</h4> : null}
                    </div>
                </Paper>

            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.desc}>
                    <h2 className={classes.title}>Sunrise & Sunset</h2>
                    <div className={classes.wth2}>
                        <h1 className={classes.icon_yellow}><BsSunrise /></h1>
                        {data.current ? <h4 className={classes.text}>{time.Hour(data.current.sunrise)}</h4> : null}
                    </div>
                    <div className={classes.wth2}>
                        <h1 className={classes.icon_yellow}><BsSunset /></h1>
                        {data.current ? <h4 className={classes.text}>{time.Hour(data.current.sunset)}</h4> : null}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.desc}>
                    <h2 className={classes.title}>Humidity</h2>
                    <div className={classes.wth}>
                        <h1 className={classes.icon_blues}><IoMdWater /></h1>
                        {data.current ? <h4>{data.current.humidity}%</h4> : null}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.desc}>
                    <h2 className={classes.title}>Visibility</h2>
                    <div className={classes.wth}>
                        <h1 className={classes.icon_yellow}><IoIosTimer /></h1>
                        {data.current ? <h4>{data.current.visibility / 1000} km</h4> : null}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.desc}>
                    <h2 className={classes.title}> Pressure</h2>
                    <div className={classes.wth}>
                        <h1 className={classes.icon_blues}><BsThermometerLow /></h1>
                        {data.current ? <h4>{data.current.pressure} hPa</h4> : null}
                    </div>
                </Paper>
            </Grid>
        </Grid>
    
    );
}

export default Today;