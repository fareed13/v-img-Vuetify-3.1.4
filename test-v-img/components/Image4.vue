<template>
  <v-row justify="center">
    <v-col cols="4">
      <div class="box">
        <p class="text-white">{{ name }}</p>
        <v-img
          class="bg-white align-center"
          width="300"
          :src="media"
        ></v-img>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: ["media", "name"],
  data: () => ({}),
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

