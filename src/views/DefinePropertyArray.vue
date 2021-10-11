<template>
  <div/>
</template>

<script>
export default {
  name: "DefinePropertyArray",

  setup() {
    let arr = [1, 2, 3];
    arr.forEach((item, index) => {
      Object.defineProperty(arr, index, {
        get() {
          console.log('数组被 getter 拦截', index);
          return item;
        },

        set(v) {
          console.log('数组被 setter 拦截', index);
        }
      });
    });

    // arr[1] = 4;
    // console.log(arr[4])
    // arr.push(4);
    arr.unshift(0);
    // arr.splice(1, 1);
  }
}
</script>

<style scoped>

</style>
