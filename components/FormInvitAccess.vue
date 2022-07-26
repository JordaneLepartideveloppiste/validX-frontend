<template>
<div id="dialogNewAccessForm" class="w-full flex justify-center items-center z-30 absolute" >
    <form class="flex flex-col justify-center items-center w-full mb-12 overflow-x-scroll whitespace-nowrap">
    <div id="dialog-1" class="flex flex-col justify-start items-center w-1/2 border border-teal-300 bg-slate-50 rounded py-4 shadow-lg h-112">
        <span class="uppercase mt-4 mb-6 text-lg pl-12 mr-32 border-b border-teal-400 text-teal-400">Autoriser un accès pour</span>
        <div id="data-access" class="flex flex-col justify-start items-start h-64 mt-1">
            <div  class="flex justify-between items-start w-full ">
                <span class="font-bold text-teal-400 py-1 px-4 uppercase text-sm border border-teal-400">{{ annu.name }}</span>
                <div class="flex flex-col justify-between items-start mt-4">
                    <label class="text-xs py-1 text-center w-40 text-white bg-teal-400" for="validityDate">Accès valide jusqu'au :</label>
                    <input class=" w-40 border border-teal-400 rounded-b outline-0 px-2 text-sm text-slate-400" type="date" name="validityDate" id="validityDate">
                </div>
            </div>
            <div  class="flex justify-start items-center -mt-4">
                <div class="flex flex-col justify-start items-center  border border-teal-400 rounded-l-lg px-2 pb-2 w-60 mr-1">
                    <span class="text-sm capitalize font-semi-bold text-center w-60 bg-teal-400 text-white py-1 rounded-tl-lg" v-if="annu.columnsToCheck.length <= 1">Valeur d'entrée :</span>
                    <span class="text-sm capitalize font-semi-bold text-center w-60 bg-teal-400 text-white py-1 rounded-tl-lg" v-else>Valeurs d'entrée :</span>
                    <div class="flex flex-col justify-center items-center overflow-y-scroll h-24">
                        <span class="text-xs font-bold text-teal-400 my-2 uppercase px-4 border border-teal-400 py-1 rounded" v-for="column in annu.columnsToCheck" :key="column">{{ column }}</span>  
                    </div>
                </div>
                <div class="flex flex-col justify-start items-center border border-teal-500 rounded-r-lg px-2 pb-2 w-60 mt-12 ml-1">
                    <span class="text-sm capitalize font-semi-bold text-center w-60 bg-teal-500 text-white py-1 rounded-tr-lg" v-if="annu.columnsToReturn.length <= 1">Valeur de sortie :</span>
                    <span class="text-sm capitalize font-semi-bold text-center w-60 bg-teal-500 text-white py-1 rounded-tr-lg" v-else>Valeurs de sortie :</span>
                    <div class="flex flex-col justify-center items-center overflow-y-scroll h-24">
                        <span class="text-xs font-bold py-1 text-teal-500 border rounded my-2 border-teal-500 px-2 uppercase " v-for="column in annu.columnsToReturn" :key="column">{{ column }}</span>
                        <span class="text-xs font-bold py-1 text-teal-500 border rounded my-2 border-teal-500 px-2 uppercase " v-if="annu.columnsToReturn.length === 0">Validation</span>
                    </div>
                </div>  
            </div>
        </div>
        <div class="flex justify-between items-center my-3 w-10/12">
              <input class="border border-teal-400 w-96 py-1 rounded-full text-sm text-teal-400 outline-0 placeholder:px-2" type="text" @click="$emit('prevToFile')" placeholder="@ email du demandeur">
              <button class="border border-teal-400 w-28 py-1 rounded-full bg-teal-400 text-sm text-white hover:bg-white hover:text-teal-400" @click="$emit('nextToReturn')">Envoyer</button>
            </div>
    </div>
    </form>
</div> 
</template>

<script>
export default {
    props: ["annu"],
    data() {
        return {
            newAccessform : {
                validtyDate : '',
                email: '',
            }
                

            
        }
    },
    computed: {
    MainList() {
            const items = [];
             const listNameItems = annu.nameColumns;
             const listReturnedItems = annu.columnsToReturn;
             if(onDuplicate) {
                for(let i = 0; i < listReturnedItems.length; i++) {
                listNameItems.pop(listReturnedItems[i]);
             }
             for(let i = 0; i < listNameItems.length; i++) {
                items.push({
                    id: i+1,
                    title: listNameItems[i],
                    list: 1,
                })
            }
             } else {
                for(let i = 0; i < listNameItems.length; i++) {
                items.push({
                    id: i+1,
                    title: listNameItems[i],
                    list: 1,
                })
            }
             }
             
            console.log(items);
            return items;
        },
    ReturnedList() {
        if (annu.length > O) {
            const listItemsReturned = [];
            for(let i = 0; i < annu.columnsToReturn.length; i++) {
                listItemsReturned.push({
                    id: i+1,
                    title: annu.columnsToReturn[i],
                    list: 2,
                })
            }
            console.log(listItemsReturned);
            return listItemsReturned;
        } 
      return this.items.filter((item) => item.list === 2);
    },
  },
}
</script>

<style>

</style>