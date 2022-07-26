<template>
  <div id="navbar" class="w-40 h-screen border-teal-200 border-r -mr-4">
      <ul id="appMenu" class="flex flex-col justify-end items-center pb-0.5">
        <nuxt-link to="/user-lists">
            <li class="w-48 z-20 text-sm flex-1 text-center uppercase py-4 pl-4 bg-white mb-4 border border-l-0 mt-12 rounded-r border-teal-500 text-teal-500 font-bold">
            Mes annuaires
            </li>
        </nuxt-link>
        <nuxt-link to="/user-account">
            <li class="w-48 z-20 text-sm flex-1 text-center uppercase py-4 pl-4 bg-white mb-4 border border-l-0 rounded-r border-teal-500 text-teal-500 font-bold">
            Mon compte
            </li> 
        </nuxt-link>
              
      </ul>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>