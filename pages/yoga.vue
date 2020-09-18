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
        style="text-align:center;"
      />
    </div>
    <h2 class="section-title">
      Liste de prix <!--<br><span class="taxes">  Tx in</span>-->
    </h2>
    <div class="button-group">
      <a class="button-virtuel a active" @click="prix = true">En Studio</a>
      <a class="button-virtuel b" @click="prix = false">Virtuel</a>
    </div>
    <div v-if="prix === true" class="container-prix">
      <!--<h3>Rejoins-nous sur le <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank"><span style="text-decoration:underline;">groupe Facebook privé: <span style="font-weight:bold;">Ivy Yoga - Cours en Ligne</span></span></a> pour avoir accès à toutes les classes de yoga.</h3>
      <br>
      -->
      <prices
        v-for="(price, index) in pageyoga.fields.prix"
        :key="index"
        :style="'color:' + price.fields.textColor +'; background:' + price.fields.backgroundColor +';'"
        class="prices"
        :title="price.fields.title"
        :price="price.fields.prix"
        :reduction="price.fields.reduction"
        backcolor="white"
        :description="price.fields.description"
        :link="price.fields.liens"
      />
    </div>
    <div v-else class="container-prix">
      <div class="prices container-price">
        <h2>27$ <span class="prix-b">30 $</span> le mois</h2>
        <p>Accède à toutes les classes en ligne sur le <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank"><span>groupe Facebook privé: Ivy Yoga - Cours en Ligne</span></a>.</p>
        <a href="https://ivy-yoga.us5.list-manage.com/track/click?u=969c1f8068212429343512f19&id=37f1515db1&e=2e85ef66bd" target="_blank" class="button-virtuel cta-prix active">Achetez</a>
      </div>
    </div>
    <!--
    <div class="section-title">
      <h2 style="padding: 0; margin: 0;">
        {{ pageyoga.fields.horaire }}
      </h2>
      <h3>Mise à jour sur <a target="_blank" href="https://mindbody.io/fitness/studios/ivy-espace-yoga-arts-communaute">Mindbody</a>. Sujet à changement sans préavis.</h3>
    </div>
    <div class="container-column">
      <img class="image" :src="pageyoga.fields.horaireImage.fields.file.url" alt="">
    </div>
    <div class="section-title">
      <h2 style="padding: 0; margin: 0;">
        {{ pageyoga.fields.horaireDapresDesFetes }}
      </h2>
      <h3>Mise à jour sur <a target="_blank" href="https://mindbody.io/fitness/studios/ivy-espace-yoga-arts-communaute">Mindbody</a>. Sujet à changement sans préavis.</h3>
    </div>
    <div class="container-column">
      <img class="image" :src="pageyoga.fields.horaireImageDapresDesFete.fields.file.url" alt="">
    </div>
    <div class="section-title">
      <h2 style="padding: 0; margin: 0;">
        {{ pageyoga.fields.horaireDesFetes }}
      </h2>
      <h3>Mise à jour sur <a target="_blank" href="https://mindbody.io/fitness/studios/ivy-espace-yoga-arts-communaute">Mindbody</a>. Sujet à changement sans préavis.</h3>
    </div>
    -->
    <div class="container-column">
      <img class="image" :src="pageyoga.fields.horaireImageDesFetes.fields.file.url" alt="">
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
      description: 'Créateur de Valeur et de Mouvement l’Espace IVY est une place unique en son genre! Il s’agit à la fois d’un studio de Yoga et d’une galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec. L’ambiance y est chaleureuse et décontractée ou l’on se plaît à faire du yoga décomplexé sur des mélodies accrocheuses et des rythmes entraînants. La plupart de nos classes sont ouvertes à tous les niveaux. Le studio de Yoga offre une tarification très accessible et marginale puisque aucun abonnement n’est offert. Zéro obligation, pas de prélèvement automatique, tu payes quand tu viens! Que ce soit pour bouger, lâcher prise, croire en toi, ralentir, te sentir plus ancré, plus souple, plus fort ou moins stressé, l’Espace IVY à Granby est une place où se retrouver afin de partager une pratique de Yoga entre amis, collègues ou en famille. Un lieu de rencontre et d’échange qui fait la promotion des Arts par des expositions et des événements. Bonne humeur à volonté et imperfections bienvenues!',
      prix: true
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
.prix-b {
  text-decoration: line-through;
  color: rgb(114, 114, 114);
}
.reserve {
  grid-template: 1/1/2/2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  background-color: #FAC8A2;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
}
.taxes {
  font-size: 2rem;
  color: #FAC8A2;
}
.button-achat {
  background: #FAC8A2;
  color: black;
  padding: 5px 25px;
  border-radius: 15px;
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
.button-group {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
  width: 100%;
}
.button-virtuel {
  padding: 15px;
  width: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.5s ease;
  background: white;
  font-size: 1.5rem;
}
.button-virtuel:hover {
  background: #d8ad8c;
  color: black;
}
.active {
  background: #FAC8A2;
}
.active a:hover {
  color: black;
  text-decoration: underline;
}
.a {
  border-radius: 5px 0 0 5px;
}
.b {
  border-radius: 0 5px 5px 0;
}
.cta-prix {
  border-radius: 5px;
}
.prices {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  text-align: center;
  width: 20vw;
  height: auto;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}
.prices p {
  padding: 10vh 0;
}
.middle {
  padding: 12.5vh 0 !important;
}
.prices h2 {
  padding: 0;
  margin: 0;
  font-size: xx-large;
}
@media screen and (max-width: 600px) {
  .taxes {
    font-size: small;
  }
  .button-virtuel {
    font-size: medium;
  }
  .prices {
    width: 70vw;
    height: auto;
    justify-content: center;
  }
}
</style>
