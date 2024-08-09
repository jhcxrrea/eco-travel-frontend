<template>
  <div>
    <header class="text-center my-5">
      <h1>{{ destination.name }}</h1>
      <p class="lead">{{ destination.description }}</p>
    </header>
    
    <section class="gallery-section my-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="destination.images[0]" alt="Imagem do Destino" class="img-fluid rounded mb-3" />
        </div>
        <div class="col-md-6">
          <h3>Detalhes do Destino</h3>
          <p>Informações adicionais sobre este destino incrível.</p>
        </div>
      </div>
    </section>
    
    <section class="reviews-section my-5">
      <h2 class="text-center mb-4">Comentários</h2>
      <div class="row">
        <div class="col-md-12">
          <p>Seus comentários e avaliações são bem-vindos!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DestinationDetailsPage',
  data() {
    return {
      destination: {
        id: '1',
        name: 'Destino Exemplo',
        description: 'Descrição detalhada do destino.',
        images: ['image1.jpg']
      }
    };
  }
}
</script>

<style scoped>
.gallery-section img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
