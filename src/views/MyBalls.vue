<template>
  <div class="home">
    <Ball
      @killBall="killBall"
      v-for="ball in balls"
      :key="ball.id"
      :ball="ball"
      :indexOfBall="balls.indexOf(ball) + 1"
    />
  </div>
</template>

<script>
import Ball from "@/components/Ball.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "MyBalls",
  components: { Ball },
  methods: {
    killBall(id) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        if (ball.id === id) {
          this.balls.splice(i, 1);
        }
      }
    }
  },
  data() {
    return {
      balls: []
    };
  },
  created() {
    EventService.getBalls()
      .then(result => {
        console.log(result.data);
        this.balls = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
}
</style>
