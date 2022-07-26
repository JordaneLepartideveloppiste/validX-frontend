<template>
<div id="owner-line" class="w-full flex flex-col">
  <div class="w-full flex flex-row justify-center items-center h-16 rounded-t-lg bg-teal-400 border border-teal-500 mb-1">
    <div class="w-1/12 h-12 pt-3 text-sm text-center font-medium text-gray-900">
      {{ proprio.id }}
    </div>

    <div class="w-4/12 h-12 pt-3 text-sm font-medium pr-2 text-gray-900 uppercase">
      {{ proprio.name }}
    </div>

    <div class="w-3/12 h-12 pt-3 text-sm font-medium text-gray-900 overflow-hidden">
      {{ proprio.email }}
    </div>

    <div class="w-1/12 h-12 pt-2 pb-1 text-right">
      <span
      v-if="proprio.account.isActivate"
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-700 bg-teal-50 text-center rounded border border-teal-700"
        >{{proprio.account.typeAccount}}</span
      >
      <span
      v-else
        class="inline-flex px-2 py-1 text-xs font-semibold text-slate-300 bg-slate-50 text-center rounded border border-slate-300"
        >{{proprio.account.typeAccount}}</span
      >
    </div>
    <div class="w-1/12 h-12 pt-2 pb-1 text-center pl-8">
      <button
        v-if="!seeLists"
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="seeLists = true"
        >Voir</button
      >
      <button
        v-else
        class="inline-flex px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white"
        @click="seeLists = false"
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
        stroke="white"
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
  <div id="annuaire" v-if="seeLists">
    <ListHead />
      <div  v-for="annu in proprio.annuaires" :key="annu.id">
        <ListLine :annu="annu"/>
      </div>
  </div>
  
  </div>
</template>

<script>
import ListLine from './ListLine.vue';
import ListHead from './ListHead.vue';

export default {
    data(){
      return {
        seeLists: false,

      }
      
    },
    props: ["proprio"],
    components: { ListLine, ListHead },
    
};
</script>

<style></style>
