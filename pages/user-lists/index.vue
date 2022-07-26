<template>
   <div  class="flex flex-col justify-start items-center w-11/12  -ml-4">
    <div  class="flex justify-end items-center w-full border-b border-b-teal-300 mb-8">
      <button class="w-2/12 border border-teal-400 text-teal-400 bg-white rounded-lg mb-4 mr-16 py-1 h-10 hover:bg-teal-400 hover:text-white" @click="showCreate()" >Ajouter Annuaire</button>
    </div>
    <div id="annuaire" class="flex flex-col justify-start items-center w-full mb-8" v-for="(annu, index) in proprio.annuaires" :key="annu.id">
    <div  class="flex justify-start items-center w-full h-10 border border-teal-400 bg-teal-400 text-white">
      <span class="font-bold mx-8 text-white uppercase w-56">{{ annu.name }}</span>
      <div  class="flex justify-start items-center h-8 whitespace-nowrap overflow-x-scroll">
      <span class="text-xs border border-white px-2 py-1 text-white uppercase mr-3" v-for="column in annu.nameColumns" :key="column">{{ column }}</span> 
      </div>
    </div>
    <div  class="flex justify-start items-end w-full">
      <div  class="flex justify-start items-center w-8/12">
          <div class="flex justify-between items-center whitespace-nowrap pl-1 -mr-4 h-10 w-7/12 border border-teal-400 border-r-0 border-t-0 bg-teal-300 rounded-l-b h-10"> 

            <button class="rounded-full border px-2 text-xs pb-0.5 text-teal-500 border-teal-500 bg-teal-100 ml-4 hover:bg-teal-500 hover:text-white" @click="showLists(index)" v-if="!onLists ">Voir Accès</button>
            <button class="rounded-full border px-2 text-xs pb-0.5 text-teal-500 border-teal-500 bg-teal-100 ml-4 hover:bg-teal-500 hover:text-white" @click="hideLists(index)" v-else>Fermer</button>
            <div class="flex justify-end items-center ">
            <div class="h-8 pt-0.5">
              <span class="text-xs font-bold text-teal-600 uppercase px-4" v-if="annu.columnsToCheck.length === 1" >{{ annu.columnsToCheck[0] }}</span> 
              <span class="text-xs font-bold text-teal-600 uppercase px-4 border-r last:border-r-0 border-teal-500" v-else v-for="column in annu.columnsToCheck" :key="column">{{ column }}</span>  
              
            </div>  
            <span class="h-8 z-20 font-bold border border-teal-500 text-teal-500 bg-teal-200 px-2.5 pt-0.5 rounded-full">=</span>
          </div>
          </div>
          <div class="flex justify-start items-center whitespace-nowrap h-10 w-5/12 border border-teal-400 border-l-0 border-t-0 bg-white rounded-r-b overflow-x-auto">
            <span class="text-xs font-bold py-1 text-teal-500 border-r last:border-r-0 first:pl-6 border-teal-500 px-2 uppercase " v-for="column in annu.columnsToReturn" :key="column">{{ column }}</span>
            <span class="text-xs font-bold py-1 text-teal-500 border-r last:border-r-0 first:pl-6 border-teal-500 px-2 uppercase " v-if="annu.columnsToReturn.length === 0">Validation</span>
          </div>  
      </div>
     <div  class="flex justify-end items-center w-4/12 space-x-4">
        <button class="w-32 border border-sky-500 bg-white text-sky-500 rounded-lg px-2 h-8 hover:text-white hover:bg-sky-500" @click="showDuplicate(index)">
          Duppliquer</button>
        <button class="w-32 border border-rose-600 bg-white text-rose-600 rounded-lg px-2 h-8 hover:text-white hover:bg-rose-600" @click="showDelete(index)">
          Supprimer</button>
        </div>
    </div>
        <UserListsTab :annu="ListsData[0]" v-if="onLists && annu.id === listsData[0].id" />

         <div id="dialogDuplicateListForm" class="w-full flex justify-center items-center z-30 absolute top-40" v-if="onDuplicate && annu.id === listsData[0].id">
      <button class="absolute top-4 right-84 text-xs text-teal-400 bg-white border border-teal-400 rounded-full px-2 ml-2 hover:text-white hover:bg-teal-400" @click="hideDuplicate(index)">Fermer</button>
      <form :model="duplicateListForm" class="flex flex-col justify-center items-center w-full mb-12 overflow-x-scroll whitespace-nowrap">
        <ConfDuplicateForm :annu="listsData[0]" @nextToCheck="showCheck()" @closeDuplicate="hideDuplicate(index)" v-if="seeConfDuplicateDialog" />
        <FormListCheck @prevToCrypt="showConfDuplicate()" @nextToReturn="showReturn()" v-if="seeCheckDialog" :listForm="duplicateListForm" :annu="listsData[0]"  />
        <FormListReturn @prevToCheck="showCheck()" @createList="onSubmit()" v-if="seeReturnDialog" :listForm="duplicateListForm" :annu="listsData[0]" :onDuplicate="onDuplicate"  />
      </form>
    </div>

         <div id="dialogDeleteList" class="w-full flex justify-center items-center z-30 absolute top-40" v-if="onDelete && annu.id === listsData[0].id">
      <button class="absolute top-4 right-84 text-xs text-teal-400 bg-white border border-teal-400 rounded-full px-2 ml-2 hover:text-white hover:bg-teal-400" @click="hideDelete(index)">Fermer</button>
      <form :model="deleteList" class="flex flex-col justify-center items-center w-full mb-12 overflow-x-scroll whitespace-nowrap">
        <ConfDeleteForm :annu="listsData[0]" @deleteList="onSubmit()" @closeDelete="hideDelete(index)" />
      </form>
    </div>
        
    </div>
    
    <div id="dialogNewListForm" class="w-full flex justify-center items-center z-30 absolute top-40" v-if="onCreate">
      <button class="absolute top-4 right-84 text-xs text-teal-400 bg-white border border-teal-400 rounded-full px-2 ml-2 hover:text-white hover:bg-teal-400" @click="hideCreate()">Fermer</button>
      <form :model="listForm" class="flex flex-col justify-center items-center w-full mb-12 overflow-x-scroll whitespace-nowrap">
        <FormListFile 
        @nextToCrypt="showCrypt()" 
        v-if="seeFileDialog" 
        :listForm="newListForm" />
        <FormListCrypt 
        @prevToFile="showFile()" 
        @nextToCheck="showCheck()" 
        v-if="seeCryptDialog" 
        :listForm="newListForm" />
        <FormListCheck 
        @prevToCrypt="showCrypt()" 
        @nextToReturn="showReturn()" 
        v-if="seeCheckDialog" 
        :listForm="newListForm" />
        <FormListReturn 
        @prevToCheck="showCheck()" 
        @createList="onSubmit()" 
        v-if="seeReturnDialog" 
        :listForm="newListForm" />
      </form>
    </div>

    
    
         

        
        
    </div>
  
  
