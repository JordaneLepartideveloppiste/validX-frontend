<template>
<div>
  <div class="w-full flex flex-row justify-center items-center h-12 border border-teal-300">
    <div class="w-1/12 h-4 text-xs text-center text-gray-500 overflow-hidden">
      {{ access.id }}
    </div>

    <div class="w-3/12 h-4 text-xs text-gray-500 overflow-hidden">
      {{ access.name }}
    </div>

    <div class="w-1/12 h-4 text-xs text-gray-500 overflow-hidden text-right">
      {{ access.validityDate }}
    </div>
    <div class="w-4/12 h-4 text-xs text-gray-500 overflow-x-scroll text-center">
      {{ access.tokenAccess }}
    </div>

    
   <div class="w-1/12 h-12 pt-3 text-center pl-8">
      <button
        v-if="!seeRecords"
        class="inline-flex px-2 text-xs font-semibold leading-5 text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="showRecords"
        >Voir</button
      >
      <button
        v-else
        class="inline-flex px-2 text-xs font-semibold leading-5 text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="hideRecords"
        >Réduire</button
      >
    </div>

    <div
      class="w-1/12 pl-8 h-12 pt-3 text-sm text-right text-gray-500"
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
      class="w-1/12 pl-8 h-12 pt-3 text-sm text-right text-gray-500"
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
  <div>

  </div>
  <div id="records" v-if="seeRecords">
        <RecordHead />
        <div v-for="record in access.records" :key="record.id">
          <RecordLine  :record="record" />
        </div>
      </div> 
  </div>
</template>

<script>
import RecordHead from './RecordHead.vue';
import RecordLine from './RecordLine.vue';
export default {
    data() {
        return {
            seeRecords: false,
        }
    },
    props: ["access"],
    components: { RecordHead, RecordLine },
    methods: {
        showRecords() { this.seeRecords = true; },
    hideRecords() { this.seeRecords = false; },}
    
}
</script>

<style>

</style>