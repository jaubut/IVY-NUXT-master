<template>
  <div>
    <div class="full-width-v-two photo-event" :style="'background-image: url(' + pageevenement.fields.imageDeTete.fields.file.url + '?w=1200&h=1200' + ')'">
      <div class="filtre" />
      <div class="section-title white">
        <h2 class="">
          {{ pageevenement.fields.title }}<br>
        </h2>
        <a class="reserve" target="_blank" href="https://www.facebook.com/pg/ivyyoga.ca/events/?ref=page_internal">Mise à jour sur facebook</a>
      </div>
    </div>
    <h2 class="section-title margin-event">
      {{ pageevenement.fields.titleExposition }}<br>
      <span><h3>{{ pageevenement.fields.decouvreArtiste }} <a target="_blank" :href="pageevenement.fields.siteInternetDeLartiste"><strong>{{ pageevenement.fields.nomDeLartiste }}</strong></a></h3></span>
    </h2>
    <carousel class="" :per-page="1" :mouse-drag="true">
      <slide
        v-for="(image, index) in pageevenement.fields.oeuvresDeLartiste"
        :key="index"
        class="slideshow"
      >
        <img class="img-galerie" :src="image.fields.file.url" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import client from '@/plugins/contentful'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      title: 'Espace IVY - Événements',
      description: 'Créateur de Valeur et de Mouvement l’Espace IVY est une place unique en son genre! Il s’agit à la fois d’un studio de Yoga et d’une galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec. L’ambiance y est chaleureuse et décontractée ou l’on se plaît à faire du yoga décomplexé sur des mélodies accrocheuses et des rythmes entraînants. La plupart de nos classes sont ouvertes à tous les niveaux. Le studio de Yoga offre une tarification très accessible et marginale puisque aucun abonnement n’est offert. Zéro obligation, pas de prélèvement automatique, tu payes quand tu viens! Que ce soit pour bouger, lâcher prise, croire en toi, ralentir, te sentir plus ancré, plus souple, plus fort ou moins stressé, l’Espace IVY à Granby est une place où se retrouver afin de partager une pratique de Yoga entre amis, collègues ou en famille. Un lieu de rencontre et d’échange qui fait la promotion des Arts par des expositions et des événements. Bonne humeur à volonté et imperfections bienvenues!'
    }
  },
  asyncData () {
    return client
      .getEntries({
        content_type: 'pageEvenements'
      })
      .then((entries) => {
        return {
          pageevenement: entries.items[0]
        }
      })
      .catch(e => console.log(e))
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/img/studio/facebook-ivy.jpg' },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style scoped>
.container-facebook {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reserve {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  background-color: #FAC8A2;
  padding: 0.25rem 0.75rem;
  min-width: 10rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
}
.img-galerie {
  height: auto;
  max-width: 80vw;
}
.slideshow {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
}
.photo-event {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.margin-event {
  margin-top: 5rem;
}
</style>
