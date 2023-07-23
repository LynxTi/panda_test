<template>
  <div class="preview-block">
    <div class="preview-block__header">
      <div class="preview-block__header-subtext sub-text">
        Best features of FaaS reflection and rebase protocols
      </div>
      <div class="preview-block__header-title title">
        Dynamic market response protocol
      </div>
      <div class="preview-block__header-buttons-wrap">
          <TheButton class="the-button__accent">
            Open app
          </TheButton>
        <TheButton>
          Whitepaper
        </TheButton>
          <TheButton  class="preview-block__header-discord-btn" to="#">
            <img class="preview-block__header-discord-img" src="@/assets/img/discord_wight.png" alt="">
          </TheButton>
      </div>
    </div>
    <div class="preview-block__bgc">
    </div>
    <img class="preview-block__bgc-img" src="@/assets/img/boomerang.png" alt="">
    <PrewiewAnalyticsBlock/>
  </div>
</template>

<script>
import TheButton from "@/components/ui/theButton/the-button.vue";
import PrewiewAnalyticsBlock from "@/components/previewBlock/PreviewAnalyticsBlock.vue";
export default {
  name: 'PreviewBlock',
  components: {PrewiewAnalyticsBlock, TheButton}

}
</script>


