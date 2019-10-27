<template>
  <div :style="'color:' + textcolor +'; background:' + backcolor +';'">
    <div class="container-price">
      <h2>{{ title }}</h2>
      <h4>{{ price }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    title: {
      type: String,
      default: 'IVY'
    },
    price: {
      type: String,
      default: '15$'
    },
    description: {
      type: String,
      default: 'Espace IVY'
    },
    textcolor: {
      type: String,
      default: 'black'
    },
    backcolor: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.prices {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  width: 20vw;
  min-height: 15vh;
  padding: 0.75rem;
  margin: 0.5rem;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}
.prices-v-two {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  min-width: 20vw;
  padding: 0.75rem;
  margin: 0.75rem;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
}
.prices-v-three {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  max-width: 20vw;
  padding: 0.75rem;
  margin: 0.75rem;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
}
h2 {
    font-size: 1rem;
    margin: 0;
    padding: 0.75rem 0 0.25rem 0;
}
h4 {
  font-size: 1.5rem;
  margin: 0;
}
p {
  font-size: small;
}
.container-price {
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    align-content: flex-start;
}
.logo-descriptif {
  height: 3rem;
  margin: 0.1rem;
}
@media screen and (max-width: 600px) {
    .prices, .prices-v-two, .prices-v-three {
      width: 70vw;
      justify-content: center;
    }
    h2 {
      font-size: large;
    }
    h4 {
      font-size: x-large;
    }
}
</style>
