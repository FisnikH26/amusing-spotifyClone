<template> 
  <div v-show="albumDetails.name"
    class="card border-0 position-relative p-2 align-items-start"
    style="width: 10rem; background: transparent"
  >
    <button
      class="btn-play btn btn-lg btn-light rounded-circle position-absolute"
      style="top: 43%; right: 5px"
    >
      <i class="fas fa-play"></i>
    </button>
    <img 
      v-show="albumDetails?.cover[0]"
      :src="albumDetails?.cover[0]?.url || ''"
      class="card-img-top w-100 object-fit-cover"
      style="aspect-ratio: 1/1"
      alt="..."
    />
     
    <div class="card-body px-0 ">
      <small  class="card-title fw-semibold text-white m-0" :title="albumDetails.name">{{ albumDetails.name.length > 15 ? albumDetails.name.slice(0,15)+'...' : albumDetails.name}}</small>
      <p class="card-text text-secondary m-0">
        <small v-for="artist in albumDetails.artists">
          {{ artist.name }}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default { 
  props: ["albumDetails"]
};
</script>

<style>
.card:hover {
  background: #41404030 !important;
}
.tab-btn div {
  background: #444;
  color: white;
}
.tab-btn div.active {
  background: white;
  color: black;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@media screen and (min-width: 992px) {
  .btn-play {
    opacity: 0;
  }
  .card:hover .btn-play {
    animation: fade-in 200ms linear forwards;
  }
}
</style>
