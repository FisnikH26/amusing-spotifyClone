<template>
  <div>
    <header
      class="px-3"
      :style="{
        backgroundImage: `url(${artist?.header[0]?.url})`,
      }"
    >
      <div class="verified" v-if="artist.verified">
        <img
          src="../assets/media/images/verified_check.svg"
          width="25px"
          alt=""
        />
        <small>Verified Artist</small>
      </div>
      <h2 style="font-size: 4rem" class="fw-bold">{{ artist.name }}</h2>
      <p>{{ formatNumber(artist.stats.monthlyListeners) }} Monthly listeners</p>
    </header>
    <main>
      <section>
        <div class="d-flex align-items-center gap-4 my-4">
          <button
            class="btn btn-lg btn-danger text-dark rounded-circle"
            @click="playAllSongs"
          >
            <i class="fas fa-play"></i>
          </button>
          <button class="btn btn-sm px-3 btn-outline-light rounded-pill">
            Follow
          </button>
          <button class="btn fs-4 text-secondary border-0">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-lg-6">
            <h5 class="fw-bold">Popular Songs</h5>
            <table class="table table-dark">
              <thead class="border-bottom">
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Title</th>
                  <th>Play Count</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(topTrack, index) in artist.topTracks"
                  :key="topTrack.id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    <img
                      :src="`${topTrack.album.cover[0].url}`"
                      width="40px"
                      alt="song poster"
                    />
                  </td>
                  <td>{{ topTrack.name }}</td>
                  <td>{{ topTrack.playCount.toLocaleString() }}</td>
                  <td>{{ topTrack.durationText }}</td>
                  <td>
                    <button
                      @click="playSong(topTrack.id)"
                      class="btn btn-dark rounded p-0 d-grid"
                      style="width: 25px; height: 25px; place-items: center"
                    >
                      <i class="fa fa-play"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h5>Albums</h5>
        <div
          class="gray-scrollbar d-flex align-items-center gap-2 overflow-x-scroll"
        >
          <div v-for="albums in artist.albums.items" :key="albums.id">
            <SquareCard :albumDetails="albums" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import SquareCard from "@/components/SquareCard.vue";
import { ref, inject, onMounted } from "vue";
import { useRoute } from "vue-router";
import { formatNumber } from "@/utils/formatNumbers";
import { getArtist } from "@/utils/data";
const route = useRoute();
let artist = ref({
  name: "",
  verified: false,
  header: {},
  topTracks: {},
  albums: {},
  stats: {},
  type: "",
});
const artistId = route.params.id;
getArtist(artistId, artist);

let playSongId = inject("playSongId");
let songPlaying = inject("songPlaying");

const playAllSongs = (id) => {
  // playSongId.value.push(id)
  let songs = artist.value.topTracks;
  let playlist = [];
  for (let i = 0; i < songs.length; i++) {
    playlist.push(songs[i].id);
  }

  //  playSongId.value = playlist
};
const playSong = (id) => {
  playSongId.songId = id;
};

// const artistdata = async (id,artist) => {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     artist.value.name = result.name;
//     artist.value.verified = result.verified;
//     artist.value.type = result.type;
//     artist.value.header = result.visuals.header;
//     artist.value.topTracks = result.discography.topTracks;
//     artist.value.albums = result.discography.albums;
//     artist.value.stats = result.stats;
//   } catch (error) {
//     console.error(error);
//   }
// };

// artistdata();
</script>
<style scoped>
header {
  height: 300px;
  align-content: end;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-attachment: fixed;

  border-image: fill 0 linear-gradient(#0003, #000);
}
.table > :not(caption) > * > * {
  background: #222;
  border: none;
}
</style>
