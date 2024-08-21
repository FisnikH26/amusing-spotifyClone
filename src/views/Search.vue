<template>
  <section class="my-3">
    <form class="d-flex w-50" @submit.prevent="searchArtist">
      <select
        name="type"
        class="rounded-0 text-white ps-2 border-0 border-bottom border-white bg-dark"
        v-model="searchType"
      >
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="track">Song</option>
      </select>
      <input
        type="search"
        class="form-control rounded-0 bg-transparent border-0 border-bottom text-white"
        placeholder="Search an artist or song"
        v-model="searchQuery"
        required
      />
      <button
        class="btn btn-dark border-0 border-bottom border-white rounded-0"
        type="submit"
      >
        <i class="fas fa-magnifying-glass"></i>
      </button>
    </form>
  </section>
  <section class="search_result-section">
    <h5>{{ artists.type}}</h5>
    <div
      v-if="artists.type == 'artist'"
      class="d-flex overflow-x-scroll gray-scrollbar"
    >
      <div v-for="artist in artists.items" :key="artist.id">
        <div  class="cursor-pointer" @click="handleClick(artist)">
          <CircleCard :artistDetails="artist" />
        </div>
      </div>
    </div>
    <div
      v-if="artists.type == 'album'"
      class="d-flex overflow-x-scroll gray-scrollbar"
    >
      <div v-for="(album, index) in artists.items" :key="album.id || index">
        <router-link :to="`album/${album.id}`" class="text-decoration-none">
          <SquareCard :albumDetails="album" />
        </router-link>
      </div>
    </div>
  </section>
  <section class="recent-searches">
    <h4 class="fw-bold">Recent seaches</h4>
    <div class="cards d-flex overflow-x-scroll gray-scrollbar">
      <div v-for="artist in getRecentSearch()"   :key="artist.id">
        <div  class="cursor-pointer" @click="handleClick(artist)">
          <CircleCard :artistDetails="artist" />
        </div>
      </div>
    </div>
  </section>
  <section>
    <h4 class="fw-bold">Browse all</h4>
    <div
      class="d-grid gap-3"
      :style="{
        gridTemplateColumns: 'repeat(6,1fr)',
        gridTemplateRows:
          'repeat(' + Math.ceil(genresList.length / 6) + ',minmax(150px,1fr))',
      }"
    >
      <div
        v-for="genre in genresList"
        class="genreBox rounded-2 p-2 fw-bold overflow-hidden position-relative"
        :style="{
          backgroundColor: 'rgb(' + genreBoxColor() + ')',
        }"
        :key="genre"
      >
        {{ genre }}
        <img
          src="../assets/media/images/album_placeholder.jpg"
          class="position-absolute"
          :style="{
            width: '100px',
            height: '100px',
            bottom: '-15px',
            right: '-15px',
            rotate: '-35deg',
          }"
          alt="placeholder"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import CircleCard from "@/components/CircleCard.vue";
import SquareCard from "@/components/SquareCard.vue";

import { addRecentSearch, getRecentSearch } from "@/utils/recentSearch";
import { genreBoxColor } from "@/utils/GenreBoxColor";
import { getSearchResult } from "@/utils/data";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const artists = reactive({
  type: "",
  items: [],
});

let genresList = ["Music", "Rock", "Pop", "Rap"];

let searchQuery = "";
let searchType = "artist";




// const getSearchResult = async (term, type,artists) => {
//   const url = `https://spotify-scraper.p.rapidapi.com/v1/search?term=${term}&type=${type}&limit=5`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "588aec5f40mshf1c47597f29ce6bp1abcaejsn9f873f4f1e6c",
//       "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
//     },
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();

//     artists.value.type = type;
//     if (type == "artist") {
//       artists.value.items = result.artists.items;
//       return;
//     }
//     if (type == "album") {
//       let filterAlbum = result.albums.items.filter(
//         (album) => album.name !== undefined
//       );
//       artists.value.items = filterAlbum;
//       return;
//     }
//     return;
//   } catch (error) {
//     console.error(error);
//   }
// };
function handleClick(artist){
  router.push({path: `artist/${artist.id}`})
  addRecentSearch(artist)
}

// let recent_searches = inject('recentSearches') 


function searchArtist() {
  router.push({ query: { q: searchQuery, type: searchType } });
   
getSearchResult(searchQuery,searchType,artists)
  console.log(searchQuery,searchType,artists)
}


onMounted(() => {
  searchQuery = route.query.searchQuery || "" ;
  searchType = route.query.searchType || "artist" ;
  
  if(searchQuery !== ""){
    getSearchResult(route.query.q,route.query.type,artists)
}
});

</script>

<style scoped>
input[type="search"]::placeholder {
  color: #eee;
}
.cursor-pointer{
  cursor:pointer
}
</style>
@/utils/recentSearch