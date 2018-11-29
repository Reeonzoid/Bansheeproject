<template>
  <div>
  <div class="banner__container">
    <img src="~/assets/TheBansheesLogo_Mythallic.png" class="banner__logo">
    <ul id="nav-list">
      <li v-for="item in items">
      {{item.message}}
      </li>
    </ul>
  </div>
    <nuxt/>
  </div>
</template>

<script>
export default {

data () {
  return {
    items: [
      {message: 'About us'},
      {message: 'Tournaments'},
      {message: 'Twitch'},
      {message: 'contact'}
    ]
  }
}
}




</script>
