<template>
  <div class="custom-height container text-center d-flex align-items-center justify-content-center">
    <h1>404 - Página Não Encontrada</h1>
    <p class="lead">Desculpe, a página que você está procurando não foi encontrada.</p>
    <router-link to="/" class="btn btn-success">Voltar para a Página Inicial</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style>
.custom-height {
  height: 39.9rem;
  flex-direction: column;
}
</style>
