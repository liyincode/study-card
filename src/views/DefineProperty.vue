<template>
  <div>
    DefineProperty
  </div>
</template>

<script>
export default {
  name: "DefineProperty",

  setup() {
    let obj = {};
    let value;
    Object.defineProperty(obj, 'name', {
      get() {
        console.log('get 被调用');
        return value;
      },

      set(v) {
        console.log('set 被调用');
        value = 'world';
      }
    });

    obj.name = 'hello';
    console.log(obj.name);
  }
}
</script>

<style scoped>

</style>
