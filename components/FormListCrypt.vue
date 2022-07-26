<template>
  <div id="dialog-2" class="flex flex-col justify-start items-center w-1/2 border border-teal-300 bg-slate-50 rounded py-4 shadow-lg h-112">
            <span class="uppercase mt-4 mb-6 text-lg pl-4 mr-32 border-b border-teal-400 text-teal-400">Identifier les données sensibles</span>
            <div id="data-list" class="flex flex-col justify-start items-center h-64 overflow-y-scroll mt-4">
            <FormListCryptUnit v-for="name in colNames" :key="name" :name="name" />
            <div class="flex justify-cneter items-center mb-4 w-11/12">
              <span class="border border-slate-500 w-40 rounded-l-lg border-r-0 bg-white text-slate-500 text-center">Prénom</span>
              <button class="border border-teal-400 w-44 border-r-0 bg-white text-teal-400 text-center hover:text-white hover:bg-teal-200">Encoder</button>
              <button class="border border-sky-400 w-32 border-r-0 bg-white text-sky-400 text-center hover:text-white hover:bg-sky-200">Renommer</button>
              <button class="border border-rose-600 w-28 rounded-r-lg bg-white text-rose-600 text-center hover:text-white hover:bg-rose-400">Supprimer</button>
            </div>
            <div class="flex justify-cneter items-center mb-4 w-11/12">
              <span class="border border-slate-500 w-40 rounded-l-lg border-r-0 bg-white text-slate-500 text-center">Nom</span>
              <button class="border border-teal-400 w-44 border-r-0 bg-white text-teal-400 text-center hover:text-white hover:bg-teal-200">Encoder</button>
              <button class="border border-sky-400 w-32 border-r-0 bg-white text-sky-400 text-center hover:text-white hover:bg-sky-200">Renommer</button>
              <button class="border border-rose-600 w-28 rounded-r-lg bg-white text-rose-600 text-center hover:text-white hover:bg-rose-400">Supprimer</button>
            </div>
            <div class="flex justify-cneter items-center mb-4 w-11/12">
              <span class="border border-slate-500 w-40 rounded-l-lg border-r-0 bg-white text-slate-500 text-center">Email</span>
              <button class="border border-teal-400 w-44 border-r-0 bg-white text-teal-400 text-center hover:text-white hover:bg-teal-200">Encoder</button>
              <button class="border border-sky-400 w-32 border-r-0 bg-white text-sky-400 text-center hover:text-white hover:bg-sky-200">Renommer</button>
              <button class="border border-rose-600 w-28 rounded-r-lg bg-white text-rose-600 text-center hover:text-white hover:bg-rose-400">Supprimer</button>
            </div>
            </div>
            <div class="flex justify-between items-center my-3 w-10/12">
              <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('prevToFile')">Précédent</button>
              <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('nextToCheck')">Suivant</button>
            </div>
         </div>
</template>

<script>
import FormListCryptUnit from "./FormListCryptUnit.vue";
export default {
    props: ["listForm"],
    data() {
        return {
            colNames: [
                "Identifiant",
                "Prénom",
                "Nom",
                "Email"
                ]
        };
    },
    
    components: { FormListCryptUnit }
}
</script>

<style>

</style>