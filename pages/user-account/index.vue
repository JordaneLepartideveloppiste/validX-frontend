<template>
  <div  class="flex justify-center items-start w-full">
    <div  class="flex flex-col justify-start items-center w-10/12 mt-8 border border-teal-400 rounded ">
        <div  class="flex justify-start items-center my-4 ml-4">
          <span class="mr-2 font-bold" >Votre Email :</span>
          <span>machin@userdelenfer.com</span>
        </div>
        <div v-if="passForm">
        <form :model="newPassForm" class="flex flex-col justify-start items-center py-6">
        <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="password" placeholder="Choisissez un nouveau mot de passe" v-model="newPassForm.password" >
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="password" placeholder="Confirmez votre nouveau mot de passe" v-model="newPassForm.confPassword" >
        </form>
        <div  class="flex justify-around items-center my-4">
          <button class="text-sm text-white bg-slate-500 border border-slate-500 py-1 px-4 rounded-lg hover:bg-white hover:text-slate-500" @click="hideForm" >Annuler</button>
          <button class="text-sm text-white bg-teal-500 border border-teal-500 py-1 px-4 rounded-lg hover:bg-white hover:text-teal-500" @click="hideForm" >Modifier</button>
        </div>
        </div>
        <div v-else class="flex justify-around items-center my-4">
          <button class="mr-8 text-sm text-white bg-teal-500 border border-teal-500 py-1 px-4 rounded-lg hover:bg-white hover:text-teal-500" @click="showForm" >Modifier le mot de passe</button>
          <button class="text-sm text-white bg-teal-500 border border-teal-500 py-1 px-4 rounded-lg hover:bg-white hover:text-teal-500" >Supprimer le compte</button>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: "account",
    layout: "default",
    data() {
      return {
        passForm : false,
        newPassForm: {
          password: '',
          confPassword: '',
        }
      }
    },
    methods : {
      showForm() { this.passForm =true; },
      hideForm() { this.passForm =false; },
    }
    
    
}
</script>

<style>

</style>