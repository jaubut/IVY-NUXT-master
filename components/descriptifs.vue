<template>
  <div :style="'color:' + textcolor +';'" class="descriptifs">
    <div class="logo-container">
      <template v-if="logoname !== null">
        <img class="logo-descriptif" :src="logonamefinal" alt="">
      </template>
      <h3>{{ title }}</h3>
    </div>
    <p v-if="description !== null">
      {{ description }}
    </p>
    <ul v-if="descriptionlist !== null">
      <li v-for="item in descriptionlist" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    title: {
      type: String,
      default: null
    },
    logoname: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    descriptionlist: {
      type: Array,
      default: null,
      require: true
    },
    textcolor: {
      type: String,
      default: 'black'
    },
    sousdescription: {
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
  },
  computed: {
    logonamefinal () {
      // Return nothing for the default empty string
      if (!this.logoname) {
        return
      }

      const fileName = this.logoname

      // Request the image as a webpack module by using `require`
      return require(`../assets/img/logo/${fileName}.svg`)
    }
  }
}
</script>

<style scoped>
.descriptifs {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: justify;
  max-width: 20vw;
  padding: 0.75rem;
}
.logo-descriptif {
  height: 2rem;
  margin: 0.1rem;
  padding-right: 25px;
}
.logo-container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
ul {
  text-align: left;
}
h3 {
  text-align: left;
  font-weight: bolder;
}
@media screen and (max-width: 600px) {
    .descriptifs {
      max-width: 80vw;
    }
}
</style>
