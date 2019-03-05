<template>
  <section class="container">
    <div class="page__container">
      <img src="~/assets/TheBansheesLogo_Mythallic.png" class="index__logo">
      <div class="index__introduction">
        A community project to connect women in StarCraft. Do you want to meet other female fans and players in Starcraft 2? Join our discord:
        <a href="#" > <!--ACTUAL LINK:  http://discord.gg/4mfubAx || Placeholder for dev because I suck at clicking -->
        <discordLogoBig class="index__discord-logo" />
        </a>
        <span class="index__disclaimer">Our discord is open to all who identify as female.</span>
      </div>
    </div>
  </section>
</template>

<script>
import discordLogoBig from 'assets/discord-color.svg';
export default {
  layout: 'default',
  components: {
    discordLogoBig
    }
}

</script>
