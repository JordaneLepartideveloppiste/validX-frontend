<template>
  <div   class="w-full flex flex-col justfy-center items-center">
      
      <OwnersHead />
      <OwnerLine v-for="proprio in proprios" :key="proprio.id" :proprio="proprio" />
    </div>
</template>

<script>
import { proprietaires } from '~/assets/database'
import OwnersHead from '~/components/OwnersHead.vue';
import OwnerLine from '~/components/OwnerLine.vue';
export default {
    name: "admin",
    layout: "vip",
    data() {
        return {
            proprios: proprietaires,
        };
    },
    components: { OwnersHead, OwnerLine }
}
</script>

<style>

</style>