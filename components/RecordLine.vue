<template>
  <div class="w-full flex flex-row justify-center items-center h-8 border border-b-0 border-b-teal-200 border-teal-300">
    <div class="w-1/12 h-8 pt-2 text-xs text-center text-gray-500 overflow-hidden">
      {{ record.id }}
    </div>

    <div class="w-4/12 h-8 pt-2 text-center text-xs text-gray-500 overflow-hidden">
      {{ record.date}}
    </div>

    <div class="w-7/12 h-8 pt-2 text-xs text-center text-gray-500 overflow-hidden">
      {{ record.Ip }}
    </div>
    </div>
</template>

<script>
export default {
     props: ["record"],
}
</script>

<style>

</style>