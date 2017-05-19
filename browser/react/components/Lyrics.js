import React from 'react';

export default function ({text, setArtist, artistQuery, setSong, songQuery, handleSubmit}) {

	const artistChange = function (event) {
		const artist = event.target.value;
		setArtist(artist);
	}

	const songChange = function (event) {
		const song = event.target.value;
		setSong(song);
	}

	return (

		<div id="lyrics">
		<form onSubmit={handleSubmit}>
			<div>
			<input type="text" onChange={artistChange} placeholder="Artist" name="artist" value={artistQuery} />
			<input type="text" onChange={songChange} placeholder="Song" name="song" value={songQuery} />
			</div>
			<pre>{ text || 'Search above' }</pre>
			<button type="submit">Search for Lyrics</button>
		</form>
		</div>
		)
}