<template>
<div>
    <div class="w-full flex flex-row justify-between items-start  pt-2 pb-4 bg-teal-500">
    <div id="company" class="flex flex-row justify-start items-start ">
      <!-- <div id="company-logo" class="w-80 border border-whiteTrans h-20 overflow-hidden rounded-2xl shadow mt-2 ml-16">
        <img
          src="~assets/img/ketch_logo.png"
          alt="logo"
          class="w-20 mt-1"
        />
        
      </div> -->
      <div id="company-title" class="flex justify-start items-start mt-1 ml-4 z-10 w-36 border border-white h-16 overflow-hidden pt-2 pl-8" >
        <span class="text-4xl italic font-hand z-20 text-white mt-2">
          Valid 
        </span>
        <span class="text-7xl mr-8 font-bold font-display text-gray-900 -ml-5 -mt-1">
            X
        </span>
      </div>
      <h1 class="italic font-hand text-white text-3xl mt-8 ml-12">L'échange de données sécurisé</h1>
    </div>
    <div id="user-menu" class="pr-4 pt-8 mr-12 -mt-2">
        <ul class="flex justify-between items-center">
          <li v-if="onSignup" class="w-32 mr-6 rounded-full py-1 text-center capitalize text-md border border-teal-300 text-teal-300">
            inscription
          </li>
          <li v-if="!onSignup" @click="$emit('signup')" class="w-32 mr-6 rounded-full py-1 text-center capitalize text-md border border-white text-white cursor-pointer hover:bg-white hover:text-teal-700 hover:border-teal-700">
            inscription
          </li>
          <li v-if="onLogin" class="w-32 rounded-full py-1 text-center capitalize text-md border border-teal-300 text-teal-300">
            connexion
          </li>
          <li v-if="!onLogin" @click="$emit('login')"
            class="w-32 rounded-full py-1 text-center capitalize text-md border border-white text-white cursor-pointer hover:bg-white hover:text-teal-700 hover:border-teal-700"
          >
            connexion
          </li>
        </ul>
      </div>
    </div>
     <div id="welcome" class="flex justify-end items-center pb-0.5 border-b border-teal-200 pr-12 h-6">
        
      </div>

 </div>

    
</template>

<script >
export default {
    props: ["onSignup", "onLogin"]
}
</script>

<style>

</style>