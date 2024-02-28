import React from 'react';
import './footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer(){
    return(
        <div className="footer">
        
        <div className="footer_left">
        <img className="footer_logo" src="https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png" alt=""/>
        <div className="footer_songInfo">
        <h4>Is It Over Now?</h4>
        <p>Taylor Swift</p>
        </div>
       </div>

        <div className="footer_center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleIcon fontSize="large" className="footer-icon" />
        <SkipNextIcon className="footer-icon" />
        <ReplayIcon className="footer-green" />
        </div>

        <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider"/>
          </Grid>
        </Grid>
        </div>
        
        </div>
    )
}

export default Footer;