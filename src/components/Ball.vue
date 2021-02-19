<template>
  <div class="ball" :style="{ color: ball.color }">
    <h2>Ball #{{ indexOfBall }}</h2>

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
    },
    indexOfBall: {
      type: Number
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
      if (this.ball.count > 1) {
        this.ball.count--;
        EventService.minusBall(this.ball.id, this.ball.count).catch(err => {
          console.log(err);
        });
      } else {
        EventService.killBall(this.ball.id);
        this.$emit("killBall", this.ball.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ball {
  padding: 3rem;
  flex-direction: column;
  display: flex;
  margin: 1rem auto;
  width: 150px;
  background-color: lightgray;
  border-radius: 150px;
  border: 1px solid black;
}

button {
  width: 30px;
  margin: 0.5rem;
  border-radius: 5px;
}
</style>
