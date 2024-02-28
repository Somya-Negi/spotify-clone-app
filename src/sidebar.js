import React from 'react';
import './sidebar.css';
import SidebarOption from './Sidebaroption.js';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer.jsx';

const Sidebar = () =>{
    const [{playlists}, dispatch] = useDataLayerValue();
    return(
        <div className="sidebar">
        <img className="sidebar-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify-logo"></img>
       
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
         
        <br/>
        <strong className="sidebar-title">Playlists</strong>
        <hr/>
        
        {playlists?.items?.map((playlist)=>
            <SidebarOption title={playlist.name} />)}
    
        </div>
       
    );
}

export default Sidebar;