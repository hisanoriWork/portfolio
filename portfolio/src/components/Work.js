import React from 'react';
// import '../App.css';
import './style.css';

import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import {Button} from '@material-ui/core';
// import {Box} from '@material-ui/core';


import Card from '@mui/material/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@mui/material/CardActions';

// import CardMedia from '@material-ui/core/CardMedia';
// import {Grid,CardActionArea} from '@material-ui/core';





export const Work = (props) => {
    const title = props.title
    const image = props.image
    const message = props.message
    const url = props.url
    const width = props.width
    const height = props.height
    const youtube =  props.youtube && props.youtube
    const download = props.download && props.download
    const github = props.github && props.github
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className="cards" > {/* style={{ backgroundColor: "#FFF4E1" }} */}
            <CardContent>
                <Typography component="div">
                    <h1><a target="_blank" rel="noreferrer" href={url}>{title}</a></h1>
                </Typography>
                <img src={image} alt="logo" width = {width} height = {height}/>
                <Typography>
                    <div className="message_style">{message}</div>
                </Typography>
            </CardContent>
            {youtube &&
            <CardActions>
                <Button color="default" variant="contained" size="small" align="center" component={Link} to={youtube}> 動画はこちら</Button>
            </CardActions>
            }
            {download && 
            <CardActions>
                <Button color="secondary" variant="contained" size="small" align="center" href={download} download>ダウンロード</Button>
            </CardActions>
            }
            {github &&
            <CardActions>
                <Button color="default" variant="contained" size="small" align="center" component={Link} to={github}> github</Button>
            </CardActions>
            }
            </Card>

            {/* <Button color="default" variant="contained" size='large' component={Link} to = {url} >
            <div className="place">
                <h1>{title}</h1>
                <img src={image} alt="logo" width = "320"/>
                <a className="message_style">{message}</a><br />
                <a className="message_style">プレイ動画はこちら</a>
            </div>
            </Button> */}
        </div>
    );
}

export const WorkList = (props) =>{
    const data = props.data;
    return (
        <>
            {/* <Grid container className="create-container">
                {data.map((data) => 
                <>
                    <Grid item container xs={12} md={6} sm={6} spacing={1}>
                        <Work title = {data.title} image={data.image} width={data.width} height = {data.height} message = {data.message} url = {data.url} key = {data.id}/>
                    </Grid>
                </>
                
            )}
            </Grid> */}
            <Stack direction={"row"} spacing={3}>
                {data.map((data) => <Work title = {data.title} image={data.image} width={data.width} height = {data.height} message = {data.message} url = {data.url} youtube = {data.youtube} download = {data.download} github={data.github} key = {data.id}/>)}
            </Stack>
        </>
    )    
}