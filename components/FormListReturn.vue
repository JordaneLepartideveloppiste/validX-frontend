<template>
  <div id="dialog-4" class="flex flex-col justify-start items-center w-1/2 border border-teal-300 bg-slate-50 rounded py-4 shadow-lg h-112">
            <span class="uppercase mt-4 mb-6 text-lg pl-12 mr-32 border-b border-teal-400 text-teal-400">Définir les interactions</span>
              <div id="returns" class="flex flex-col justify-start items-center h-64 overflow-y-scroll mb-4 w-full">
                <div class="flex justify-around items-start w-full">
                  <div class="flex flex-col justify-start items-center h-64 overflow-y-scroll w-3/12">
                    <span class="border border-teal-400 w-24 overflow-hidden px-1 rounded mb-2 text-sm text-teal-500 bg-teal-200 cursor-grab" 
                    v-for="item in MainList" 
                    :key="item.id" 
                    draggable
                    @dragstart="startDrag($event, item)">{{ item.title }}</span>
                  </div>
                  <div class="flex flex-col justify-start items-center h-64 w-64">
                    <span class="text-xs font-light py-1">Les données retournées :</span>
                    <div class="flex flex-col justify-start items-center w-full h-56 pt-4 border border-teal-300 rounded overflow-y-scroll" 
                    @drop="onDrop($event, 2)"
                    @dragover.prevent
                    @dragenter.prevent>
                        <div class="flex flex-col justify-center items-center pt-4" v-if="ReturnedList.length === 0">
                            <p class="text-xs text-slate-400">Si cette section reste vide,</p><p class="text-xs text-slate-400">un message de validation sera renvoyé.</p>
                        </div>
                        <span class="border border-teal-400 w-24 overflow-hidden px-1 rounded mb-2 text-sm text-teal-500 bg-teal-200 cursor-pointer hover:bg-pink-600 hover:text-white hover:border-pink-400"
                        v-else
                        v-for="item in ReturnedList" :key="item.title"
                        @click="offDrop(item.id, 1)">
                            {{ item.title }}
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center my-3 w-10/12">
                <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('prevToCheck')">Précédent</button>
                <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('duplicateList')" v-if="onDuplicate">Dupliquer</button>
                <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-white hover:bg-white hover:text-teal-400" @click="$emit('createList')" v-else>Créer</button>
              </div>
          </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
               {
                id: "A",
                title: "Identifiant",
                list: 1,
               },
               {
                id: "B",
                title: "Prénom",
                list: 1,
               },
               {
                id: "C",
                title: "Nom",
                list: 1,
               },
               {
                id: "D",
                title: "Email",
                list: 1,
               },
               {
                id: "E",
                title: "Téléphone",
                list: 1,
               },
            ]
        }
    },
    computed: {
    MainList() {
      return this.items.filter((item) => item.list === 1)
    },
    ReturnedList() {
      return this.items.filter((item) => item.list === 2)
    },
  },
    props: ["listForm", "annu", "onDuplicate"],
    methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
    offDrop(id, list) {
      const item = this.items.find((item) => item.id == id)
      item.list = list
    },
  },
}
</script>

<style>

</style>