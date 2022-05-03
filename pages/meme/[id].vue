<template>
  <div class="meme-wrapper">
    <h1>{{ data.data.find((e) => e.ID === +$route.params.id).name }}</h1>
    <img
      :src="data.data.find((e) => e.ID === +$route.params.id).image"
      width="400"
    />
    <p>{{ data.data.find((e) => e.ID === +$route.params.id).tags }}</p>
    <p>{{ data.data.find((e) => e.ID === +$route.params.id) }}</p>
    <br />
    <NuxtLink to="/">Go back </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data }: { data: any } = await useFetch('/api/memes', {});
</script>

<style>
.meme-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}
</style>
