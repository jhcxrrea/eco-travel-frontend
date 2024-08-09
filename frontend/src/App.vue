<template>
  <div id="app">
    <AppNavbar />
    <LoadingSpinner :isLoading="isLoading" />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    startLoading() {
      console.log("Start Loading"); // Depuração
      this.isLoading = true;
    },
    stopLoading() {
      console.log("Stop Loading"); // Depuração
      this.isLoading = false;
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.stopLoading();
      }, 1500); // Tempo para garantir a visibilidade do spinner
    });
  }
}
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  background-color: #f8f9fa;
}

main {
  padding: 0rem 1rem;
}

.router-view {
  transition: opacity 0.3s ease;
}

.router-view-enter-active, .router-view-leave-active {
  opacity: 1;
}

.router-view-enter, .router-view-leave-to {
  opacity: 0;
}
</style>
