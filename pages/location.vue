<template>
  <div>
    <fullWidth
      class="full-width-v-two"
      title=""
      description=""
      textcolor="white"
      link=""
      :imgsrc="pagelocation.fields.blocEnTete.fields.imgsrc.fields.file.url"
    />
    <photos
      :imgsrcun="pagelocation.fields.image1.fields.file.url"
      :imgsrcdeux="pagelocation.fields.image2.fields.file.url"
      :imgsrctrois="pagelocation.fields.image3.fields.file.url"
      :imgsrcquatre="pagelocation.fields.image4.fields.file.url"
      :imgsrccinq="pagelocation.fields.image5.fields.file.url"
    />
    <div class="container-grid-row">
      <fullWidth
        class="demi-width-v-two"
        :imgsrc="pagelocation.fields.blocImage.fields.file.url"
      />
      <div class="demi-width-v-two">
        <div class="infos-center-v-two descriptif-yoga" v-html="$md.render(pagelocation.fields.blocDeText.fields.description)" />
      </div>
    </div>
    <h2 class="section-title">
      {{ pagelocation.fields.inclusionTitre }}
    </h2>
    <div class="demi-width-descriptifs">
      <descriptifs
        v-for="(inclusion, index) in pagelocation.fields.inclusions"
        :key="index"
        :title="inclusion.fields.title"
        :descriptionlist="inclusion.fields.description"
      />
    </div>
    <h2 class="section-title">
      Liste de prix <br><!--<span class="taxes">  Tx in</span>-->
    </h2>
    <div class="container-prix">
      <prices
        v-for="(prix, index) in pagelocation.fields.price"
        :key="index"
        :title="prix.fields.title"
        :price="prix.fields.prix"
        class="prices"
        description=""
        cta="Réserve"
      />
    </div>
  </div>
</template>

<script>
import fullWidth from '~/components/fullWidthBloc.vue'
import descriptifs from '~/components/descriptifs.vue'
import prices from '~/components/prixReserve.vue'
import photos from '~/components/blocphoto.vue'
import client from '@/plugins/contentful'

export default {
  components: {
    fullWidth,
    prices,
    descriptifs,
    photos
  },
  data () {
    return {
      title: 'Espace IVY - location',
      description: 'Créateur de Valeur et de Mouvement l’Espace IVY est une place unique en son genre! Il s’agit à la fois d’un studio de Yoga et d’une galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec. L’ambiance y est chaleureuse et décontractée ou l’on se plaît à faire du yoga décomplexé sur des mélodies accrocheuses et des rythmes entraînants. La plupart de nos classes sont ouvertes à tous les niveaux. Le studio de Yoga offre une tarification très accessible et marginale puisque aucun abonnement n’est offert. Zéro obligation, pas de prélèvement automatique, tu payes quand tu viens! Que ce soit pour bouger, lâcher prise, croire en toi, ralentir, te sentir plus ancré, plus souple, plus fort ou moins stressé, l’Espace IVY à Granby est une place où se retrouver afin de partager une pratique de Yoga entre amis, collègues ou en famille. Un lieu de rencontre et d’échange qui fait la promotion des Arts par des expositions et des événements. Bonne humeur à volonté et imperfections bienvenues!'

    }
  },
  asyncData () {
    return client
      .getEntries({
        content_type: 'pageLocation'
      })
      .then((entries) => {
        return {
          pagelocation: entries.items[0]
        }
      })
      .catch(e => console.log(e))
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
.landscape-photo {
  height: auto;
  width: 50%;
}
.portrait-photo {
  height: auto;
  max-width: 40%;
}
.taxes {
  font-size: 2rem;
  color: #FCDA1E;
}
@media screen and (max-width: 600px) {
  .taxes {
    font-size: small;
  }
}
</style>
