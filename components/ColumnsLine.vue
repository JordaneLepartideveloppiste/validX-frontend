<template>
  <div class="w-full flex flex-row justify-center items-center h-12 border border-b-0 border-b-teal-200 border-teal-300">
    <div class="w-1/12 h-6 text-xs text-center leading-5 text-gray-500 overflow-hidden">
      {{ annu.nameColumns.length }}
    </div>

    <div class="w-3/12 h-6 text-xs leading-5 text-gray-500 overflow-x-scroll text-center">
     <span v-for="column in annu.nameColumns" :key="column" >{{ column }}, </span> 
    </div>

    <div class="w-3/12 h-6 text-xs text-center leading-5 text-gray-500 overflow-x-scroll text-center">
      <span v-for="column in annu.columnsToCrypt" :key="column" >{{ column }}, </span> 
    </div>
    <div class="w-3/12 h-6 text-xs leading-5 text-gray-500 overflow-x-scroll text-center">
      <span v-for="column in annu.columnsToCheck" :key="column" >{{ column }}, </span> 
    </div>
    <div class="w-2/12 h-4 text-xs text-gray-500 overflow-x-scroll text-center"  >
      <span v-for="column in annu.columnsToReturn" :key="column">{{column}}, </span>
      <span v-if="annu.columnsToReturn.length === 0">Validation</span>
    </div>
    <div
      class="w-1/12 pl-3 h-8 pt-1 text-sm text-right text-sm text-right text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </div>
    <div
      class="w-1/12 pl-6 h-8 pt-1 text-sm text-right text-sm text-right text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>

</template>

<script>
export default {
     props: ["annu"],
}
</script>

<style>

</style>