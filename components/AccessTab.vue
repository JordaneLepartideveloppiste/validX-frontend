<template>
  <div id="access">
    <AccessHead />
    <div v-for="access in annu.accessArray" :key="access.id">
      <AccessLine  :access="access" />
      
    </div>
  </div> 
</template>

<script>
import AccessHead from './AccessHead.vue';
import AccessLine from './AccessLine.vue';
export default {
    props:["annu"],
    components: { AccessHead, AccessLine }
}
</script>

<style>

</style>