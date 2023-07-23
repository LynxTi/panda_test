<template>
  <div class="the-header">
    <div class="the-header__logo">
     <TheLogo/>
    </div>
    <div class="the-header__right-side">
      <NavMenu/>
      <SocialIconsBlock/>
    </div>

  </div>
</template>

<script>
import TheLogo from "@/components/theHeader/TheLogo.vue";
import NavMenu from "@/components/theHeader/NavMenu";
import SocialIconsBlock from "@/components/SocialIconsBlock.vue";
export default {
  name: 'TheHeader',
  components: {SocialIconsBlock, NavMenu, TheLogo},

}
</script>

<style scoped>

</style>
