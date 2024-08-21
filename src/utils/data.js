 

const url = "https://spotify-scraper.p.rapidapi.com/v1";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "588aec5f40mshf1c47597f29ce6bp1abcaejsn9f873f4f1e6c",
    "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
  },
};

export const getHomeOverview = async (artists, albums, albumSongs) => {
  const response = await fetch(url + "/home", options);
  const result = await response.json();

  artists.value = result.sections.items[0].contents.items;
  albums.value = result.sections.items[1];
  albumSongs.value = result.sections.items[1].contents.items;
};

//Search
export const getSearchResult = async (term, type, artist) => {
  try {
    const response = await fetch(
      url + `/search?term=${term}&type=${type}&limit=5`,
      options
    );
    const result = await response.json();

    artist.type = type;
    if (type == "artist") {
      artist.items = result.artists.items;
 
      return;
    }
    if (type == "album") {
      let filterAlbum = result.albums.items.filter(
        (album) => album.name !== undefined
      );
      artist.items = filterAlbum;
      return;
    }
    return;
  } catch (error) {
    console.error(error);
  }
};

export const getArtist = async (id, artist) => {
  try {
    const response = await fetch(
      url + `/artist/overview?artistId=${id}`,
      options
    );
    const result = await response.json();
    artist.value.name = result.name;
    artist.value.verified = result.verified;
    artist.value.type = result.type;
    artist.value.header = result.visuals.header;
    artist.value.topTracks = result.discography.topTracks;
    artist.value.albums = result.discography.albums;
    artist.value.stats = result.stats;
  } catch (error) {
    console.error(error);
  }
};

//Album

export const getAlbumMetadata = async (id, albumMetadata) => {
  try {
    const response = await fetch(url + `/album/metadata?albumId=${id}`, options);
    const result = await response.json();
    albumMetadata.value = result;
  } catch (error) {
    console.error(error);
  }
};

export const getAlbumsSongs = async (id, songs) => {
  try {
    const response = await fetch(
      url + `/album/tracks?albumId=${id}`,
      options
    );
    const result = await response.json();
    songs.value = result.tracks;
  } catch (error) {
    console.error(error);
  }
};
 