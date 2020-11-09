<template>
  <div id="app">
    <DeliveryPage/>
  </div>
</template>

<script>
import DeliveryPage from './pages/DeliveryPage.vue'

export default {
    name: 'App',
    components: {
        DeliveryPage,
    }
}
</script>

<style>
#app {
    font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
