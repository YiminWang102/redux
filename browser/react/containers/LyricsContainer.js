import React, {Component} from 'react';
import store from '../store';
import Lyrics from "../components/Lyrics";
import {setLyrics} from '../action-creators/lyrics';
import axios from 'axios';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, store.getState(), { songQuery: "", artistQuery: ""});
		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() =>{
			this.setState(store.getState());
		})
	}
	componentWillUnmount() {
		this.unsubscribe();
	}

	setArtist(artist) {
		this.setState({artistQuery: artist});
	}

	setSong(song) {
		this.setState({songQuery: song});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.songQuery, this.state.artistQuery);
		axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
		.then(res => res.data)
		.then(lyrics => {
			console.log(lyrics);
			store.dispatch(setLyrics(lyrics.lyric));
		})
		.catch(() => {
			// console.log("Cannot find lyrics");
			store.dispatch(setLyrics("Cannot find lyrics."));
		})
	}

	render() {
		const props = Object.assign({}, this.state, {
			setArtist: this.setArtist,
			setSong: this.setSong,
			handleSubmit: this.handleSubmit
		})
		return (
			<Lyrics {...props} />
			)
	}
}