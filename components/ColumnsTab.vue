<template>
  <div id="columns">
    <ColumnsHead />
    <ColumnsLine  :annu="annu" />
  </div>
</template>

<script>
import ColumnsHead from './ColumnsHead.vue';
import ColumnsLine from './ColumnsLine.vue';
export default {
    props: ["annu"],
    components: { ColumnsHead, ColumnsLine }
}
</script>

<style>

</style>