<template>
  <div>
    <TopBar />
    <div id="main-content" class="flex flex-row justify-start items-start" >
    <SideBarUser />
    <div   class="flex flex-col justfy-center items-center ml-12 w-full mr-4 mt-8">
        <Nuxt />
    </div>
    </div>
  </div>
</template>

<script>
import TopBar from '~/components/TopBar.vue';
export default {
    components: { TopBar },
  head() {
    return {
      bodyAttrs: {
        id: 'default-layout'
      }
    }
  }
}
</script>

<style>

</style>