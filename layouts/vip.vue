<template>
  <div>
    <TopBar />
    <div id="main-content" class="flex flex-row justify-start items-start" >
    <SideBarAdmin />
    <div   class="flex flex-col justfy-center items-center ml-12 w-full mr-4 mt-24">
        <Nuxt />
    </div>
    </div>
  </div>
</template>

<script>
import TopBar from '~/components/TopBar.vue';
import SideBarAdmin from '~/components/SideBarAdmin.vue';
export default {
    components: { TopBar, SideBarAdmin },
  head() {
    return {
      bodyAttrs: {
        id: 'vip-layout'
      }
    }
  }
}
</script>

<style>

</style>