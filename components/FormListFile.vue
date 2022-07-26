<template>
  <div id="dialog-1" class="flex flex-col justify-start items-center w-1/2 border border-teal-300 bg-slate-50 rounded py-4 shadow-lg h-112">
            <span class="uppercase mt-4 mb-6 text-lg pl-12 mr-32 border-b border-teal-400 text-teal-400">Créer un nouvel annuaire</span>
            <div id="data-list" class="flex flex-col justify-start items-center h-64 mt-4">
            <div class="flex justify-center items-center mt-4 mb-8 ">
              <label for="listName" class="border border-r-0 border-teal-400 w-24 py-1 pr-2 text-right rounded-l-lg">Nom</label>
              <input id="listName" name="listName" type="text" class="outline-0 border border-teal-400 w-64 py-1 pl-2 rounded-r-lg" placeholder="..." v-model="listForm.name" >
            </div>
            <span class="text-sm mb-2">Si vos données sont hébergées :</span>
            <div class="flex justify-center items-center mb-8">
              
              <label for="url" class="border border-r-0 border-teal-400 w-24 py-1 pr-2 text-right rounded-l-lg">URL</label>
              <input id="url" name="url" type="text" class="outline-0 border border-teal-400 w-64 py-1 pl-2 rounded-r-lg" placeholder="Copier le lien ici" v-model="listForm.name" >
            </div>
            <span class="text-sm mb-2">Sinon veuillez les importer  :</span>
            <div class="flex justify-center items-center mb-8">
              <label for="file" class="border border-r-0 border-teal-400 w-24 py-1 pr-2 text-right text-teal-400 rounded-l-lg hover:bg-teal-400 hover:text-white">Choisir</label>
              <input id="file" name="file" type="text" class="outline-0 border border-teal-400 w-64 py-1 pl-2 rounded-r-lg" placeholder="file.csv" v-model="listForm.file" >
            </div>
            </div>
            <div class="flex justify-end items-center my-3 w-10/12">
              <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('nextToCrypt')">Suivant</button>
            </div>
            
        </div>
</template>

<script>
export default {
    props: ["listForm"],
}
</script>

<style>

</style>