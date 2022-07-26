<template>
<div>
  <div class="w-full flex flex-row justify-center items-center h-16 border border-b-2 border-teal-300 bg-teal-200">
    <div class="w-1/12 h-12 pt-3 text-sm text-center text-gray-500 overflow-hidden">
      {{ annu.id }}
    </div>

    <div class="w-2/12 h-12 pt-3 text-sm text-gray-500 overflow-hidden uppercase">
      {{ annu.name }}
    </div>

    <div class="w-1/12 h-12 pt-3 text-sm text-center text-gray-500 overflow-hidden">
      {{ annu.sourceType }}
    </div>
    <div class="w-2/12 h-12 pt-3 text-sm text-gray-500 overflow-hidden">
      {{ annu.sourceDetails }}
    </div>

    <div class="w-2/12 h-12 pt-3 text-sm text-gray-500 overflow-hidden">
      {{annu.urlToken}}
    </div>
    <div class="w-1/12 h-12 pt-2 pb-1 text-center pl-8">
      <button
        v-if="!seeColumns"
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="showColumns"
        >Voir</button
      >
      <button
        v-else
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="hideColumns"
        >Réduire</button
      >
    </div>
    <div class="w-1/12 h-12 pt-2 pb-1 text-center pl-8">
      <button
        v-if="!seeAccess"
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="showAccess"
        >Voir</button
      >
      <button
        v-else
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="hideAccess"
        >Réduire</button
      >
    </div>

    <div
      class="w-1/12 pl-8 h-12 pt-2 pb-1 text-sm text-right text-gray-500"
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
      class="w-1/12 pl-8 h-12 pt-2 pb-1 text-sm text-right text-gray-500"
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
  <ColumnsTab :annu="annu" v-if="seeColumns"/>
        
  <AccessTab :annu="annu" v-if="seeAccess"/>
  </div>
</template>

<script>
import ColumnsTab from './ColumnsTab.vue';
import AccessTab from './AccessTab.vue';

export default {
    data() {
      return {
        seeColumns : false,
        seeAccess : false,
      }
    },
    props: ["annu"],
    components: { ColumnsTab, AccessTab },
    methods: { 
    showColumns() { this.seeColumns = true; },
    hideColumns() { this.seeColumns = false; },
    showAccess() { this.seeAccess = true; },
    hideAccess() { this.seeAccess = false; },

     }
}
</script>

<style>

</style>