<template>
  <div class="pb-2">
    <main> 
      <div id="music" >
        <section>
          <h5>Popular Albums</h5>
          <div
            v-if="albums !== undefined"
            class="cards d-flex flex-wrap"
          >
            <router-link
              :to="`album/${album.id}`"
              class="text-decoration-none"
              
              v-for="(album, index) in albumSongs.slice(0,6)"
              :key="index"
            > 
              <AlbumCard  :albumDetails="album"/>
            </router-link>
          </div>
          <div v-else>Loading</div>
        </section>
        <section>
          <h5>Popular Artists</h5>
          <div class="cards d-flex flex-wrap">
            <router-link
              v-for="(artist,index) in artists.slice(0,6)"
              :to="`artist/${artist.id.split(' ').join('-')}`"
              class="text-decoration-none"
              :key="index"
            >
              <CircleCard :artistDetails="artist" />
            </router-link>
          </div>
        </section>
      </div> 
    </main>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import AlbumCard from "@/components/SquareCard.vue";
import CircleCard from "@/components/CircleCard.vue";  
import {getHomeOverview} from '@/utils/data'
  
  let artists = ref([])
  let albums = ref([]) 
  let albumSongs = ref([]) 
 
 
    getHomeOverview(artists,albums,albumSongs)
 
</script>
<style scoped> 
  .cards{justify-content: space-evenly;}
@media screen and (max-width :991px) {
  .cards{justify-content: start;}
}
</style>
