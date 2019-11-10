<template>
  <div>
    <div class="full-width-v-two photo-yoga">
      <div class="section-title">
        <h2 class="">
          {{ pageyoga.fields.titre }}
        </h2>
      </div>
    </div>
    <div class="container-grid-row">
      <fullWidth
        class="demi-width-v-two"
        title=""
        description=""
        textcolor="white"
        link=""
        :imgsrc="pageyoga.fields.blocPhoto.fields.imgsrc.fields.file.url"
      />
      <div class="demi-width-v-two">
        <div class="infos-center-v-two descriptif-yoga" v-html="$md.render(pageyoga.fields.descriptionYoga)" />
      </div>
    </div>
    <h2 class="section-title">
      Description des classes
    </h2>
    <div class="demi-width-descriptifs">
      <descriptifs
        v-for="(descriptif, index) in pageyoga.fields.descriptionClasses"
        :key="index"
        :title="descriptif.fields.titre"
        :description="descriptif.fields.description"
      />
    </div>
    <h2 class="section-title">
      Liste de prix </br><span class="taxes">  Tx in</span>
    </h2>
    <div class="container-prix">
      <prices
        v-for="(price, index) in pageyoga.fields.prix"
        :key="index"
        :style="'color:' + price.fields.textColor +'; background:' + price.fields.backgroundColor +';'"
        class="prices"
        :title="price.fields.title"
        :price="price.fields.prix"
        backcolor="white"
        :description="price.fields.description"
      />
    </div>
    <div class="section-title">
      <h2 style="padding: 0; margin: 0;">
        {{ pageyoga.fields.horaire }}
      </h2>
      <h3>Mise à jour sur <a target="_blank" href="https://mindbody.io/fitness/studios/ivy-espace-yoga-arts-communaute">Mindbody</a>. Sujet à changement sans préavis.</h3>
    </div>
    <div class="container-column">
      <img class="image" :src="pageyoga.fields.horaireImage.fields.file.url" alt="">
    </div>
    <div class="container-column">
      <h2 ref="first-page" class="section-title">
        Réserve ta classe sur <a target="_blank" href="https://mindbody.io/fitness/studios/ivy-espace-yoga-arts-communaute">Mindbody</a>
      </h2>
      <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="bd11686917a9" data-widget-version="1" />
    </div>
  </div>
</template>

<script>
import client from '@/plugins/contentful'
import fullWidth from '~/components/fullWidthBloc.vue'
import descriptifs from '~/components/descriptifs.vue'
import prices from '~/components/prix.vue'

export default {
  components: {
    fullWidth,
    descriptifs,
    prices
  },
  data () {
    return {
      title: 'Espace IVY - Yoga',
      description: 'Créateur de Valeur et de Mouvement l’Espace IVY est une place unique en son genre! Il s’agit à la fois d’un studio de Yoga et d’une galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec. L’ambiance y est chaleureuse et décontractée ou l’on se plaît à faire du yoga décomplexé sur des mélodies accrocheuses et des rythmes entraînants. La plupart de nos classes sont ouvertes à tous les niveaux. Le studio de Yoga offre une tarification très accessible et marginale puisque aucun abonnement n’est offert. Zéro obligation, pas de prélèvement automatique, tu payes quand tu viens! Que ce soit pour bouger, lâcher prise, croire en toi, ralentir, te sentir plus ancré, plus souple, plus fort ou moins stressé, l’Espace IVY à Granby est une place où se retrouver afin de partager une pratique de Yoga entre amis, collègues ou en famille. Un lieu de rencontre et d’échange qui fait la promotion des Arts par des expositions et des événements. Bonne humeur à volonté et imperfections bienvenues!'

    }
  },
  asyncData () {
    return client
      .getEntries({
        content_type: 'pageYoga'
      })
      .then((entries) => {
        return {
          pageyoga: entries.items[0]
        }
      })
      .catch(e => console.log(e))
  },
  mounted () {
    if (!window.healcodeWidget) {
      const script = document.createElement('script')
      script.onload = this.onScriptLoaded
      script.type = 'text/javascript'
      script.src = 'https://widgets.healcode.com/javascripts/healcode.js'
      document.head.appendChild(script)
    } else {
      this.onScriptLoaded()
    }
  },
  methods: {
    onScriptLoaded (event = null) {
      if (event) {
        console.log('Was added')
      } else {
        console.log('Already existed')
      }
      console.log(window.healCode)
      window.healcodeWidget('h1').append(` <span>(CDN script has loaded)</span>`)
    },
    scrollMeTo (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop

      window.scrollTo(0, top)
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:image', property: 'og:image', content: '/img/studio/facebook-ivy.jpg' },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style scoped>
.reserve {
  grid-template: 1/1/2/2;
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
.taxes {
  font-size: 2rem;
  color: #FCDA1E;
}
.photo-yoga {
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/img/yoga/flow-4.jpg);
}
.descriptif-yoga {
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0.1rem;
}
@media screen and (max-width: 600px) {
  .taxes {
    font-size: small;
  }
}
</style>
