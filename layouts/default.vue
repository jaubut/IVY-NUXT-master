<template>
  <div>
    <div id="fb-root" />
    <header>
      <menuIvy />
    </header>
    <nuxt />
    <footerIvy />
  </div>
</template>

<script>
import menuIvy from '~/components/menu-ivy.vue'
import footerIvy from '~/components/footer-ivy.vue'

export default {
  components: {
    menuIvy,
    footerIvy
  }
}
</script>

<style>
html, body {
    font-family: 'Barlow', sans-serif;
    width: 100%;
    min-height: auto;
    border: none;
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
}
div {
    width: auto;
    min-height: 25px;
}
h1 {
    font-weight: 400;
    font-size: 4rem;
    margin: 0.1rem;
}
h2 {
    font-weight: 400;
    font-size: 3rem;
    padding: 1rem;
}
h3 {
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0.1rem;
}
a {
    text-decoration: none;
    color: black;
}
a:hover {
    color: #FCDA1E;
}
.white {
    color: white;
}
.yellow {
    color: #FCDA1E;
}
.full-width {
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    height: auto;
    max-height: 45vh;
    overflow: hidden;
    margin: 0 2rem 0.75rem 2rem;

}
.full-width-v-two {
    position: relative;
    display: grid;
    grid-template: 100% / 100%;
    justify-content: center;
    align-items: center;
    min-height: 45vh;
    max-height: 45vh;
    margin: 0 2rem 0.75rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.demi-width {
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    width: 40%;
    height: auto;
    max-height: 45vh;
    overflow: hidden;
    margin: 0 2rem 4rem 2rem;
}
.demi-width-v-two {
    display: grid;
    grid-template: 100% / 100%;
    justify-content: center;
    min-height: 45vh;
    margin: 0 0rem 0.75rem 0rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.demi-width-descriptifs {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    width: auto;
    height: auto;
    overflow: hidden;
    padding: 0 2rem 4rem 2rem;
}
.infos-center-v-two {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .2s ease-in-out;
  margin: 2rem;
}
.container-prix {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    height: auto;
    overflow: hidden;
    background: white;
    padding: 2rem 2rem 2rem 2rem;
}
.full-width-photos {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: auto;
    overflow: hidden;
    margin: 0 2rem 4rem 2rem;
}
.container {
    width: 100%;
}
.container-column {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.container-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem 0rem 2rem;
}
.container-grid-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.75rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem 0rem 2rem;
}
.section-title {
    grid-area: 1/1/2/2;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem 0;
    text-align: center;
}
.filtre {
  grid-area: 1/1/2/2;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
.image {
    width: 80vw;
    height: auto;
    margin: auto;
}
.text {
    margin: 0 2rem 4rem 2rem;
    width: 80vw;
    text-align: center;
}
@media screen and (max-width: 600px) {
    .demi-width {
        width: auto;
        max-height: 25vh;
        margin: 1rem;
    }
    .full-width {
        width: auto;
        max-height: 25vh;
        margin: 1rem;
    }
    .demi-width-v-two {
        width: auto;
        margin: 0;
    }
    .container-prix {
        flex-flow: column;
        align-items: center;
    }
    .container-grid-row {
        grid-template-columns: 1fr;
    }
    h1 {
        font-size: x-large;
    }
    h2 {
        font-size: x-large;
    }
    h3 {
        font-size: medium;
    }
    p {
        font-size: small
    }
    .demi-width-descriptifs {
        width: auto;
    }
}
</style>
