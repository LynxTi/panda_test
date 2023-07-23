<template>
  <div class="nav-menu">
    <div class="nav-menu__links-block">
        <router-link  class="nav-menu__link-item" to="#">
          Dashboard
        </router-link>
        <router-link  class="nav-menu__link-item" to="#">
          Portfolio
        </router-link>
        <router-link  class="nav-menu__link-item" to="#">
          Bonding
        </router-link>
        <router-link  class="nav-menu__link-item" to="#">
          Taxes and Zones
        </router-link>
        <router-link  class="nav-menu__link-item" to="#">
          Treasury
        </router-link>
    </div>
    <div class="nav-menu__lang-selector">
      <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_509_210)">
          <path d="M11.1713 12H33.1713V28.0002H11.1713V12Z" fill="white"/>
          <path d="M23.5463 12H20.7963V18.5H11.1713V21.5H20.7963V28H23.5463V21.5H33.1713V18.5H23.5463V12Z" fill="#D80027"/>
          <path d="M28.0918 22.7822L33.1713 25.8608V22.7822H28.0918ZM24.5626 22.7822L33.1713 27.9996V26.5243L26.997 22.7822H24.5626ZM30.8783 27.9996L24.5626 24.1716V27.9996H30.8783Z" fill="#0052B4"/>
          <path d="M24.5626 22.7822L33.1713 27.9996V26.5243L26.997 22.7822H24.5626Z" fill="white"/>
          <path d="M24.5626 22.7822L33.1713 27.9996V26.5243L26.997 22.7822H24.5626Z" fill="#D80027"/>
          <path d="M15.0532 22.7822L11.1713 25.1349V22.7822H15.0532ZM19.78 23.4457V27.9997H12.2666L19.78 23.4457Z" fill="#0052B4"/>
          <path d="M17.3456 22.7822L11.1713 26.5243V27.9996L19.78 22.7822H17.3456Z" fill="#D80027"/>
          <path d="M16.2509 17.2174L11.1713 14.1388V17.2174H16.2509ZM19.78 17.2174L11.1713 12V13.4753L17.3456 17.2174H19.78ZM13.4644 12L19.78 15.828V12H13.4644Z" fill="#0052B4"/>
          <path d="M19.78 17.2174L11.1713 12V13.4753L17.3456 17.2174H19.78Z" fill="white"/>
          <path d="M19.78 17.2174L11.1713 12V13.4753L17.3456 17.2174H19.78Z" fill="#D80027"/>
          <path d="M29.2895 17.2174L33.1713 14.8648V17.2174H29.2895ZM24.5626 16.554V12H32.076L24.5626 16.554Z" fill="#0052B4"/>
          <path d="M26.997 17.2174L33.1713 13.4753V12L24.5626 17.2174H26.997Z" fill="#D80027"/>
        </g>
        <defs>
          <clipPath id="clip0_509_210">
            <rect width="22" height="16" fill="white" transform="translate(11.1713 12)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
name: 'NavMenu'
}
</script>

<style scoped>

</style>