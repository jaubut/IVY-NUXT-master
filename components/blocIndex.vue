<template>
  <div class="container-block" :style="'background-image: url(' + blocindex.fields.image[0].url + ')'">
    <div class="filtre" />
    <n-link :style="'color:' + blocindex.fields.couleur +';'" class="infos-center-v-two">
      <h1>{{ blocindex.fields.Titre }}</h1>
      <h3>{{ blocindex.fields.description }} <br> {{ blocindex.fields.sousdescription }}</h3>
    </n-link>
  </div>
</template>

<script>
export default {
  name: 'BlocIndex',
  props: ['blocindex'],
  computed: {
    imgsrcfinal () {
      // Return nothing for the default empty string
      if (!this.imgsrc) {
        return
      }

      const fileName = this.imgsrc

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    }
  }
}
</script>

<style scoped>
.container-block {
  transition: all .2s ease-in-out;
}
.photo-full {
  grid-area: 1/1/3/3;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: auto;
  transition: all .2s ease-in-out;
}
.filtre {
  grid-area: 1/1/2/2;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
.photo-logo {
  grid-area: 1/1/2/3;
  display: flex;
  align-self: center;
  height: fit-content;
  width: auto;
  z-index: 1;
  margin: auto;
  transition: all .2s ease-in-out;
  color: white;
}
.infos-center {
  grid-area: 1/1/2/2;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .2s ease-in-out;
}
.infos-center-v-two {
  grid-area: 1/1/2/2;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .2s ease-in-out;
}
.infos-center h3 {
  padding: 0 2.5rem;
}
.reserve {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  background-color: rgba(252, 218, 30, 0.5);
  margin: 0.75rem;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
}
.reverse:hover {
  background-color: rgba(252, 218, 30, 1);
}
@media screen and (max-width: 600px) {

}
</style>
