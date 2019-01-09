<template>
  <div class="main__box">
  <div class="banner__container">
    <nuxt-link to="/">
      <img src="~/assets/Logobox.png" class="banner__logo">
    </nuxt-link>
  <div class="header__container">
    <ul id="nav-list" class="header__menu">
      <li v-for="item in items" class="header__menu-item">
        <nuxt-link :to=item.link >
          {{item.message}}
        </nuxt-link>
      </li>
    </ul>
  </div>
  </div>
    <nuxt/>
    <footer class="footer__container">
      <div class="footer_art">Logo & Art made by Grizzly</div>
      <div class="footer_dev">Website developed by Reeonz</div>


    </footer>
  </div>
</template>

<script>
export default {

  data () {
    return {
      items: [
        {message: 'About us', link: '/about'},
        {message: 'Tournaments', link: '/tournaments'},
        {message: 'Twitch', link: 'twitch'},
        {message: 'Contact', link: 'contact'}
      ]
    }
  }
}




</script>
