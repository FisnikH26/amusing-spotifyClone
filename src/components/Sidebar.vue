<template>
  <nav class="w-100 bg-dark py-1 px-2 rounded mt-2">
    <ul class="nav flex-column gap-3">
      <li>
        <router-link class="text-decoration-none" to="/">
          <i class="fas fa-home pe-2"></i>
          Home
        </router-link>
      </li>
      <li>
        <router-link class="text-decoration-none" to="/search">
          <i class="fas fa-magnifying-glass pe-2"></i>
          Search
        </router-link>
      </li>
    </ul>
  </nav>
  <section class="library w-100 bg-dark py-1 px-2 rounded mt-2">
    <header class="d-flex align-items-center justify-content-between">
      <h6 class="text-white m-0">Your Library</h6>
      <div>
        <button class="btn btn-dark">
          <i class="fas fa-plus"></i>
        </button>
        <button class="btn btn-dark">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
<style>
nav a {
  position: relative;
  display: block;
  color: white;
  font-weight: 500;
}

nav a.router-link-exact-active {
  color: rgb(252, 103, 192);
  font-weight: 600;
}
</style>
