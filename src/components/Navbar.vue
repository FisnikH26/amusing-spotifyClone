<script setup>


</script>
<template>
<nav class="d-flex align-items-center justify-content-between pt-2 pb-3">
      <div>
        <button class="btn btn-sm btn-dark rounded-circle" @click="$router.go(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn btn-sm btn-dark rounded-circle" @click="$router.go(+1)">
          <i class="fas fa-chevron-right" ></i>
        </button>
      </div>
      <div>
        <router-link
          to="/somepage"
          class="btn btn-light btn-sm rounded-pill fw-bold px-3"
          >Explore Premium</router-link
        >
        <router-link
          to="/somepage"
          class="btn btn-dark bg-black btn-sm rounded-pill fw-bold px-3"
        >
          <i class="fa-regular fa-circle-down"></i>
          Install App
        </router-link>
        <router-link
          to="/somepage"
          class="btn btn-dark bg-black btn-sm rounded-pill fw-bold"
        >
          <i class="fa-regular fa-bell"></i>
        </router-link>
        <button
          class="btn btn-sm rounded-circle text-dark bg-info p-0"
          style="width: 25px; height: 25px"
        >
          F
        </button>
      </div>
    </nav>
        
    
</template>