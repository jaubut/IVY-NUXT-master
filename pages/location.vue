<template>
  <Layout>
    <div>
      <fullWidth
        class="full-width-v-two"
        title=""
        description=""
        textcolor="white"
        link=""
        imgsrc="img/studio/photo-loue-espace.jpg"
      />
      <photos
        imgsrcun="img/studio/bureau.jpg"
        imgsrcdeux="img/studio/vestiere.jpg"
        imgsrctrois="img/studio/eka.jpg"
        imgsrcquatre="img/studio/salle-essayage.jpg"
        imgsrccinq="img/studio/eau.jpg"
      />
      <div class="container-grid-row">
        <fullWidth
          class="demi-width-v-two"
          imgsrc="img/studio/galerie.jpg"
        />
        <textBlock
          class="demi-width-v-two"
          title="Informations"
          description="Grand loft industriel lumineux classé patrimoine culturel du Québec!"
          sousdescription="1550 Pi2 / 15Pi de hauteur sous plafond, (capacité d’accueil de 30 personnes pour le yoga). Espace zen, plancher de bois franc, très grandes fenêtres."
          textcolor="black"
        />
      </div>
      <h2 class="section-title">
        Inclusions
      </h2>
      <div class="demi-width-descriptifs">
        <descriptifs
          title="Matériel"
          :descriptionlist="materiels"
        />
        <descriptifs
          title="Équipement"
          :descriptionlist="equipements"
        />
      </div>
      <h2 class="section-title">
        Liste de prix <br><span class="taxes">  Tx in</span>
      </h2>
      <div class="container-prix">
        <prices
          class="prices"
          title="1H"
          price="35 $"
          description=""
          cta="Réserve"
        />
        <prices
          class="prices"
          title="Bloc de 4H"
          price="120 $"
          backcolor=""
          description=""
          cta="Réserve"
        />
        <prices
          class="prices"
          title="Bloc de 8H"
          price="250 $"
          description=""
          cta="Réserve"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import fullWidth from '~/components/fullWidthBloc.vue'
import textBlock from '~/components/text-block.vue'
import descriptifs from '~/components/descriptifs.vue'
import prices from '~/components/prixReserve.vue'
import photos from '~/components/blocphoto.vue'

export default {
  components: {
    fullWidth,
    textBlock,
    prices,
    descriptifs,
    photos
  },
  data () {
    return {
      materiels: ['40 Blocs de liège', '25 Traversins Moyen en coton', '25 Sangles en coton', '20 Yoga Tune Up Therapy Balls', '20 Chaises pliantes', '10 Tapis BMAT', '25 Couvertures cotton indien'],
      equipements: ['Coin lounge minimaliste & ethnique', 'Coin réception épuré & ergonomique', 'Fontaine à eau Ovopur', 'Access à internet', 'Vidéoprojecteur', 'Speaker Bose Revolve (son à 360 degrés)'],
      title: 'Espace IVY - location',
      description: 'Créateur de Valeur et de Mouvement l’Espace IVY est une place unique en son genre! Il s’agit à la fois d’un studio de Yoga et d’une galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec. L’ambiance y est chaleureuse et décontractée ou l’on se plaît à faire du yoga décomplexé sur des mélodies accrocheuses et des rythmes entraînants. La plupart de nos classes sont ouvertes à tous les niveaux. Le studio de Yoga offre une tarification très accessible et marginale puisque aucun abonnement n’est offert. Zéro obligation, pas de prélèvement automatique, tu payes quand tu viens! Que ce soit pour bouger, lâcher prise, croire en toi, ralentir, te sentir plus ancré, plus souple, plus fort ou moins stressé, l’Espace IVY à Granby est une place où se retrouver afin de partager une pratique de Yoga entre amis, collègues ou en famille. Un lieu de rencontre et d’échange qui fait la promotion des Arts par des expositions et des événements. Bonne humeur à volonté et imperfections bienvenues!'

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
