<template>
  <div class="ball" :style="{ color: ball.color }">
    <h2>Ball #{{ ball.id }}</h2>

    <p>How many Balls? {{ ball.count }}</p>
    <div>
      <button @click="minusBall">-</button>
      <button @click="addBall">+</button>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: {
    ball: {
      type: Object
    }
  },
  methods: {
    addBall() {
      this.ball.count++;
      EventService.addBall(this.ball.id, this.ball.count).catch(err => {
        console.log(err);
      });
    },
    minusBall() {
      if (this.ball.count > 0) {
        this.ball.count--;
        EventService.minusBall(this.ball.id, this.ball.count).catch(err => {
          console.log(err);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ball {
  padding: 2rem;
  flex-direction: column;
  display: flex;
  margin: 1rem auto;
  width: fit-content;
  background-color: lightgray;
  border-radius: 100px;
}

button {
  width: 30px;
  margin: 0.5rem;
  border-radius: 5px;
}
</style>
