<template>
  <div
    id="song_board"
    class="song_board darkCharcoal text-white d-flex flex-column overflow-y-auto align-items-center py-4 justify-content-start position-fixed top-0 end-0 h-100"
  >
  <div>

  </div>
  <div id="playlist" >
    

  </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject, watch } from "vue";
import Song from "@/components/Song.vue";
let playSongId = inject("playSongId");
let songPlaying = inject("songPlaying");

let pending = reactive(false);
let playlist = ref({
  song: [],
  metadata: [],
});
let songUrl = ref(null);

const playSongBtn = () => {
  songPlaying.value.playing = true;
  let song = document.getElementById("song");

  song.play();
};
const pauseSongBtn = () => {
  songPlaying.value.playing = false;
  let song = document.getElementById("song");

  song.pause();
};

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "588aec5f40mshf1c47597f29ce6bp1abcaejsn9f873f4f1e6c",
    "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
  },
};

const getSongAudio = async (id) => {
  let trackdata = [
    fetch(
    `https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${id}`,
    options
  ),
  await fetch(
    `https://spotify-scraper.p.rapidapi.com/v1/track/metadata?trackId=${id}`,
    options
  )
]

try {
    const res = await Promise.all(trackdata)
    const data = await Promise.all(res.map((item)=>{
      return item.json()
    }))
    playlist.value.song.push(data)
} catch (error) {
  console.log(error);
}

  // await fetch(
  //   `https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${id}`,
  //   options
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     pending = true;

  //     playlist.value.song.push(data.youtubeVideo);
  //     pending = false;
  //   });
};
const getSongMetadata = async (id) => {
  await fetch(
    `https://spotify-scraper.p.rapidapi.com/v1/track/metadata?trackId=${id}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      pending = true;
      playlist.value.metadata.push(data);
      pending = false;
    });
};
const playSong = (metadata, audio) => {
  let playlist_container = document.getElementById('playlist')
  let song_container = document.createElement('div')
  // song_container.setAttribute('metadata', metadata)
  // song_container.setAttribute('audio', audio)

  playlist_container.appendChild(song_container)

};
watch(playSongId, async (oldval, newPlaySongId) => {
  await getSongAudio(newPlaySongId.songId);
  // await getSongMetadata(newPlaySongId.songId);
});
watch(playlist.value, (newPlaylistVal) => {
  playlist = newPlaylistVal;
});
</script>

<style scoped>
.song_board {
  border-left: 5px solid green;
  width: clamp(10vw, 30vw, 60vw);
}
audio {
  visibility: hidden;
}
</style>
