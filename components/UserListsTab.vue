<template>
  <div class="flex flex-col justify-start items-start w-full pt-2">
    <UserListsHead />
    <div class="w-full" v-for="access in annu.accessArray" :key="access.id">
        <UserListsLine :access="access" />
    </div>
    
  </div>
</template>

<script>
import UserListsHead from './UserListsHead.vue';
import UserListsLine from './UserListsLine.vue';

export default {
    props: ["annu"],
    components: { UserListsHead, UserListsLine }
}
</script>

<style>

</style>