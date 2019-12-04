<template>
   <button open-type="getUserInfo" @getuserinfo="bindgetuserinfo">用户授权</button>
</template>

<script>
export default {
  methods: {
    bindgetuserinfo(e) {
      console.dir(e);      
    }
  }
};
</script>

<style>

</style>