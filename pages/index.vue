<template>
  <main class="main">
    <TheHeader />
    <section class="container">
      <h1>pages/index.vue</h1>
      <button @click="toggleLayout">Toggle layout</button>
      <hr />
      <ul class="memes">
        <li class="meme" v-for="meme in data.data" :key="meme.ID">
          <NuxtLink :to="'/meme/' + meme.ID">
            <img :src="meme.image" width="200" />
          </NuxtLink>
        </li>
      </ul>
    </section>
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import { TheFooter, TheHeader } from '#components';
const route = useRoute();
function toggleLayout() {
  if (route.meta.layout === 'default') {
    route.meta.layout = 'custom';
  } else {
    route.meta.layout = 'default';
  }
}
const { data }: { data: any } = await useFetch('/api/memes', {});
useHead({ title: '🧨🃏👀 memes 😹' });
definePageMeta({
  layout: 'default',
});
</script>

<style lang="css">
*,
*::after,
*::before {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.layout-text {
  opacity: 0.5;
  font-size: small;
  position: fixed;
  top: 8px;
  left: 8px;
  color: black;
}

.main {
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}

.container {
  padding: 8px;
  display: inline-block;
  overflow: auto;
}

.button {
  height: 30px;
  margin: 4px;
}

.memes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.meme {
  list-style: none;
}

.header,
.footer {
  background-color: black;
  color: white;
}

/** */

.custom-layout .layout-text {
  color: white;
}

.custom-layout .header,
.custom-layout .footer {
  background-color: lightgrey;
  color: black;
}
</style>
