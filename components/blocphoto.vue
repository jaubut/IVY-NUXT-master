<template>
  <div class="container-photos">
    <div class="photos photo-un" :style="'background-image: url(' + imgsrcfinalun + '?nf_resize=fit&w=1920)'" />
    <div class="photos photo-deux" :style="'background-image: url(' + imgsrcfinaldeux + '?nf_resize=fit&w=1920)'" />
    <div class="photos photo-trois" :style="'background-image: url(' + imgsrcfinaltrois + '?nf_resize=fit&w=1920)'" />
    <div class="photos photo-quatre" :style="'background-image: url(' + imgsrcfinalquatre + '?nf_resize=fit&w=1920)'" />
    <div class="photos photo-cinq" :style="'background-image: url(' + imgsrcfinalcinq + '?nf_resize=fit&w=1920)'" />
  </div>
</template>

<script>
export default {
  props: {
    imgsrcun: {
      type: String,
      default: null
    },
    imgsrcdeux: {
      type: String,
      default: null
    },
    imgsrctrois: {
      type: String,
      default: null
    },
    imgsrcquatre: {
      type: String,
      default: null
    },
    imgsrccinq: {
      type: String,
      default: null
    }
  },
  computed: {
    imgsrcfinalun () {
      // Return nothing for the default empty string
      if (!this.imgsrcun) {
        return
      }

      const fileName = this.imgsrcun

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    },
    imgsrcfinaldeux () {
      // Return nothing for the default empty string
      if (!this.imgsrcdeux) {
        return
      }

      const fileName = this.imgsrcdeux

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    },
    imgsrcfinaltrois () {
      // Return nothing for the default empty string
      if (!this.imgsrctrois) {
        return
      }

      const fileName = this.imgsrctrois

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    },
    imgsrcfinalquatre () {
      // Return nothing for the default empty string
      if (!this.imgsrcquatre) {
        return
      }

      const fileName = this.imgsrcquatre

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    },
    imgsrcfinalcinq () {
      // Return nothing for the default empty string
      if (!this.imgsrccinq) {
        return
      }

      const fileName = this.imgsrccinq

      // Request the image as a webpack module by using `require`
      return require(`../assets/${fileName}`)
    }
  }
}
</script>

<style scoped>
.container-photos {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
    grid-gap: 0.75rem;
    margin: 0 2rem 2rem 2rem;
    min-height: 35vh;
}
.photos {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.photo-un {
    grid-area: 1/1/3/2;
}
.photo-deux {
    grid-area: 1/2/2/4;
}
.photo-trois {
    grid-area: 2/2/3/3;
}
.photo-quatre {
    grid-area: 3/1/4/3;
}
.photo-cinq {
    grid-area: 2/3/4/4;
}
</style>
