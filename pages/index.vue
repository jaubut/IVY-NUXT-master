<template>
  <div class="">
    <fullWidth
      link="yoga"
      class="full-width-v-two"
      :title="indexyoga.fields.title"
      :description="indexyoga.fields.description"
      :sousdescription="indexyoga.fields.sousDescription"
      textcolor="white"
      :imgsrc="indexyoga.fields.imgsrc.fields.file.url"
    />
    <div class="container-grid-row">
      <fullWidth
        link="location"
        class="demi-width-v-two"
        :title="indexlocation.fields.title"
        :description="indexlocation.fields.description"
        :sousdescription="indexlocation.fields.sousDescription"
        textcolor="white"
        :imgsrc="indexlocation.fields.imgsrc.fields.file.url"
      />
      <fullWidth
        link="evenements"
        class="demi-width-v-two"
        :title="indexevenement.fields.title"
        :description="indexevenement.fields.description"
        :sousdescription="indexevenement.fields.sousDescription"
        textcolor="white"
        :imgsrc="indexevenement.fields.imgsrc.fields.file.url"
      />
    </div>
  </div>
</template>

<script>
import client from '@/plugins/contentful'
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
  },
  asyncData () {
    return client
      .getEntries({
        content_type: 'pageIndex'
      })
      .then((entries) => {
        return {
          indexyoga: entries.items[0].fields.blocDintro[0],
          indexlocation: entries.items[0].fields.blocDintro[1],
          indexevenement: entries.items[0].fields.blocDintro[2]
        }
      })
      .catch(e => console.log(e))
  }
}
</script>

<style>

</style>
