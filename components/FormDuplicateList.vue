<template>
  <div id="dialogDuplicateListForm" class="w-full flex justify-center items-center z-30 absolute">
      <button class="absolute top-4 right-84 text-xs text-teal-400 bg-white border border-teal-400 rounded-full px-2 ml-2 hover:text-white hover:bg-teal-400" @click="$emit('closeDuplicate')">Fermer</button>
      <form :model="duplicateListForm" class="flex flex-col justify-center items-center w-full mb-12 overflow-x-scroll whitespace-nowrap">
        <ConfirmDuplicateForm :annu="annuaire" @nextToCheck="$emit('nextToCheck')" @closeDuplicate="closeDuplicate" v-if="seeConfDuplicateDialog" />
        <FormListCheck @prevToCrypt="$emit('prevToConfDuplicate')" @nextToReturn="$emit('nextToReturn')" v-if="seeCheckDialog" :listForm="duplicateListForm" :annu="annuaire"  />
        <FormListReturn @prevToCheck="$emit('prevToCheck')" @createList="$emit('onSubmit')" v-if="seeReturnDialog" :listForm="duplicateListForm" :annu="annuaire"  />
      </form>
    </div>
</template>

<script>
import ConfirmDuplicateForm from './ConfDuplicateForm.vue'
import FormListCheck from './FormListCheck.vue';
import FormListReturn from './FormListReturn.vue';
export default {
    data() {
        return {
            
        };
    },
    props: ["annuaire", "seeConfDuplicateDialog", "seeCheckDialog", "seeReturnDialog"],
    components: { ConfirmDuplicateForm, FormListCheck, FormListReturn }
}
</script>

<style>

</style>