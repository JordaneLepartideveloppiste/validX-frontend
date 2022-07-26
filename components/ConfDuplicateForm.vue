<template>
  <div id="dialog-1" class="flex flex-col justify-start items-center w-1/2 border border-teal-300 bg-slate-50 rounded py-4 shadow-lg h-112">
            <span class="uppercase mt-4 mb-6 text-lg pl-12 mr-32 border-b border-teal-400 text-teal-400">Dupliquer un annuaire</span>
            <div id="data-list" class="flex flex-col justify-start items-center h-64 mt-4 w-112 ">
            <p class="text-sm text-slate-400 mb-2">Dupliquer un annuaire implique de changer uniquement :</p>
            <p class="text-sm text-slate-400 mb-2">les valeurs d'entrée et de retour.</p>
            <p class="text-xl text-slate-500 mt-12">Êtes-vous sûr de vouloir dupliquer l'annuaire :</p>
            <span class="uppercase text-xl text-teal-400 mt-2 px-4"> "{{ annu.name }}" ?</span>
            </div>
            <div class="flex justify-between items-center my-3 w-10/12">
                <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('closeDuplicate')">Annuler</button>
                <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('nextToCheck')">Confirmer</button>
              </div>
            
            
        </div>
</template>

<script>
export default {
    props: ["annu"]
}
</script>

<style>

</style>