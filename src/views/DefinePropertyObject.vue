<template>
  <div />
</template>

<script>
export default {
  name: "DefinePropertyObject",

  setup() {
    let obj = {};
    let value;

    Object.defineProperty(obj, 'hobby', {
      get() {
        console.log('get 被调用');
        return value;
      },

      set(v) {
        console.log('set 被调用');
        value = 'world';
      }
    });

    obj.age = 18;

  }
}
</script>

<style scoped>

</style>
