<template>
  <div :style="'color:' + textcolor +'; background:' + backcolor +'; border-color:' + bordercolor + ';'">
    <div class="container-price">
      <h2>{{ title }}</h2>
      <h4>{{ price }}</h4>
      <p>{{ description }}</p>
      <a class="reserve" href="mailto:espace@ivy-yoga.ca">{{ cta }}</a>
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
    },
    bordercolor: {
      type: String,
      default: ''
    },
    cta: {
      type: String,
      default: null
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
  min-height: 25vh;
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
    margin: 0;
    padding: 0.75rem 0 0.25rem 0;
}
h4 {
  font-size: 3rem;
  margin: 0;
}
.container-price {
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    align-content: flex-start;
}
.reserve {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  background-color: #FCDA1E;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 600px) {
    .prices, .prices-v-two, .prices-v-three {
      width: auto;
      min-height: auto;
    }
    h2 {
      font-size: large;
    }
    h4 {
      font-size: x-large;
    }
}
</style>
