<template>
  <section class="container">
    <div class="page__container">
      Want to talk to us?
      You can find us on:
      <twitterLogo2 />
      <discordLogo />

      Or send us a message:
      <div>
          <form>
              <input v-model="name" placeholder="Your name" >
              <input v-model="email" placeholder="Your e-mail" >
              <textarea v-model="message" placeholder="Your message">

              </textarea>
              <button>Send it!</button>
          </form>
      </div>
    </div>
  </section>
</template>

<script>
import twitterLogo2 from 'assets/iconmonstr-twitter-3.svg';
import discordLogo from 'assets/iconmonstr-discord-1.svg';

export default {
    layout: 'default',

    components: {
        twitterLogo2,
        discordLogo
    }
}

</script>