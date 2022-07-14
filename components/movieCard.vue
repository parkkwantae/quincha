<template>
  <div class="card">
    <nuxt-link :to="{ path: `/${moviedata.id}` }">
      <img :src="imgUrl" alt="poster" class="poster" />
    </nuxt-link>
  </div>
</template>

<script>
import { image_url } from "@/plugins/axios";

export default {
  props: ["moviedata"],
  data() {
    return {
      imgUrl: `${image_url}${this.moviedata.poster_path}`,
    };
  },

  methods: {
    posterClick() {
      console.log(this.moviedata.id);
      this.$router.push({
        url: `/${this.moviedata.id}`,
        params: { data: this.moviedata },
      });
      //   this.$router.push(`/${this.moviedata.id}`);
    },
  },
};
</script>

<style scoped>
.card {
  width: 10rem;
  height: 12rem;
  padding: 0.5rem;
}

.poster {
  width: 100%;
  height: 100%;
  /* cursor: pointer; */
}
</style>
