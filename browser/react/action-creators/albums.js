import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants'
import axios from 'axios';

export const setAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums: albums
  }
}

export function fetchAlbums(){
  return function(dispatch, getState){
    axios.get('/api/albums')
      .then(res => res.data)
      .then( albums => {
        dispatch(setAlbums(albums))
      })
  }
}
