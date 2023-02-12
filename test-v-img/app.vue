<template>
  <div>
    <p>Dynamics components</p>
    <div v-for="(item, k) in myArray" :key="k">
      <component :is="item.component" :media="item.image" :name="item.name" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Image1 from "./components/Image1.vue";
import Image2 from "./components/Image2.vue";
import Image3 from "./components/Image3.vue";
import Image4 from "./components/Image4.vue";

export default defineComponent({
  components: {
    Image1,
    Image2,
    Image3,
    Image4,
  },
  setup() {},
  data: () => ({
    myArray: [],
  }),
  created() {
    this.myArray = [
      {
        image:
          "https://d3k0lk57n8zw9s.cloudfront.net/5ec487dd-ee5a-45e7-9860-7ee6e774acf2_1200.jpg",
        name: "one",
        component: "Image1",
      },
      {
        name: "Two",
        image:
          "https://d3k0lk57n8zw9s.cloudfront.net/3dcba246-7731-476b-b427-ef244f70f80f_1200.jpg",
        component: "Image2",
      },
      {
        name: "Three",
        image:
          "https://d3k0lk57n8zw9s.cloudfront.net/480905e7-88c4-464b-bf47-8b6d8c361904_350.jpg",
        component: "Image2",
      },
      {
        name: "Four",
        image:
          "https://d3k0lk57n8zw9s.cloudfront.net/ab66109a-6762-472a-b412-b9e5459812df_1200.jpg",
        component: "Image4",
      },
    ];
  },
});
</script>
<style scoped>
.box {
  background-color: black;
  align-items: center;
  justify-content: center;
  display: block;
}
</style>
