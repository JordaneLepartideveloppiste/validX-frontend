<template>
<div>
  <TopBarTitle :onLogin="onLogin" :onSignup="onSignup" @login="showLogin" @signup="showSignup" />
<div id="app" class="flex justify-center items-center">
  <div v-if="onLogin" id="login" class="flex flex-col justify-start items-center w-1/3 mt-8 border border-teal-400 rounded-lg ">
    <form :model="loginForm" class="flex flex-col justify-start items-center py-6">
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="email" placeholder="Votre email" v-model="loginForm.email" >
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="password" placeholder="Votre mot de passe" v-model="loginForm.password" >
      <p class="text-pink-800" v-if="loginForm.message">{{loginForm.message}}</p>
      <p class="text-white" v-else>div false</p>
      <button class="w-44 placeholder:text-center p-1 my-2 rounded-lg border border-teal-500 text-white bg-teal-500 hover:bg-white hover:text-teal-500">Se Connecter</button>
    </form>
  </div>
  <div v-if="onSignup" id="signup" class="flex flex-col justify-start items-center w-1/3 mt-8 border border-teal-400 rounded-lg ">
    <form :model="signupForm" class="flex flex-col justify-start items-center py-6">
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="email" placeholder="Indiquez votre email" v-model="signupForm.email" >
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="password" placeholder="Choisissez un mot de passe" v-model="signupForm.password" >
      <input class="w-80 placeholder:text-center p-1 my-2 rounded border outline-teal-400 text-center" type="password" placeholder="Confirmez le mot de passe" v-model="signupForm.confPassword" >
      <p class="color-danger text-small" v-if="signupForm.message">{{signupForm.message}}</p>
      <p class="text-white" v-else>div false</p>
      <button class="w-44 placeholder:text-center p-1 my-2 rounded-lg border border-teal-500 text-white bg-teal-500 hover:bg-white hover:text-teal-500">S'Inscrire</button>
      <p class="text-xs font-thin">Vous avez déjà un compte ?</p>
      <p class="text-xs text-teal-500 underline cursor-pointer" @click="showLogin" >Connectez-vous ici.</p>
    </form>
  </div>
  </div>
    
   </div> 
      
  
  

</template>

<script lang="ts">
import Vue from 'vue'
import TopBarTitle from '~/components/TopBarTitle.vue'


export default Vue.extend({
    name: "auth",
    layout: "empty",
    data() {
      return {
        onLogin : false,
        onSignup : true,
        loginForm: {
          email: '',
          password: '',
          message: ''
        },
        signupForm: {
          email: '',
          password: '',
          confPassword: '',
          message: ''
        },
        rules: {
          email: [
            {required: true, message: 'Veuillez renseigner une adresse e-mail', trigger: 'blur'},
            {type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change']}
          ],
          password: [
            {required: true, message: 'Veuillez renseigner un mot de passe', trigger: 'blur'}
          ]
        }
      }
    },
    methods : {
      showLogin() { this.onSignup = false; this.onLogin = true; },
      showSignup() { this.onSignup = true; this.onLogin = false; },
    },
    components: { TopBarTitle }
})
</script>
