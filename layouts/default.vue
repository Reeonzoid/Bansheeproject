<template>
  <div class="main__box">
  <div class="banner__container">
    <nuxt-link to="/">
      <img src="~/assets/Logobox.png" class="banner__logo">
    </nuxt-link>
  <div class="header__container">
    <ul id="nav-list" class="header__menu">
      <li v-for="item in items" class="header__menu-item" v-bind:key="item">
        <nuxt-link :to=item.link >
          {{item.message}}
        </nuxt-link>
      </li>
    </ul>
  </div>
  </div>
    <nuxt/>
    <footer class="footer__container">
      <div class="footer__art"><a href="#">Logo & Art made by Grizzly</a></div>
      <div class="footer__dev"><a href="#">Website developed by Reeonz</a></div>
      <span class="footer__item">Copyright &copy; 2019 The Banshees</span>
      <div class="footer__links">
        <a href="#" class="footer__icon"><twitterLogo /></a>
        <a href="#" class="footer__icon"><discordLogo /></a>
      </div>


    </footer>
  </div>
</template>

<script>

import discordLogo from 'assets/iconmonstr-discord-1.svg';
import twitterLogo from 'assets/iconmonstr-twitter-1.svg';

export default {

  data: function(){
    return {
      items: [
        {message: 'About us', link: '/about'},
        {message: 'Tournaments', link: '/tournaments'},
        {message: 'Twitch', link: 'twitch'},
        {message: 'Contact', link: 'contact'}
      ],
      handles: [
        {
          alt: "Twitter",
          link: "#",
          icon: "/assets/iconmonstr-twitter-1.svg"
        },
        {
          alt: "Discord",
          link: "#",
          icon: "/assets/iconmonstr-discord-1.svg"
        }
      ]
    }
  },

  components: {
    twitterLogo,
    discordLogo
  }
}




</script>
