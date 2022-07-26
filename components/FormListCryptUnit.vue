<template>
  <div class="flex justify-cneter items-center mb-4 w-11/12">
              <span class="border border-slate-500 w-40 rounded-l-lg border-r-0 bg-white text-slate-500 text-center" v-if="!onRename">{{ name }}</span>
              <input type="text" class="border border-slate-500 w-40 rounded-l-lg border-r-0 bg-white text-slate-500 text-center placeholder:pl-2 outline-0" placeholder="..." v-else>
              <button class="border border-teal-400 w-44 border-r-0 bg-white text-teal-400 text-center hover:text-white hover:bg-teal-200" @click.prevent="validCrypt()" v-if="!onCrypt">Encoder</button>
              <span class="border border-teal-400 w-44 border-r-0 bg-teal-400 text-white text-center" @click.prevent="hideCrypt()" v-else>Crypté par ValidX</span>
              <button class="border border-sky-400 w-32 border-r-0 bg-white text-sky-400 text-center hover:text-white hover:bg-sky-200" @click.prevent="showInput()" v-if="!onRename">Renommer</button>
              <span class="border border-sky-400 w-32 border-r-0 bg-sky-400 text-sky-white text-center" @click.prevent="hideInput()" v-else>Renommé</span>
              <button class="border border-rose-600 w-28 rounded-r-lg bg-white text-rose-600 text-center hover:text-white hover:bg-rose-400" v-if="!onDelete" @click.prevent="showDeleted()">Supprimer</button>
              <span class="border border-rose-600 w-28 rounded-r-lg bg-rose-600 text-white text-center" @click.prevent="hideDeleted()" v-else>Supprimé</span>
            </div>
</template>

<script>
export default {
    props: ["name"],
     data() {
        return {
            onRename: false,
            onCrypt: false,
            onDelete: false,
        }
    },
    methods: {
        showInput() {
            this.onRename = true;
        },
        validCrypt() {
            this.onCrypt = true;
        },
        showDeleted() {
            this.onDelete = true;
        },
        hideInput() {
            this.onRename = false;
        },
        hideCrypt() {
            this.onCrypt = false;
        },
        hideDeleted() {
            this.onDelete = false;
        },
    },
}
</script>

<style>

</style>