</template>

<script>
import { proprietaires } from "~/assets/database"
import UserListsHead from "../../components/UserListsHead.vue"
import UserListsLine from "../../components/UserListsLine.vue"
import UserListsTab from "~/components/UserListsTab.vue";
import FormListFile from "../../components/FormListFile.vue";
import FormListCrypt from "../../components/FormListCrypt.vue";
import FormListReturn from "../../components/FormListReturn.vue";
import FormListCheck from "../../components/FormListCheck.vue";
import ConfDuplicateForm from "../../components/ConfDuplicateForm.vue";
import ConfDeleteForm from "../../components/ConfDeleteForm.vue";


export default {
    name: "lists",
    layout: "default",
    data() {
        return {
            proprio: proprietaires[2],
            onLists: false,
            onCreate: false,
            onDuplicate: false,
            onDelete: false,
            seeFileDialog: true,
            seeConfDuplicateDialog: true,
            seeCryptDialog: false,
            seeCheckDialog: false,
            seeReturnDialog: false,
            listsData: [],
            newListForm: {
              name: '',
              url: '',
              file: '',
              nameCols: [],
              colsToCrypt: [],
              colsToCheck: [],
              colsToReturn: [],
            },
            duplicateListForm: {
              name: "",
              url: "",
              file: "",
              nameCols: [],
              colsToCrypt: [],
              colsToCheck: [],
              colsToReturn: [],
            },
            deleteList: {},
            };
    },
    methods: {
        showLists(index) {
            console.log(index);
            this.onLists = true;
            this.listsData.push(this.proprio.annuaires[index]);
            console.log(this.ListsData);
        },
        hideLists(index) {
            this.onLists = false;
            this.listsData.pop(this.proprio.annuaires[index]);
        },
        showCreate() {
            this.onCreate = true;
        },
        hideCreate() {
            this.onCreate = false;
            this.seeFileDialog = true;
            this.seeReturnDialog = false;
        },
        showDuplicate(index) {
            this.onDuplicate = true;
            this.listsData.push(this.proprio.annuaires[index]);
        },
        hideDuplicate(index) {
            this.onDuplicate = false;
            this.listsData.pop(this.proprio.annuaires[index]);
            this.seeConfDuplicateDialog = true;
            this.seeReturnDialog = false;
        },
        showDelete(index) {
            this.onDelete = true;
            this.listsData.push(this.proprio.annuaires[index]);
             console.log(this.ListsData);
        },
        hideDelete(index) {
            this.onDelete = false;
            this.listsData.pop(this.proprio.annuaires[index]);
        },
        showFile() {
            this.seeFileDialog = true;
            this.seeCryptDialog = false;
        },
        showConfDupplicate() {
            this.seeConfDuplicateDialog = true;
            this.seeCheckDialog = false;
        },
        showCrypt() {
            this.seeFileDialog = false;
            this.seeCryptDialog = true;
            this.seeCheckDialog = false;    
        },
        showCheck() {
            this.seeCheckDialog = true;
            this.seeConfDuplicateDialog = false;
            this.seeCryptDialog = false;
            this.seeReturnDialog = false; 
        },
        showReturn() {
            this.seeReturnDialog = true;
            this.seeCheckDialog = false;
        },
        onSubmit() {
          this.onCreate = false;
          this.onDuplicate = false;
          this.onDelete = false;
          this.seeReturnDialog = false;
          this.listsData.pop(this.proprio.annuaires[index]);
        }

    },
    components: { UserListsHead, UserListsLine, UserListsTab, FormListFile, FormListCrypt, FormListReturn, FormListCheck, ConfDuplicateForm, ConfDeleteForm }
}
</script>

<style>

</style>