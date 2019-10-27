<template>
  <div class="menu-ivy">
    <div class="logo-ivy">
      <n-link to="/">
        <img src="~/assets/img/logo/logo-complet.svg" width="120">
      </n-link>
    </div>
    <div class="container-row container-menu">
      <div class="button-ivy">
        <n-link to="/location/">
          <p>Espace Ivy</p>
        </n-link>
      </div>
      <div class="button-ivy">
        <n-link to="/yoga/">
          <p>Ivy Yoga</p>
        </n-link>
      </div>
      <div class="button-ivy">
        <n-link to="/evenements/">
          <p>Événements & Art</p>
        </n-link>
      </div>
    </div>
    <div class="social-menu">
      <a href="https://www.instagram.com/espaceivy/" target="_blank"><i class="fab fa-instagram" /></a>
      <a href="https://www.facebook.com/espaceivy/" target="_blank"><i class="fab fa-facebook-square" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.menu-ivy {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 2rem 5px 2rem;
}
.button-ivy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: #FCDA1E;
}
.button-ivy p {
    font-size: 1rem;
}
.container-menu {
  width: 100%;
}
@media screen and (max-width: 600px) {
    .button-ivy {
        visibility: hidden;
        width: 0;
        height: 0;
    }
    .container-row {
      height: 0;
      width: 0;
    }
    .menu-ivy {
        justify-content: center;
        flex-flow: column wrap;
        padding: 15px;
    }
    .fab {
        padding: 10px;
        font-size: 2rem;
    }
}
</style>
