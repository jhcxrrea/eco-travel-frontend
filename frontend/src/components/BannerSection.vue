<template>
  <section class="banner">
    <div class="container text-center">
      <h1 class="display-4">Descubra o Mundo com a <span>EcoTravel</span></h1>
      <p class="lead">Explore destinos incríveis e participe de <span>Atividades sustentáveis</span>.</p>
      <button class="btn btn-light btn-lg">
        <router-link class="nav-link" to="/register">Comece Agora</router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style scoped>
.banner {
  background: url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
  padding: 5rem 1rem;
  text-align: center;
}

span {
  color: #bfff00;
}

h1, p {
  font-weight: bold;
}
</style>
