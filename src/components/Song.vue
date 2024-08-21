<script setup>
    const {metadata, audio} = defineProps({
        metadata:Object,
        audio:Object
    })
</script>
<template>
     <div class="song w-100 px-2">
      <h6>name</h6>
      <!-- <button
        :class="`btn btn-small btn-light rounded-start-circle mx-2 `"
        
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>  -->
      <button
        class="btn btn-small soundBoardbtn mx-2"
      >
        <i class="fa-solid fa-pause"></i>
      </button>
      <button  class="btn btn-small soundBoardbtn mx-2">
        <i class="fa-solid fa-play"></i>
      </button>
      <!-- <button
        :class="`btn btn-small btn-light rounded-end-circle mx-2 `"
        @click="songPlaying.songNum++"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button> -->
    </div>


<div id="song">
    <!-- <audio   controls autoplay id="song">
      <source src="url" type="audio/mpeg" />
    </audio> -->
</div>
        
    
</template>

<style scoped>
.song{
    border:1px solid green;
}
    .soundBoardbtn{
        background: transparent;
        color: green;
    }
</style>