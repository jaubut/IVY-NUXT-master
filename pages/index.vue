<template>
  <Layout>
    <div class="">
      <fullWidth
        link="yoga"
        class="full-width-v-two"
        title="Yoga"
        description="Toutes les classes sont ouvertes."
        sousdescription="Les portes ouvrent 15 minutes avant le cours."
        textcolor="white"
        imgsrc="img/studio/photo-cours-dan.jpg"
      />
      <div class="container-grid-row">
        <fullWidth
          link="location"
          class="demi-width-v-two"
          title="Location"
          description="Loue l'espace pour tes projets!"
          textcolor="white"
          imgsrc="img/studio/photo-loue-espace.jpg"
          logosrc=""
        />
        <fullWidth
          link="evenements"
          class="demi-width-v-two"
          title="Événements & Art"
          description="Découvre, explore, partage!"
          sousdescription=""
          textcolor="white"
          imgsrc="img/studio/eka.jpg"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import fullWidth from '~/components/fullWidthBloc.vue'

export default {
  components: {
    fullWidth
  },
  data () {
    return {
      title: 'Espace IVY',
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

<style>

</style>
