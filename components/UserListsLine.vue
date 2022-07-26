<template>
           <div  class="flex justify-start items-center h-8 border border-teal-500 w-full mb-1 rounded-full border-r-0">
            <span class="text-sm w-4/12 ml-4">{{ access.name }}</span>
            <div class="text-sm w-3/12 flex justify-around items-center">
              <span>nb Requêtes :</span>
              <span>{{ access.records.length }}</span> 
            </div>
            <div  class="flex justify-end items-center w-5/12 h-8"  v-if="new Date(access.validityDate) > Date.now()">
              
              <div class="bg-teal-400 -skew-x-12 h-8 z-20 -mr-2">
                <span class="text-teal-400">O</span>
              </div>
              <span class="text-sm bg-teal-400 text-white text-center pt-1.5 h-8 w-8/12 -mr-1">Token Valide</span>
              <div class="bg-teal-400 -skew-x-12 h-8 z-20 -ml-1">
                <span class="text-teal-400">O</span>
              </div>
              <div class="bg-teal-200 border border-x-0 border-teal-500 -skew-x-12 h-8 z-20 -mr-2">
                <span class="text-teal-200">I</span>
              </div>
              <button class="text-sm w-4/12 h-8 bg-teal-200 rounded-r-full border border-l-0 border-teal-500 hover:font-bold hover:bg-gradient-to-l from-teal-500 to-teal-200">Supprimer</button>
            </div>
            <div  class="flex justify-end items-center w-5/12 h-8"  v-else>
              <div class="bg-slate-300 border border-x-0 border-teal-500 -skew-x-12 h-8 z-20 -mr-2">
                <span class="text-slate-300">O</span>
              </div>
              <span class="text-sm bg-slate-300 border border-x-0 border-teal-500 text-slate-500 text-center pt-1.5 h-8 w-8/12 -mr-1">Token Invalide</span>
              <div class="bg-slate-300 border border-x-0 border-teal-500 -skew-x-12 h-8 z-20 -ml-1">
                <span class="text-slate-300">O</span>
              </div>
              <div class="bg-teal-200 border border-x-0 border-teal-500 -skew-x-12 h-8 z-20 -mr-2">
                <span class="text-teal-200">I</span>
              </div>
              <button class="text-sm w-4/12 h-8 bg-teal-200 rounded-r-full border border-l-0 border-teal-500  hover:font-bold hover:bg-gradient-to-l from-teal-500 to-teal-200">Réinitialiser</button>
            </div>
            
           </div>

        

  
  
</template>

<script>
export default {
  name: "invitations",
  layout: "default",
  props: ["access"],
 
}
</script>

<style>

</style>