<template>
  <div class="">
    <div class="container-block full-fb-live">
      <div class="infos-center-v-two">
        <img width="100" src="@/assets/img/logo/fb-live.svg" alt="">
        <h1>Yoga virtuel !</h1>
        <h3>Rejoins-nous sur le <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank"><span style="text-decoration:underline;">groupe Facebook privé</span></a> pour avoir accès à toutes les classes de yoga en ligne.<br>Tu peux te procurer l'accès virtuel pour seulement <a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100066" target="_blank"><strong>20 $ par mois</strong></a> ou <a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100067" target="_blank"><strong>120 $ pour l'année.</strong></a></h3>
        <video autoplay class="video-live-dan">
          <source type="video/mp4" src="@/assets/videos/fb-live-dan-2.mp4">
        </video>
        <p>*Si tu as déjà un abonnement au studio,<br> bonne nouvelle, les classes en ligne sont incluses,<br> tu n'as qu'à demander l'accès <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank"><strong>au groupe</strong></a>!</p>
        <div class="button-group">
          <a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100066" target="_blank" class="button-virtuel a">Mensuel 20 $/mois</a>
          <a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100067" target="_blank" class="button-virtuel b active">Annuel 120 $ (économise 50%)</a>
        </div>
      </div>
    </div>
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
  transition: 0.5s ease;
  background: rgba(252, 218, 30, 0.25);
  font-size: 1.5rem;
}
.button-virtuel:hover {
  background: rgb(194, 168, 22);
  color: black;
}
.active {
  background: rgba(252, 218, 30, 1);
}
.a {
  border-radius: 5px 0 0 5px;
}
.b {
  border-radius: 0 5px 5px 0;
}
</style>
