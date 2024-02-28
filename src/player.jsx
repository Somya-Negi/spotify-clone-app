import React from 'react';
import './player.css';
import Sidebar from './sidebar.js';
import Body from './body.js';
import Footer from './footer.js';

function Player({spotify}) {
    return(
    <div className="player">
        <div className="player_body">
        <Sidebar />
        <Body spotify={spotify}/>


    </div>
    <Footer />

    </div>
    );
}

export default Player;