<template>
  <div class="container-max-width">
    <header class="text-center my-5">
      <h1>Resultados da Pesquisa</h1>
      <p class="lead">Veja o que encontramos para você.</p>
    </header>
    
    <section class="results-section">
      <div class="row">
        <div class="col-md-4" v-for="result in results" :key="result.id">
          <DestinationCard :destination="result" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DestinationCard from '../components/DestinationCard.vue';

export default {
  name: 'SearchResultsPage',
  components: {
    DestinationCard
  },
  data() {
    return {
      results: [
        { id: '1', name: 'Destino 1', description: 'Descrição 1', images: ['image1.jpg'] },
        { id: '2', name: 'Destino 2', description: 'Descrição 2', images: ['image2.jpg'] },
        { id: '3', name: 'Destino 3', description: 'Descrição 3', images: ['image3.jpg'] }
      ]
    };
  }
}
</script>

<style scoped>
.container-max-width {
  max-width: 1060px;
  margin: 0 auto; /* Centraliza o contêiner dentro da página */
}

.results-section {
  padding: 20px 0 30px 0;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
