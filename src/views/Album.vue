<template>
  <div>
    <main>
      <section
        class="px-3"
        style="
          border-image: fill 0 linear-gradient(#de3163, #00000000);
          min-height: 300px;
          align-content: end;
        "
      >
        <div class="row">
          <div class="col-lg-2" v-if="albumMetadata">
            <img
              :src="
                albumMetadata?.cover[0]?.url ||
                '../assets/media/images/album_placeholder.jpg'
              "
              class="album_cover"
              style="width: 158px"
              alt="placeholder"
            />
          </div>
          <div class="col-lg-10">
            <small> {{ albumMetadata.type }} </small>
            <h2 class="fs-1 fw-bolder">{{ albumMetadata.name }}</h2>
            <small>
              <strong>{{ albumMetadata.label }}</strong>
              • {{ new Date(albumMetadata.date).getFullYear() }} • 36 min 35 sec
            </small>
          </div>
        </div>
      </section>
      <section class="body pt-5 px-3">
        <div class="d-flex align-items-center justify-content-between mb-5">
          <div>
            <button class="btn btn-lg btn-danger text-dark rounded-circle">
              <i class="fas fa-play"></i>
            </button>
            <button class="btn fs-4 text-secondary border-0">
              <i class="fa-solid fa-circle-plus"></i>
            </button>
            <button class="btn fs-4 text-secondary border-0">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <div>
            <button class="btn text-secondary border-0">
              <small class="text-white">List </small>
              <i class="fa-solid fa-list-ul"></i>
            </button>
          </div>
        </div>
        <div>
          <table class="raisinBlack w-100">
            <thead class="border-bottom">
              <th>#</th>
              <th class="w-75">Title</th>
              <th class="text-center">
                <i class="fas fa-clock"></i>
              </th>
            </thead>
            <tbody>
              <tr
                v-for="song in songs.items"
                :key="song.id"
                class="raisinBlack"
              >
                <td class="py-2">{{ song.trackNumber }}</td>
                <td class="py-2">
                  <h6 class="mb-0">{{ song.name }}</h6>
                  <small v-for="artist in song.artists" class="text-secondary">
                    {{ artist.name }}
                  </small>
                </td>
                <td class="text-center py-2">
                  <button class="btn btn-sm btn-outline-light border-0">
                    <i class="fa-solid fa-circle-plus"></i>
                  </button>
                  <small class="px-2">{{ song.durationText }}</small>
                  <button class="btn btn-sm btn-outline-light border-0">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="font-size: 10px" class="text-secondary">
            <small
              v-for="({ type, text }, index) in albumMetadata.copyright"
              :key="index"
              >{{ text }}</small
            >
            <br />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import AlbumCard from "@/components/SquareCard.vue";
import { getAlbumMetadata, getAlbumsSongs } from "@/utils/data";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { options } from "@/utils/helpers";

const route = useRoute();

let albumMetadata = ref([]);
let songs = ref([]);
const url = "https://spotify-scraper.p.rapidapi.com/v1/album";


getAlbumMetadata(route.params.id, albumMetadata)
getAlbumsSongs(route.params.id, songs)
// const getAlbumMetadata = async () => {
//   try {
//     const response = await fetch(
//       url + `/metadata?albumId=${route.params.id}`,
//       options
//     );
//     const result = await response.json();
//     albumMetadata.value = result;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const getAlbumsSongs = async () => {
//   try {
//     const response = await fetch(
//       url + `/tracks?albumId=${route.params.id}`,
//       options
//     );
//     const result = await response.json();
//     songs.value = result.tracks;
//   } catch (error) {
//     console.error(error);
//   }
// };

// getAlbumMetadata();
// getAlbumsSongs();
</script>
<style>
@media screen and (max-width: 567px) {
  .album_cover {
    text-align: center;
  }
}
</style>
