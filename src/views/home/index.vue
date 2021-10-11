<template>
  <div class="container">
    <card
      v-for="item in pageList"
      :key="item.pagName"
      img-url="https://static.renjianzhide.com/photo-1479660656269-197ebb83b540_1633923561698.jpg"
      :title="item.title"
      :content="item.content"
      @click="toPage(item.pageName)"
    />
  </div>
</template>

<script>
import Card from "/@/components/card/index.vue";
import {useRouter} from "vue-router";
import {ref} from 'vue';

export default {
  name: "Home",
  components: {Card},

  setup() {
    const router = useRouter();

    const toPage = (pageName) => {
      console.log(pageName)
      router.push({
        name: pageName
      })
    };

    const pageList = ref([]);
    pageList.value = [
      {
        title: 'DefineProperty',
        content: '响应式原理',
        pageName: 'defineProperty'
      },
      {
        title: 'DefinePropertyArray',
        content: 'vue 中数组响应式问题',
        pageName: 'definePropertyArray'
      },
      {
        title: 'DefinePropertyObject',
        content: 'vue 中对象响应式问题',
        pageName: 'definePropertyObject'
      },
    ];
    console.log(pageList)

    return {
      pageList,
      toPage
    }
  }
}
</script>

<style scoped lang="less">
.container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #BCAAA4;
}
</style>
