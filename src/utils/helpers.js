let SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY

export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': SPOTIFY_API_KEY,
		'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
	}
};