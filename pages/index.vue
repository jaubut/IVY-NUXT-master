<template>
  <div class="">
    <reouverture />
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
import reouverture from '~/components/banner-reouverture.vue'

export default {
  components: {
    fullWidth,
    reouverture
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
.video-live-dan {
  height: 40vh;
  width: auto;
  padding-top: 2.5rem;
}
.full-fb-live {
    position: relative;
    display: grid;
    grid-template: 100% / 100%;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    margin: 0 2rem 0.75rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
.text-cover {
  padding:0 25vw;
}
@media screen and (max-width: 600px) {
  .button-virtuel {
    font-size: medium;
    width: 90vw;
    border-radius: 5px !important;
    margin-top: 15px;
  }
  .button-group {
    flex-flow: row wrap;
  }
  .text-cover {
    padding: 0 10vw;
  }
  .video-live-dan {
    width: 100%;
    height: 100%;
  }
}
.button-virtuel:hover {
  background: rgb(194, 168, 22);
  color: black;
}
.active {
  background: #fcda1e;
}
.a {
  border-radius: 5px 0 0 5px;
}
.b {
  border-radius: 0 5px 5px 0;
}
.c {
  border-radius: 5px;
}
</style>
