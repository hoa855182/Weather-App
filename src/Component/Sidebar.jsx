import { Grid, Paper, TextField } from '@mui/material';

import weatherpict from '../images/weatherpict.png';
import { makeStyles } from "@mui/styles";

import { cvDate } from '../Convert/Date';
import { getWeatherAsync } from '../Redux/WeatherReducer';
import { useDispatch, useSelector } from 'react-redux';
import time from '../Convert/time';

const useStyles = makeStyles({
    xs4: {
        textAlign: "center",
        borderRadius: "0 !important",
        height: "90vh",
    },

    text_field: {
        marginTop: "30px !important",
        width: '90%',
        fontSize: "1rem",
        fontWeight: "400",
        '& input': {
            height: '0.5em'
        }
    },
    img: {
        width: "50%",
       
    },

    desc: {
        fontSize: "25px",

    },
    date: {
        marginTop: "20px",
        fontSize: "18px",

    },
    wth: {
        marginTop: "20px",
        fontSize: "15px"
    },
  
    pict_info: {
        position: "relative",
       
        marginTop: "20px",
        alignItems: "center"
    },

    wth_pict: {
        width: "80%",
        borderRadius: "0.5em",

    },
    script: {
        color: "white",
        fontWeight: "bold",
        fontSize: "22px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute"
    }
})

function Sidebar() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const data = useSelector((state) => state.weather.weather)
    console.log(data)
    // const [data, setData] = useState({
    //     name: '',
    //     sys: {
    //         country: ''
    //     }
    // });

    // const [location, setLocation] = useState("")



    
    

    const handleInput = (e) => {
        if (e.code === 'Enter') {
            dispatch(getWeatherAsync(e.target.value));
            e.target.value=''
        }
       
    }
    // const handleKey = (e) => {
    //     if (e.key === 'Enter') {
    //         WeatherApi.GET({ q: location }).then(
    //             function (result) {

    //                 setData(result)
    //                 console.log(result)
    //             })
    //     }
    // }

    return (
        <Grid
            item xs={3}
        >
            <Paper className={classes.xs4}>
                <TextField
                    className={classes.text_field}
                    label="Search..."
                    variant="outlined"
                    
                    // onKeyDown={handleKey}
                    onKeyPress={handleInput}
                />
                <div>
                    {data.current ? <img
                        src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                        alt="weather status icon"
                        className={classes.img}
                    /> : null}
                </div>
                <div className={classes.desc}>
                    <h1>{data.cityName}</h1>
                    {data.current ? <h3>{data.current.temp.toFixed()}°C</h3> : null}
                </div>
                <div className={classes.date}>
                    {data.current ? <h3>{cvDate(data.current.dt)}, {time.Hour(data.current.dt)}</h3> : null}
                    
                </div>
                <div className={classes.wth}>
                    {data.current ? <h3>{data.current.weather[0].main}</h3> : null}
                    {data.current ? <h4>{data.current.weather[0].description}</h4> : null}
                </div>
                <div className={classes.pict_info}>
                    <img className={classes.wth_pict} src={weatherpict} />
                    <h1 className={classes.script}>{data.cityName}</h1>
                </div>
                <div>
                </div>
            </Paper>
        </Grid>
    );
}

export default Sidebar;