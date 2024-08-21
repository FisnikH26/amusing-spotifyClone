<template>
  <div
    class="card border-0 position-relative p-2"
    style="width: 10rem; background: transparent"
  >
    <button
      class="btn-play btn btn-lg btn-light rounded-circle position-absolute"
      style="top: 43%; right: 5px"
    >
      <i class="fas fa-play"></i>
    </button>
    <img
      :src="artistDetails?.visuals?.avatar[0]?.url || '' "
      class="card-img-top rounded-circle w-100 object-fit-cover"
      style="aspect-ratio: 1/1"
      alt="..."
    />
    <div class="card-body px-0">
      <small class="card-title fw-semibold text-white">{{ artistDetails.name }}</small>
      <p class="card-text text-secondary">
        <small>Artist</small>
      </p>
    </div>
  </div>
</template>
<script >
export default{
  name:'CircleCard',
  props:['artistDetails']
}

</script>
