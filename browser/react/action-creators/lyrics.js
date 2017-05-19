import {SET_LYRICS} from '../constants';
import axios from 'axios';

export function setLyrics(text){
  return {
    type: SET_LYRICS,
    lyric: text
  };
} 

export function fetchLyrics(artist, song){
	return function(dispatch, getState){
		axios.get(`/api/lyrics/${artist}/${song}`)
		.then(res => res.data)
		.then(lyrics => {
			dispatch(setLyrics(lyrics.lyric));
		});
	}
}
