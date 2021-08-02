<template>
  <div class="container">
    <card
      img-url="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      title="Canyons"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </div>
</template>

<script>
import Card from "@/components/card/index.vue";

export default {
  name: "Home",
  components: {Card}
}
</script>

<style scoped lang="less">
.container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #BCAAA4;
}
</style>
