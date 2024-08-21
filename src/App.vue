<template>
  <div class="row m-0">
    <div class="col-lg-3 darkCharcoal sidebar_container">
      <Sidebar />
    </div>
    <div class="col-lg-9 raisinBlack min-h-100 px-3 text-white">
      <main class="mb-5">
        <Navbar/>
        <router-view />
        
      </main>
      <Footer />
    </div>
    <SongBoard />
  </div>
</template>
<script setup>
import { provide,ref, reactive } from 'vue'

import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import SongBoard from "@/components/SongBoard.vue";

let recentSearches = ref(window.localStorage.getItem('recent-searches'))
let playSongId = reactive({
  songId:null
})
let songPlaying = ref({
  playing: false,
  songNum : 0,
});

provide('recentSearches', recentSearches.value)
provide('playSongId', playSongId) 
provide('songPlaying', songPlaying) 


 

</script>
<style>

.darkCharcoal{
  background-color: #333!important;
}
.raisinBlack{
  background: #222;
}
.min-h-100{
  min-height: 100dvh;
}
body {
  font-family: sans-serif;
}
.gray-scrollbar{
  scrollbar-color: #444 transparent;
  scrollbar-width: thin;
}






@media screen and (max-width :991px) {
  .sidebar_container{padding-bottom: 1rem;}
}
</style>
