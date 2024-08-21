import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Explore.vue"; 
import Search from "../views/Search.vue"; 
import AlbumView from "../views/Album.vue"; 
import ArtistView from "../views/Artist.vue"; 

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "searchView",
    component: Search,
  },
  {
    path: "/somepage",
    name: "GenresView",
    component: Search,
  },
  {
    path: "/album/:id",
    name: "AlbumView",
    component: AlbumView, 
  },
  {
    path: "/artist/:id",
    name: "ArtistView",
    component: ArtistView, 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
