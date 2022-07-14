<template>
  <div>
    <page-header></page-header>
    <Nuxt />
  </div>
</template>

<script>
import pageHeader from "@/components/pageHeader.vue";

export default {
  components: {
    pageHeader,
  },
};
</script>

<style>
@font-face {
  font-family: "Nanum-Pen-Regular";
  src: url("@/assets/fonts/Nanum-Pen-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #000;
  padding-top: 50px;
}
</style>
