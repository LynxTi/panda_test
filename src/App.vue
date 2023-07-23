<template>
  <div class="wrapper">
    <TheHeader/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/sass/index.sass'
import TheHeader from "@/components/theHeader/TheHeader.vue";

export default {
  name: 'App',
  components: {
    TheHeader
  },
  created() {
  },

}
</script>

<style>

</style>
