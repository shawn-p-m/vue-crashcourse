<template>
  <div class="other-page">
    <h1>Create a Ball</h1>
    <select v-model="selectedColor">
      <option value="cyan">Cyan</option>
      <option value="magenta">Magenta</option>
      <option value="coral">Coral</option>
      <option value="chocolate">Chocolate</option>
      <option value="cadetblue">Cadet Blue</option>
    </select>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      selectedColor: undefined
    };
  },
  methods: {
    submit() {
      EventService.createBall(this.selectedColor)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
