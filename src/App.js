import React, {useEffect, useState} from 'react';
import './App.css';
import { Login } from './Login.jsx';
import {getTokenFromUrl} from './spotify.jsx';
import SpotifyWebApi from  'spotify-web-api-js';
import Player from './player.jsx';
import { useDataLayerValue } from './DataLayer.jsx';



const spotify = new SpotifyWebApi(); 


const App = () => {
  const [token , setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
   const hash = getTokenFromUrl();
   window.location.hash= "";
   let _token = hash.access_token;

   if (_token) {

    dispatch({
      type: 'SET_TOKEN',
      token : _token
    })
    
    setToken(_token);

    spotify.setAccessToken(_token);
    
    spotify.getMe().then((user) => {
        dispatch ({
        type: 'SET_USER',
        user : user,

      });
    });

    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
  
      })
    })

    spotify.getPlaylist('37i9dQZEVXcDiqeHKaJcIl').then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
    })
      
    })
   }

  }, [token, dispatch]);
  
 
  return <div className="app">
    {token ? 
        <Player spotify = {spotify}/> :
        <Login />} </div>;

}


export default App;
