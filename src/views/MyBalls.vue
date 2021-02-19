<template>
  <div class="home">
    <Ball v-for="ball in balls" :key="ball.id" :ball="ball" />
  </div>
</template>

<script>
import Ball from "@/components/Ball.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "MyBalls",
  components: { Ball },
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
